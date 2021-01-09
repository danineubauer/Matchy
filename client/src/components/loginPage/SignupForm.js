import React from "react";

export const SignupForm = () => {
  return (
    <form>
      <label>
        <input type="text" name="name" placeholder="First name" />
      </label>
      <label>
        <input type="text" name="last-name" placeholder="Last name" />
      </label>
      <label>
        <input type="text" name="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <label>
        <input
          type="password"
          name="repeat-password"
          placeholder="Repeat password"
        />
      </label>
      <input className="login-button" type="submit" value="submit" />
    </form>
  );
};
