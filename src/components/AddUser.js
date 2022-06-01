import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Add = () => {
  const navigate = useNavigate();
  const { users, addUser } = useContext(GlobalContext);
  const [user, setUser] = useState("");

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = () => {
    navigate("/");
    const newUser = {
      name: user,
      id: users.length + 1,
    };
    addUser(newUser);
  };
  return (
    <div>
      <input type="text" name="user" value={user} onChange={handleUser} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Add;
