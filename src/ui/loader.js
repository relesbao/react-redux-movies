import React from 'react';
import { connect } from 'react-redux';
import mapApi from './mappers/api';

export const Loader = ({ isLoading }) => (
  isLoading
    ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : ''
);

// I created this HOC with the idea of wrapping any component that needs to be aware of the API busy state.
// This way the wrapped component does not need to know how to get the api busy information, keeping it more clean.
export const withLoader = (WrappedComponent) => {
  const WithLoaderWrapper = (props) => {
    const { api } = props;
    return (
      <div>
        <Loader isLoading={api.isLoading} />
        <WrappedComponent {...props} />
      </div>
    );
  };
  return connect(mapApi)(WithLoaderWrapper);
};
