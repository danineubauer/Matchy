import React from "react";

export const LoginForm = () => {
  return (
    <form>
      <label>
        <input type="text" name="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <label>
        <input className="login-button" type="submit" value="submit" />
      </label>
    </form>
  );
};
