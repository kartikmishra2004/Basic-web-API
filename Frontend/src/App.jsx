import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const BASE_URL = "http://localhost:3000/api/school";
        const data = await fetch(BASE_URL);
        const jsonData = await data.json();
        setData(jsonData);
      } catch (error) {
        console.log("Error fetching data from API");
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="bg">
        {data.map((data, index) => (
          <div class="card">
          <div className="container">
          <div key={data._id}>
            <h3>Name : {data.name}</h3>
            <h3>Age : {data.age}</h3>
            <h3>Gender : {data.gender}</h3>
            <h3>
              Adhaar card :{" "}
              {!data.hasAdhaarCard ? "Not available" : "available"}
            </h3>
            <h3>
              PAN card : {!data.hasPanCard ? "Not available" : "available"}
            </h3>
            <br /> <br />
          </div>
          </div>
        </div>
          
        ))}
      </div>
    </>
  );
};

export default App;
