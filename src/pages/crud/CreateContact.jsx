import React, { useState } from "react";
import { addUser } from "../../UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("Active"); // Default status is "Active"
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        firstName,
        lastName,
        status,
      })
    );
    navigate("/");
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "white", paddingLeft: "10px" }}
        className="flex justify-center items-center px-4 py-2 rounded"
      >
        <h1 className="text-black text-center text-2xl font-bold">
          Create Contact
        </h1>
      </nav>
      <br />
      <br />
      <div className="flex items-center justify-center">
        <div className="w-1/2 border bg-slate-500 text-white p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-white font-bold mb-2">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-white font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                    checked={status === "Active"}
                    onChange={() => setStatus("Active")}
                  />
                  Active
                </label>
                <label htmlFor="InActive">
                  <input
                    type="radio"
                    name="status"
                    value="InActive"
                    checked={status === "InActive"}
                    onChange={() => setStatus("InActive")}
                  />
                  InActive
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
