import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserExperience,
  createExperience,
  getSingleExperience,
  editExperience,
  removeExperience,
  setExpID,
} from "../redux/action/ExperienceAction";
import { getAllProfile } from "../redux/action/UserAction";
import { createPost } from "../redux/action/PostAction";

const ExperienceTest = () => {
  const experiences = useSelector((state) => state.experience.experiences);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfile);
    dispatch(getUserExperience);
    // dispatch(createExperience);
    // dispatch(createExperience);
  }, []);

  const handleCreateExperience = () => {
    const newExperienceData = {
      role: "New Role",
      company: "New Company",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      description: "New experience",
      area: "New Area",
    };
    dispatch(createExperience);
  };

  const handleFetchSingleExperience = () => {
    dispatch(getSingleExperience);
  };

  const handleEditExperience = () => {
    const updatedData = {
      role: "Updated Role",
      company: "Updated Company",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      description: "Updated experience",
      area: "Updated Area",
    };
    dispatch(editExperience);
  };

  const handleDeleteExperience = (id) => {
    dispatch(setExpID(id));
    dispatch(removeExperience);
  };

  return (
    <div>
      <h2>Experiences:</h2>
      {experiences.map((exp) => (
        <div key={exp._id}>
          <h3>{exp.role} </h3>
          <p>{exp.company}</p>
          <button onClick={() => handleDeleteExperience([exp.user, exp._id])}>
            delete
          </button>
        </div>
      ))}
      <button onClick={handleCreateExperience}>Create Experience</button>
      <button onClick={handleFetchSingleExperience}>
        Fetch Single Experience
      </button>
      <button onClick={handleEditExperience}>Edit Experience</button>
      <button onClick={handleDeleteExperience}>Delete Experience</button>
    </div>
  );
};

export default ExperienceTest;
