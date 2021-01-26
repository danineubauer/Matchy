import React, { useState } from "react";
import profilePicture from "../../assets/gal_gadot.jpg";
import { getUsers, searchUserByName } from "../../mock/fakeServer";
import "./SearchPage.css";

export const SearchPage = () => {
  const [users, setUsers] = React.useState([]);
  const [userIndex, setUserIndex] = React.useState(0);
  const [searchString, setSearchString] = useState('');

  React.useEffect(() => { 
    (async () => { 
      const users = await getUsers();
      setUsers(users);
    })()
  }, [setUsers]);

  React.useEffect(() => { 
    (async () => { 
      if (searchString.trim() !== '') {
        const result = await searchUserByName(searchString);
        console.log(result);
      }
    })();
  }, [searchString]);

  const user = users[userIndex];

  return (
    <div>
      <div className="searchpage-main-container">
        <div className="searchpage-popup-container">
          <h2 className="searchpage-header">Find your Matchy</h2>
          <input placeholder="Search" onChange={(e) => {setSearchString(e.target.value)}} />
          <div className="searchpage-content-container">
            <div className="searchpage-photo-container">
              <img
                className="searchpage-photo"
                src={profilePicture}
                alt="Profile"
                width="200px"
                height="200px"
              />
            </div>

            {
              user && (
                <div className="searchpage-information-container">
                  <h2 className="searchpage-profile-name">{ `${user.firstName} ${user.lastName}` }</h2>
                  <p>age: { user.age }</p>
                  <p>location: {user.location}</p>
                  <p>interested in: {user.interests}</p>
                  <p>hobbies: {user.hobbies}</p>
                </div>
              )
            }
          </div>
          <div className="nav-buttons-container">
            <button className="nav-button">❌</button>
            <button className="nav-button">✅</button>
          </div>
        </div>
      </div>
    </div>
  );
};
