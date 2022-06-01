import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Edit = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const { users, editUser } = useContext(GlobalContext);

  const params = useParams();

  useEffect(() => {
    const user = users.find((user) => user.id === params.id);
    setSelectedUser(user);
  }, [params.id, users]);

  const onChangeHandler = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={selectedUser.name}
        onChange={onChangeHandler}
      />
      <button type="submit" onClick={handleSubmit}>
        Done
      </button>
    </div>
  );
};

export default Edit;
