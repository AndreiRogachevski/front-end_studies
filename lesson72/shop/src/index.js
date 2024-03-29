import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import store from './store/store';
import { Provider } from 'react-redux';
// import './index.css';
import 'swiper/css/bundle';
import 'bootstrap/dist/css/bootstrap.css';
// import Form from './components/registration/Form';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container pt-3">
      <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
