<?php

namespace App\Http\Controllers;

use App\Course;
use App\Instructor;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Throwable;

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
     *            @OA\Property(property="duration", type="string",example="01:30:00"),
     *            @OA\Property(property="start_date", type="date",example="2016-01-23 11:53:20"),
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
        $instructorId = $request->input("instructor_id");
        $startDate = $request->input("start_date");
        $duration = $request->input("duration");

        $instructor = Instructor::find($instructorId);
        $errorProperties = $this->getErrorProperties($request->all());

        if ($errorProperties)
            return response()->json(['error' => $errorProperties, 'instructor_id' => $instructorId]);

        else if (!$instructor)
            return response()->json(['error' => 'failed searching instructor at DB', 'instructor_id' => $instructorId]);

        else if (!$instructor["courses"])
            return $this->createCourse($request->all());

        else if ($this->validateDate($startDate, $duration, $instructor))
            return $this->createCourse($request->all());

        else
            return response()->json(['error' => 'failed create a course, there are match with dates in other courses for this instructor', 'instructor_id' => $instructorId]);
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
    private function validateDate($date, $duration, Instructor $instructor)
    {
        
        $courses = $instructor["courses"];

        foreach ($courses as $course){
            if ($this->hasRepeat($date, $duration, $course))
                return false;
        }
        return true;
    }
    /**
     * Compare if course has same date
     *
     * @param  \App\Course  $course
     * @return boolean
     */
    private function hasRepeat($date, $duration, $course)
    {
        $idCourse = $course["_id"];
        $foundCourse = Course::find($idCourse);

        if (!$foundCourse)
            return true;

        $startDate = $foundCourse["start_date"];

        if (!$startDate)
            return true;

        if ($this->hasCollisionDate($date, $duration, $startDate))
            return true;

        return true;
    }
    /**
     * Create a course and update courses of his instructor
     *
     * @param  \App\Course  $course
     * @return \Illuminate\Http\Response
     */
    private function createCourse($course)
    {

        $courseCreated = Course::create($course);

        $instructorId = $course["instructor_id"];

        Instructor::where('_id', '=', $instructorId)

            ->push('courses', array('_id' => $courseCreated["_id"]));

        return $courseCreated;
    }
    /**
     * Validate that $initDate and $duration don't have collision with $endDate
     *
     * @param  string  $initDate
     * @param  string  $duration
     * @param  string  $endDate
     * @return boolean
     */
    private function hasCollisionDate($initDate, $duration, $endDate)
    {
        $timeInitDate = strtotime($initDate);
        $timeEndDate = strtotime($endDate);
        return $timeInitDate == $timeEndDate;
    }

    /**
     * Validate correct pattern of properties
     * @param object $properties
     * @return string Error message
     */
    private function getErrorProperties($properties){
        
        if(!isset($properties["start_date"]))
            return 'failed to create course, need start_date property';
        
        else if(!isset($properties["duration"]))
            return 'failed to create course, need duration property';
        
        else if(!strtotime($properties["start_date"]))
            return 'failed to create course, bad pattern in start_date property';

        else if(!strtotime($properties["duration"]))
            return 'failed to create course, bad pattern in duration property';

        return false;
    }

}
