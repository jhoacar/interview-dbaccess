


export const getCourses = async (setCourses) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endPoint);
    const data = await response.json();
    
    if (!Array.isArray(data)) return;
    
    console.log("fetching courses: ", data);
  };