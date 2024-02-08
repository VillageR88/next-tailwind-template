/* eslint-disable */
const dataFetch = async (url) => {
  await fetch('https://cleanuri.com/api/v1/shorten', {
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
dataFetch('https://www.google.com');