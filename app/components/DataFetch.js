const DataFetch = (url) => {
  fetch('https://cleanuri.com/api/v1/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `url=${url}`,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
export default DataFetch;
