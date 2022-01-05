import { useEffect, useState } from "react";

import { courseEndPoint , schemeCourse } from "../../utils/constants";
import { getCourses } from "../../utils/connections";

import ButtonGroup from "../../components/ButtonGroup";
import { CourseCard } from "../../components/Cards";

const CourseContainer = ({ ...props }) => {

  const [courses, setCourses] = useState([]);

  const refreshItems = () => getCourses(setCourses);

  useEffect(refreshItems, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
    <ButtonGroup titleModal={"Crear Curso"} itemsModal={schemeCourse} endPointPost={courseEndPoint} refreshItems={refreshItems}></ButtonGroup>
      {courses?.map(course=><CourseCard course={course}/>)}
    </div>
  );
};

export default CourseContainer;
