import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Idle from 'components/Idle';
import UncorrectSearch from 'components/UncorrectSearch';
import { useState, useEffect } from 'react';
import { AppWrapper } from './components/common/AppWrapper';
import { LoadMoreBtn } from './components/common/LoadMoreBtn';
import { LoaderSpinner } from './components/common/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as API from 'services/api';


export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [hits, setHits] = useState([]);
  const [totalhits, setTotalhits] = useState(null);
  const [lastpage, setLastpage] = useState(null);

  useEffect(() => {
    if (searchValue === '') {
      return;
    } else {
      setStatus('loading');
      API.fetchGallery({ page, q: searchValue }).then(result => {
        setTotalhits(result.data.totalHits);
        setLastpage(Math.ceil(result.data.totalHits / 12));
        setHits(prevHits =>
          page === 1
            ? [...result.data.hits]
            : [...prevHits, ...result.data.hits]
        );
        setStatus('resolved');
      });
    }
  }, [page, searchValue]);

  useEffect(() => {
    window.scrollBy({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [hits]);

  const handleFormSubmit = searchValue => {
    if (searchValue.trim() === '') {
      toast.warn('Please enter a search term!');
    } 
      setStatus('loading');
      setSearchValue(searchValue);
      setPage(1);
      setHits([]);
      setTotalhits(null);
      setLastpage(null);
    
  };

  const loadNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppWrapper>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'idle' && <Idle />}
      {status === 'loading' && <LoaderSpinner />}
      {totalhits > 0 && <ImageGallery options={hits} />}
      {totalhits === 0 && status === 'resolved' && <UncorrectSearch />}
      {totalhits > 12 && page !== lastpage && (
        <LoadMoreBtn type="button" onClick={loadNextPage}>
          load more
        </LoadMoreBtn>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppWrapper>
  );
}

