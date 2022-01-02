<?php

namespace App\Http\Controllers;

use App\Course;
use App\Instructor;
use Illuminate\Http\Request;
/**
* @OA\Info(title="API Course", version="1.0")
*
* @OA\Server(url="http://localhost:8000")
*
* @OA\Tag(
*     name="CourseController",
*     description="API Endpoints of Courses"
* )
*/
class CourseController extends Controller
{
    /**
    * @OA\Get(
    *     path="/api/courses",
    *     tags={"CourseController"},
    *     summary="Mostrar cursos",
    *     @OA\Response(
    *         response=200,
    *         description="Mostrar todos los cursos."
    *     ),
    *     @OA\Response(
    *         response="default",
    *         description="Ha ocurrido un error."
    *     )
    * )
    */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::all();
        return $courses;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    /**
     * @OA\Post(
     *     path="/api/courses",
     *     tags={"CourseController"},
     *     summary="Subir un curso",
     *     @OA\RequestBody(
     *       @OA\JsonContent(
     *            type="object",
     *            @OA\Property(property="name", type="string",example="Curso de Programacion"),
     *            @OA\Property(property="duration", type="string",example="1h-30min"),
     *            @OA\Property(property="start_date", type="date",example="29-12-2019"),
     *            @OA\Property(property="instructor_id", type="string",example="61d2082c371e5949897a8fe5"),
     *       )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Subir un curso a la base de datos."
     *     ),
     *     @OA\Response(
     *         response="default",
     *         description="Ha ocurrido un error."
     *     )
     * )
     */
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $instructor_id = $request->input("instructor_id");
        $instructor = Instructor::find($instructor_id);
        $startDate = $request["start-date"];
        
        if(!$instructor)
            return response()->json(['error' => 'failed searching instructor at DB','instructor_id' =>$instructor_id]);
        
        else if(!$instructor["courses"])
            return $this->createCourse($request->all());

        else if($this->validateDate($startDate,$instructor))
            return $this->createCourse($request->all());
        
        else
            return response()->json(['error' => 'failed create a course, there are match with dates in other courses for this instructor','instructor_id' =>$instructor_id]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        //
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        //
    }


    /**
     * Search each course if has dates equals
     *
     * @param  \App\Instructor  $instructor
     * @return boolean
     */
    public function validateDate( $date ,Instructor $instructor)
    {
        $courses = $instructor["courses"];

        if(!$date || !$courses)
            return false;

        $hasRepeatDate = false;

        foreach( $courses as $course ){

            if($hasRepeatDate($date,$course)){
                $hasRepeatDate=true;
                break;
            }
        }
        dd($hasRepeatDate); // this is for access it out of the loop.
        return $hasRepeatDate;
    }
    /**
     * Compare if course has same date
     *
     * @param  \App\Course  $course
     * @return boolean
     */
    public function hasRepeat( $date ,Course $course)
    {
            
        $foundCourse = Course::find($course["_id"]);

        if(!$foundCourse)
            return false;
            
        $startDate = $foundCourse["start-date"];

        if(!$startDate)
            return false;

        if($startDate === $date)
            return true;

        return false;
    }
    /**
     * Create a course and update courses of his instructor
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    private function createCourse($course){
        
        $course_created = Course::create($course);

        $instructor_id = $course["instructor_id"];

        Instructor::where('_id', '=', $instructor_id)
        
        ->push('courses', array( '_id' => $course_created["_id"]));
        
        return $course_created;
    }
}
