import { Card } from "../../components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../miniComponents/styles/Skills.css";

const Skills = () => {
  const containerStyle = {
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  const [skills, setSkills] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "https://init-student-backend.onrender.com/api/v1/skill/getall",
        { withCredentials: true }
      );
      setSkills(data.skills);
    };
    getMySkills();
  }, []);

  const handleAddClick = () => {
    setAddModalOpen(true);
  };

  const handleEditClick = (skill) => {
    setCurrentSkill(skill);
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setCurrentSkill(null);
  };

  return (
    <div style={containerStyle}>
      <div className="skills-container">
        <h1 className="skills-title">SKILLS</h1>
        <button onClick={handleAddClick} className="add-skill-button">+</button>
        <div className="skills-scroll-container">
          <div className="skills-section">
            {skills.map((element) => (
              <Card className="skill-card" key={element._id}>
                <img
                  src={element.svg && element.svg.url}
                  alt="skill"
                  className="skill-img"
                />
                <p className="skill-title">
                  {element.title}
                </p>
                <button onClick={() => handleEditClick(element)}>Edit</button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {isAddModalOpen && (
        <div className="modal">
          {/* Add skill form goes here */}
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal">
          {/* Edit skill form goes here */}
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Skills;
