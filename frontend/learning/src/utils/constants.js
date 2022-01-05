export const courseEndPoint = "/courses/";

export const instructorEndPoint = "/instructors/";

export const studentEndPoint = "/students/";

export const schemeCourse = [
  {
    label: "Nombre del Curso",
    type: "text",
    placeholder: "",
    required: 1,
  },
  {
    //label: "Duracion del Curso",
    //type: "text",
    //placeholder: "Duracion",
    required: 1,
    //step: "0.001",
    className:"html-duration-picker",
    //"data-duration-max":"00:35:00", 
    //children:
  },
  {
    label: "Fecha del Curso",
    type: "date",
    placeholder: "",
    required: 1,
  },
  {
    label: "Nombre del Instructor",
    type: "text",
    placeholder: "",
    required: 1,
  },
];

export const schemeInstructors = [
  {
    label: "Nombre del Instructor",
    type: "text",
    placeholder: "",
    required: 1,
  },
];

export const schemeStudents = [
  {
    label: "Nombre del Estudiante",
    type: "text",
    placeholder: "",
    required: 1,
  },
];
