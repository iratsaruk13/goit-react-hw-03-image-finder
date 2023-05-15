import { Formik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, FormStyle, SearchInput, SearchBtn } from "./Searchbar.styled";
import { FaSearchengin } from "react-icons/fa";
import propTypes from "prop-types";

export const Searchbar = ({ onSubmit }) => {
  const formSubmit = (value, actions) => {
    if (value.searchValue.trim() === "") {
      toast.error("The search field cannot be empty");
      return;
    }
    onSubmit(value.searchValue.trim());
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ searchValue: "" }} onSubmit={formSubmit}>
        <FormStyle>
          <SearchInput
            name="searchValue"
            type="text"
            autoFocus
            placeholder="Enter your search query"
          />
          <SearchBtn type="submit">
            <FaSearchengin />
          </SearchBtn>
        </FormStyle>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
