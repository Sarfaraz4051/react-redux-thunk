import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch_users } from "./action";

const Users = () => {
  const loading = useSelector((state) => state.loading);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_users());
  }, [dispatch]);

  const renderUsers = () => {
    if (loading) {
      return <h1>Loading</h1>;
    }
    return users.map((u) => {
      return <p key={u.id}>{u.name}</p>;
    });
  };

  return (
    <div>
      <h1>Users</h1>
      {renderUsers()}
    </div>
  );
};

export default Users;
