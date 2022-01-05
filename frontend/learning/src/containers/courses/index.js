import { useEffect, useState } from "react";

import { courseEndPoint , schemeCourse } from "../../utils/constants";
import { getCourses } from "../../utils/connections";

import ButtonGroup from "../../components/ButtonGroup";

const CoursePage = ({ ...props }) => {

  const [courses, setCourses] = useState([]);

  const refreshItems = () => getCourses(setCourses);

  useEffect(refreshItems, []);

  return (
    <ButtonGroup titleModal={"Crear Curso"} itemsModal={schemeCourse} endPointPost={courseEndPoint} refreshItems={refreshItems}></ButtonGroup>
  );
};

export default CoursePage;
