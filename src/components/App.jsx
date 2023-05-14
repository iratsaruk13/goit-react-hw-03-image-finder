import React, { Component } from 'react';
import fetchImages from '../services/api';
import Loader from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
    state = {
        images: [],
        value: '',
        page: 1,
        loading: false,
      };

      componentDidUpdate(prevProps, prevState) {
        const {images} = this.state;

        if (prevState.images !== images && images.length > 12) {
            const {height: cardHeight} = document.querySelector('ul')
            .firstElementChild.getBoundingClientRect();

            window.scrollBy({
                top: cardHeight*4,
                behavior: 'smooth',
            })
        }
      }

      getPictures = async value => {
        try {
            const {page} = this.state;

            this.setState({loading:true})

            if (value !== this.state.value) {
                const responsePictures = await fetchImages(value, 1);
                return this.setState({
                    images: responsePictures,
                    page: 1,
                    value: value,
                })
            }

            if (value === this.state.value) {
                const responsePictures = await fetchImages(value, page);
                return this.setState(prevState => ({
                    page: prevState.page+1,
                    images: [...prevState.images, ...responsePictures],
                    value: value,
                }))
            }
        }
        catch(error) {
        }
        finally {
            this.setState({loading:false});
        }
      }

      render() {
        const {images} = this.state;
        const loadMoreBtn = images.length < 12 || images.length === 0;

        return (
            <div>
                {this.state.loading && <Loader></Loader>}  
                <Searchbar onSubmit={this.getPictures} />
                
            </div>
        )
      }
}