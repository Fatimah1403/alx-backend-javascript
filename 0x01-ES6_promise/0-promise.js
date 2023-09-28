export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("API response data is true");
        }, 1000);
    }); 
}
