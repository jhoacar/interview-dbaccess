<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

/**
 * 
 *
 * @OA\Server(url="http://localhost:8000")
 *
 * @OA\Tag(
 *     name="StudentController",
 *     description="API Endpoints of Students"
 * )
 */

class StudentController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/students",
     *     tags={"StudentController"},
     *     summary="Mostrar estudiantes",
     *     @OA\Response(
     *         response=200,
     *         description="Muestra todos los estudiantes."
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
        $students = Student::all();
        return $students;
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
     *     path="/api/students",
     *     tags={"StudentController"},
     *     summary="Subir un estudiante",
     *     @OA\RequestBody(
     *       @OA\JsonContent(
     *            type="object",
     *            @OA\Property(property="name", type="string",example="Jose"),
     *            @OA\Property(property="courses", type="array",
     *               @OA\Items(
     *                  @OA\Property(
     *                         property="_id",
     *                         type="string",
     *                         example="203912830924812094"
     *                  )
     *               )
     *            )
     *       )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Subir un estudiante a la base de datos."
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
        $student = Student::create($request->all());
        return response()->json(array_merge(['status' => 'created'], $student));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}
