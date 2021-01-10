import React, { useState } from "react";

export const SelectPhoto = () => {
  const [value, setValue] = useState(null);

  let fileSelectedHandler = (event) => {
    setValue(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <img className="profile-photo-container" src={value} />
      <input
        type="file"
        id="select-photo"
        accept="image/*"
        name="select-photo"
        onChange={() => fileSelectedHandler()}
        hidden
      />
      <label className="btn-select-photo" for="select-photo" role="button">
        select photo
      </label>
    </div>
  );
};
