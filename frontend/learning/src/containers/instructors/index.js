import { useEffect, useState } from "react";

import { instructorEndPoint , schemeInstructor } from "../../utils/constants";
import { getInstructors } from "../../utils/connections";

import ButtonGroup from "../../components/ButtonGroup";
import { InstructorCard } from "../../components/Cards";

const InstructorContainer = ({ ...props }) => {

  const [instructors, setInstructors] = useState([]);

  const refreshItems = () => getInstructors(setInstructors);

  useEffect(refreshItems, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
    <ButtonGroup titleModal={"Crear Instructor"} itemsModal={schemeInstructor} endPointPost={instructorEndPoint} refreshItems={refreshItems}></ButtonGroup>
      {instructors?.map((instructor,index)=><InstructorCard key={index} instructor={instructor}/>)}
    </div>
  );
};

export default InstructorContainer;
