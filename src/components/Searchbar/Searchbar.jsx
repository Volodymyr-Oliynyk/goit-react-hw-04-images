import {
  SearchbarHeader,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Searchbarstyled';
import { Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={({ query }, { resetForm }) => {
          onSubmit(query);
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <SearchForm>
            <SearchButton type="submit">
              <BsSearch />
            </SearchButton>
            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              placeholder="Search images and photos"
              value={values.query}
              onChange={handleChange}
            />
          </SearchForm>
        )}
      </Formik>
    </SearchbarHeader>
  );
};

export default Searchbar;
