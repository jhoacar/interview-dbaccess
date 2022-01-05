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
  
  const courses = await fetching(process.env.NEXT_PUBLIC_API_URL + courseEndPoint)

  if (!Array.isArray(courses)) return;

  courses?.map(course=>{
    
    getInstructor(course?.instructor_id)
    .then(instructor=>{
      if(instructor)
        course.instructor = instructor;
    })
    return course;
  });

  setCourses(courses);
};

export const getInstructor = async id => {
  if(!id) return null;
  
  const instructor = await fetching(process.env.NEXT_PUBLIC_API_URL + instructorEndPoint + id);
  
  if(instructor.error)
    return null;
  else
    return instructor;
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
