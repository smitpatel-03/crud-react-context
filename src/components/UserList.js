import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li
            style={{ listStyle: "none", display: "flex", gap: "20px" }}
            key={index}
          >
            {console.log(user.name)}
            {user.name}
            <Link to={`/edit/${user.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => removeUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
