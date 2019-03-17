import {
  API_REQUEST, apiError, apiSuccess, apiLoading, API_SUCCESS, API_ERROR, apiFinished,
} from '../actions/api';

const apiRequestMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const {
      body, url, method, context,
    } = action.meta;

    fetch(url, { body, method })
      .then(response => response.json())
      .then(response => dispatch(apiSuccess({ response, context })))
      .catch(error => dispatch(apiError({ error, context })));
  }
};

const apiStateMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { context } = action.meta;
    dispatch(apiLoading({ context }));
  }

  if (action.type.includes(API_SUCCESS) || action.type.includes(API_ERROR)) {
    const { context } = action.meta;
    dispatch(apiFinished({ context }));
  }
};

export {
  apiRequestMiddleware,
  apiStateMiddleware,
};
