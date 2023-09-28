import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const info = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

    return Promise.allSettled(info).then((values) => {
        const results = [];
        values.forEach((elem) => {
          if (elem.status === 'fulfilled') {
            results.push({ status: elem.status, value: elem.value });
          } else {
            results.push({ status: elem.status, value: `Error: ${values.reason}` });
          }
        });
        return results;
    });
}
