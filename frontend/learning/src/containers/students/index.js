import { useEffect, useState } from "react";

import { studentEndPoint , schemeStudent } from "../../utils/constants";
import { getStudents } from "../../utils/connections";

import ButtonGroup from "../../components/ButtonGroup";
import { StudentCard } from "../../components/Cards";

const StudentContainer = ({ ...props }) => {

  const [students, setStudents] = useState([]);

  const refreshItems = () => getStudents(setStudents);

  useEffect(refreshItems, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
    <ButtonGroup titleModal={"Crear Estudiante"} itemsModal={schemeStudent} endPointPost={studentEndPoint} refreshItems={refreshItems}></ButtonGroup>
      {students?.map(student=><StudentCard student={student}/>)}
    </div>
  );
};

export default StudentContainer;
