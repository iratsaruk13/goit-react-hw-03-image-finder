import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding: 24px;
`;

export const ImageGalleryList = styled.ul`
  display: grid;
  flex-wrap: wrap;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const LoadMoreBtn = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #680471;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #a20eb0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;
export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-around;
  flex-wrap: wrap;
  padding-top: 18px;
  flex-direction: column;
`;

export const EmptyText = styled.p`
  font-size: 24px;
  color: #52016d;
`;
export const ImageEmpty = styled.img`
  width: auto;
`;
