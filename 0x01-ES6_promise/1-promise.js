export default function getFullResponseFromAPI(success) {
   const response = new Promise((resolve, reject) => {
    if (success === true) {
        resolve({ status: 200, body: success });
    } else {
        reject(new Error("The fake API is not working currently"));
    }
   });
   return response;
}
