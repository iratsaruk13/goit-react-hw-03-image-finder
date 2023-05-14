import { Formik } from "formik";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({ onSubmit }) => {
    const formSubmit = (value, actions) => {
      if (value.searchValue.trim() === '') {
        toast.error(
          'The search field cannot be empty'
        );
        return;
      }
      onSubmit(value.searchValue.trim());
      actions.resetForm();
    };

    return(
        <Searchbar>
            <Formik
            initialValues={{ searchValue: '' }} onSubmit={formSubmit}
            >
                <input
                name="searchValue" type="text" />
                <button type="submit">Search</button>
            </Formik>
        </Searchbar>
    )
}