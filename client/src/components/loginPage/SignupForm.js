import React from 'react';

export const SignupForm = () => { 
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Last Name:
        <input type="text" name="last-name" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <label>
        Repeat Password:
        <input type="text" name="repeat-password" />
      </label>
      <input className="login-button" type="submit" value="submit" />
    </form>
  );
};
