import {
  courseEndPoint,
  instructorEndPoint,
  studentEndPoint,
} from "./constants";

const fetching = async url =>{
  const response = await fetch(url);
  const data = await response.json();
  console.log("fetching data: ",data);
  return data;
}

export const getCourses = async (setCourses) => {
  
  const courses = await fetching(process.env.NEXT_PUBLIC_API_URL + courseEndPoint);

  if (!Array.isArray(courses)) return;

  courses?.map(courses=>{
    courses.instructor = getInstructor(courses?.instructor_id)
    return courses;
  });

  setCourses(courses);
};

export const getInstructor = async id => {
  if(!id) return null;
  
  //const instructor = await fetching(process.env.NEXT_PUBLIC_API_URL + instructorEndPoint + id);
  
};

export const getInstructors = async (setInstructors) => {

  const instructors = await fetching(process.env.NEXT_PUBLIC_API_URL + instructorEndPoint);

  if (!Array.isArray(instructors)) return;

  setInstructors(instructors);

};


export const getStudents = async (setStudents) => {

  const students = await fetching(process.env.NEXT_PUBLIC_API_URL + studentEndPoint);

  if (!Array.isArray(students)) return;

  setStudents(students);

};
