import { Button } from "../../components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../miniComponents/styles/Portfolio.css";

const Portfolio = () => {
  const containerStyle = {
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://init-student-backend.onrender.com/api/v1/project/getall",
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);

  return (
    <div style={containerStyle}>
      <div className="portfolio-container">
        <h1 className="portfolio-title hidden-sm">MY Projects</h1>
        <h1 className="portfolio-title show-sm">MY <span className="text-tubeLight-effect font-extrabold">WORK</span></h1>
        <span className="underline"></span>
        <div className="project-grid">
          {viewAll
            ? projects.map((element) => (
                <Link to={`/project/${element._id}`} key={element._id}>
                  <img src={element.projectBanner?.url} alt={element.title} className="project-image"/>
                </Link>
              ))
            : projects.slice(0, 9).map((element) => (
                <Link to={`/project/${element._id}`} key={element._id}>
                  <img src={element.projectBanner?.url} alt={element.title} className="project-image"/>
                </Link>
              ))}
        </div>
        {projects.length > 9 && (
          <div className="show-more-button">
            <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
              {viewAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
