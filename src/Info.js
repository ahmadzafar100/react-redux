import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delU, removeAllUser } from "./redux/slice";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const info = useSelector((state) => state.info.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.clear();
    dispatch(removeAllUser);
    navigate("/");
  };
  return (
    <>
      <h1>Added Users List - {info.length}</h1>
      {info.length ? (
        <>
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
              {info.map((item, key) => (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => dispatch(delU(item))}>
                      Delete User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSubmit}>OK</button>
        </>
      ) : (
        <p>No User Found</p>
      )}
    </>
  );
};

export default Info;
