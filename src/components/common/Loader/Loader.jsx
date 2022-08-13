import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {  Puff } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

export const LoaderSpinner = () => {
  return (
    <Loader>
      <Puff/>
    </Loader>
  );
};
