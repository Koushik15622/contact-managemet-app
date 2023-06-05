import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { firstName, lastName, status } = existingUser[0];
  const [ufirstName, setFName] = useState(firstName);
  const [ulastName, setLName] = useState(lastName);
  const [ustatus, setUStatus] = useState(status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    console.log("here");
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        firstName: ufirstName,
        lastName: ulastName,
        status: ustatus,
      })
    );
    navigate("/");
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "white", paddingLeft: "10px" }}
        className="flex justify-center items-center  px-4 py-2 rounded"
      >
        <h1 className="text-black text-center text-2xl font-bold ">
          Edit Contact
        </h1>
      </nav>
      <br />
      <br />
      <div className="flex items-center justify-center">
        <div className="w-1/2 border bg-slate-500 text-white p-5">
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                First Name :
              </label>
              <input
                type="text"
                name="firstName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter first name"
                value={ufirstName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lname" className="block font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Last Name"
                value={ulastName}
                onChange={(e) => {setLName(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-white font-bold mb-2">
                Status:
              </label>
              <div className="flex items-center">
                <label htmlFor="Active" className="mr-2">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={ustatus === "Active"}
                    onChange={(e) => {
                      setUStatus(e.target.value);
                    }}
                  />
                  Active
                </label>
                <label htmlFor="InActive">
                  <input
                    type="radio"
                    name="status"
                    value="InActive"
                    checked={ustatus === "InActive"}
                    onChange={(e) => {
                      setUStatus(e.target.value);
                    }}
                  />
                  InActive
                </label>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" type="submit">
              Save
            </button>
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
