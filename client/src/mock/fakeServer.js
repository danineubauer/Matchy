export const callApi = () => { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve('Hi, I am your server!');
    }, 1000);
  });
};
