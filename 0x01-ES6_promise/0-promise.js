export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API request
    setTimeout(() => {
      resolve('API response data');
    }, 1000);
  });
}
