import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }
  handleKeydown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}
