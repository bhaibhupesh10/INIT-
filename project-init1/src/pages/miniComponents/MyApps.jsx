import { Card } from "../../components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../miniComponents/styles/MyApps.css";

const MyApps = () => {

  const containerStyle = {
    width: '100%',             // 100% of the window width
    margin: '0 auto',         // Center the container
    padding: '20px',          // Add some padding for content
    backgroundColor: '#f0f0f0', // Light gray background
    border: '1px solid #ccc', // Light border
    boxSizing: 'border-box',  // Include padding in width/height
    overflow: 'hidden',       // Ensure content doesn't overflow
  };

  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://init-student-backend.onrender.com/api/v1/softwareapplication/getall",
        { withCredentials: true }
      );
      setApps(data.softwareApplications);
    };
    getMyApps();
  }, []);

  return (
    <div style={containerStyle}>
      <div className="myapps-container">
        <h1 className="myapps-title">MY APPS</h1>
        <div className="myapps-scroll-container">
          <div className="myapps-section">
            {apps.map((element) => (
              <Card className="myapp-card" key={element._id}>
                <img
                  src={element.svg && element.svg.url}
                  alt={element.name}
                  className="myapp-img"
                />
                <p className="myapp-name">
                  {element.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApps;
