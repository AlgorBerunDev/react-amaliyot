import axios from "axios";

const handleSuccess = (response, successHandler, finishHandler, dispatch, showSuccessToast) => {
  if (successHandler) successHandler(response);
  if (finishHandler) finishHandler(response);
  return response;
};

const handleError = (err, errorHandler, finishHandler, dispatch) => {
  console.error(err?.response?.status);
};

export default async function http({ url, method, data, success, error, finish, dispatch, showSuccessToast = false }) {
  const response = await axios({ url, method, data, baseURL: "http://localhost:3000" })
    .then(res => handleSuccess(res, success, finish, dispatch, showSuccessToast))
    .catch(err => handleError(err, error, finish, dispatch));

  return {
    json: response && response.data,
    status: response && response.status,
    response,
  };
}
