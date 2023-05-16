import { Component } from "react";
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import { Modal } from "../Modal/Modal";

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { img } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <GalleryItem key={img.id} onClick={this.openModal}>
           <GalleryImage src={img.webformatURL} alt={img.tags}></GalleryImage>
          
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={img.largeImageURL} alt={img.tags} />
          </Modal>
        )}
      </>
    );
  }
}

// ({img: {webformatURL, tags}}) => {
//     return (
//         <GalleryItem>
//                 <GalleryImage src={webformatURL} alt={tags}></GalleryImage>
//             </GalleryItem>
//     )
// }
