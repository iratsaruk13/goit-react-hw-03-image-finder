import React, { Component } from "react";
import { fetchImages } from "../services/api";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import catEmpty from "./images/cat.png";
import {
  Container,
  Empty,
  EmptyText,
  LoadMoreBtn,
} from "./ImageGallery/ImageGallery.styled";

export class App extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    error: null,
    empty: false,
    searchQuery: "",
    total: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.state;
    
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.getPictures(this.state.searchQuery, this.state.page);
    }

    if (prevState.images !== images && images.length > 12) {
      const { height: cardHeight } = document
        .querySelector("ul")
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 4,
        behavior: "smooth",
      });
    }
  }
  getPictures = async (searchValue, page) => {
    try {
      this.setState({ loading: true });
      const response = await fetchImages(searchValue, page);
      

      if (!response.hits.length) {
        toast.error(`There are no images : ${searchValue}`);
        return this.setState({ empty: true });
      }
      this.setState((prevState) => ({
        images: [...prevState.images, ...response.hits],
        page: prevState.page,
        total: response.total,
        empty: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  onSearchQueryChange = (searchQuery) => {
    this.setState({
      searchQuery,
      images: [],
      page: 1,
      total: 1,
      loading: false,
      error: null,
      empty: false,
    });
  };
  btnLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, total, page, empty, loading } = this.state;

    return (
      <Container>
        {loading && <Loader></Loader>}
        <Searchbar onSubmit={this.onSearchQueryChange} />
        <ImageGallery images={images} />
        {empty && (
          <Empty>
            <EmptyText> There are no images matching your query 😢</EmptyText>
            <img src={catEmpty} alt="cat" width="300" />
          </Empty>
        )}

        {total / 12 > page && (
          <LoadMoreBtn type="button" onClick={this.btnLoadMore}>
            {" "}
            Load More{" "}
          </LoadMoreBtn>
        )}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}
