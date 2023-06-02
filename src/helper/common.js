//Json response template
const response = (res, result, status, message, pagination) => {
  const resultPrint = {};
  if (status >= 200 && status <= 299) {
    resultPrint.status = "success";
  } else {
    resultPrint.status = "failed";
  }
  resultPrint.statusCode = status;
  resultPrint.data = result || [];
  resultPrint.message = message || null;
  resultPrint.pagination = pagination || {};
  res.status(status).json(resultPrint);
};

module.exports = { response };
