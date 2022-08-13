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
        onSubmit={(values, actions) => {
          onSubmit(values.query);
          actions.resetForm();
        }}
        
      >
        {props => (
          <SearchForm>
            <SearchButton type="submit">
              <BsSearch/>
            </SearchButton>
            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              placeholder="Search images and photos"
              value={props.values.query}
              onChange={props.handleChange}
            />
          </SearchForm>
        )}
      </Formik>
    </SearchbarHeader>
  );
};

export default Searchbar;