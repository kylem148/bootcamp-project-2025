import React from "react";
import Timeline from "../components/Timeline";
import {experiences} from "../constants/index"
function Resume() {
  
  return (
    <div id="resume" className="scroll-mt-20 relative w-full overflow-clip">
      <Timeline data={experiences} />
    </div>
  );
}

export default Resume;
