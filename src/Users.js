import React, { useEffect } from "react";
import { fetchUsers } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addU, delU } from "./redux/slice";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.users.items);
  const info = useSelector((state) => state.info.items);
  //   console.log("USERS", info.length);

  return (
    <>
      <h1>Users {info.length ? info.length : 0}</h1>
      <table
        style={{
          borderCollapse: "collapse",
        }}
        border={1}
      >
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {info.find((infoItem) => infoItem.id === item.id) ? (
                  <button onClick={() => dispatch(delU(item))}>
                    Delete User
                  </button>
                ) : (
                  <button onClick={() => dispatch(addU(item))}>Add User</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
