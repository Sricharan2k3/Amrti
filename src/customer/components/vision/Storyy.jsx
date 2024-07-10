import React from "react";
import story from "../../Pages/our story png.png";
import { useNavigate } from "react-router-dom";

const Story = () => {
  
  const navigate = useNavigate();
  return (
    <div class="headers" id="test">
      <a onClick={() => navigate(`/about`)}>
        {" "}
        <img src={story} alt="" style={{ margin: "auto" }} />
      </a>
    </div>
  );
};

export default Story;
