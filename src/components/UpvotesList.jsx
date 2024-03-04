import React, { useState, useEffect } from "react";
import Upvote from "./Upvote";

const UpvotesList = () => {
  const [upvotes, setUpvotes] = useState(() => {
    const savedUpvotes = localStorage.getItem("upvotes");
    return savedUpvotes ? JSON.parse(savedUpvotes) : [false, false];
  });

  useEffect(() => {
    localStorage.setItem("upvotes", JSON.stringify(upvotes));
  }, [upvotes]);

  const toggleUpvote = (index) => {
    const newUpvotes = [...upvotes];
    newUpvotes[index] = !newUpvotes[index];
    setUpvotes(newUpvotes);
  };

  const handleAddUpvotes = () => {
    setUpvotes([...upvotes, false]);
  };

  const handleRemoveUpvote = () => {
    const newUpvotes = [...upvotes];
    newUpvotes.pop();
    setUpvotes(newUpvotes);
  };

  return (
    <div className="upvote-list">
      <div className="upvote-container">
        <div className="upvote-card">
          {upvotes.map((upvote, i) => (
            <Upvote key={i} selected={upvote} onClick={() => toggleUpvote(i)} />
          ))}
        </div>
        <button className="upvote-actionBtn" onClick={handleAddUpvotes}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5C11.4477 5 11 5.45098 11 5.99078V11H5.99078C5.44359 11 5 11.4439 5 12C5 12.5523 5.45098 13 5.99078 13H11V18.0092C11 18.5564 11.4439 19 12 19C12.5523 19 13 18.549 13 18.0092V13H18.0092C18.5564 13 19 12.5561 19 12C19 11.4477 18.549 11 18.0092 11H13V5.99078C13 5.44359 12.5561 5 12 5Z"
              fill="#343A40"
            />
          </svg>
        </button>
        <button className="upvote-actionBtn" onClick={handleRemoveUpvote}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            id="minus"
          >
            <path
              fill="#000"
              d="M6 13a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H6Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UpvotesList;
