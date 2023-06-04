import React from "react";
import List from "./crud/ContactList";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <navbar
        style={{
          backgroundColor: "#4C86C1",
          paddingLeft: "10px",
        }}
        className="flex justify-center items-center px-4 py-2 bg-white rounded"
      >
        <h1 className="text-black text-center text-2xl font-bold">
          All Contacts
        </h1>
      </navbar>

      <List />

      <footer
        style={{
          backgroundColor: "white",
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <div className="container px-4 px-lg-5">
          <div className="small">© 2023 - Koushik PLN</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
