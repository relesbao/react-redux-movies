export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const API_COMPLETE = 'API_COMPLETE';

export const API_LOADING = 'API_LOADING';
export const API_FINISHED = 'API_FINISHED';

// Api actions
export const apiRequest = ({
  body, method, url, context,
}) => ({
  type: `${context} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, context },
});

export const apiSuccess = ({ response, context }) => ({
  type: `${context} ${API_SUCCESS}`,
  payload: response,
  meta: { context },
});

export const apiError = ({ error, context }) => ({
  type: `${context} ${API_ERROR}`,
  payload: error,
  meta: { context },
});

export const apiLoading = ({ context }) => ({
  type: `${context} ${API_LOADING}`,
  meta: { context },
});

export const apiFinished = ({ context }) => ({
  type: `${context} ${API_FINISHED}`,
  meta: { context },
});
