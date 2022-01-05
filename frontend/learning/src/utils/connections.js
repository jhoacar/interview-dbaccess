import { courseEndPoint } from "./constants";



export const getCourses = async (setCourses) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + courseEndPoint);
    const data = await response.json();
    
    if (!Array.isArray(data)) return;

    setCourses(data);
    
    console.log("fetching courses: ", data);
  };