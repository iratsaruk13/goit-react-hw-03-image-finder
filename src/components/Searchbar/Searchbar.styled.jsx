import styled from "styled-components";
import { Form, Field } from "formik";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  z-index: 10;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: rgb(64, 4, 88);
  background: linear-gradient(
    90deg,
    rgba(64, 4, 88, 1) 0%,
    rgba(153, 38, 187, 1) 35%,
    rgba(110, 118, 223, 1) 60%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormStyle = styled(Form)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 8px;
  padding-right: 8px;
  color: #52016d;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 64px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  svg {
    width: 30px;
    height: 30px;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :hover svg {
    scale: 1.2;
  }
`;
