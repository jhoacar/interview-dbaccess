import { useEffect, useState } from "react";


const updateCourses = async setCourses =>{
    const response = await fetch(process.env.API_URL);
    console.log(response);
}


const CoursePage  = ()=>{

    const [courses, setCourses] = useState([]);

    useEffect(()=>updateCourses(setCourses),[courses]);

    return (
        <>
            <div>
                Cursito
            </div>
        </>
    );
};

export default CoursePage;