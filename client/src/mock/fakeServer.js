import Ape, { name, age, loremIpsum, arrayOf } from "ape-mock";

const users = arrayOf({
  firstName: name().female(),
  lastName: name().lastName(),
  age: age().adult(),
  location: loremIpsum().randomSequence().maxLength(2),
  hobbies: loremIpsum().randomSequence().maxLength(1),
  interests: loremIpsum().randomSequence().maxLength(2),
})
  .repeat(50)
  .generate();

const rejected = [];
const approved = [];

export const callApi = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback());
    }, 1000);
  });
};

export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const searchUserByName = (searchString) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const matches = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.includes(searchString);
      });

      resolve(matches);
    }, 1000);
  });
};

export const approveUser = (user) => {};

export const rejectUser = (user) => {};
