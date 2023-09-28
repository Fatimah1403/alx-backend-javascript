import { uploadPhoto, createUser } from './utils';

// Define the handleProfileSignup function
export default async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body.firstName} ${user.body.lastName}`);
  } catch (error) {
    // Handle errors
    console.error('Signup system offline');
  }

