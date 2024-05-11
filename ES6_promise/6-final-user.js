import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(filename);

  return Promise.all([userPromise, photoPromise])
    .then(([user, photo]) => [
      {
        status: 'done',
        value: user,
      },
      {
        status: 'rejected',
        value: photo,
      },
    ])
    .catch((error) => [
      {
        status: 'rejected',
        value: error,
      },
    ]);
}
