export default function getResponseFromAPI() {
    const response = Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("API response data is true");
        }, 1000);
    });
    return response;
}
