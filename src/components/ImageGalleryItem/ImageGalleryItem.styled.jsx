import styled from "styled-components";

export const GalleryItem = styled.li`
  border-radius: 2px;
  height: 280px;
  width: 100%;
  cursor: pointer;
  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.02;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
