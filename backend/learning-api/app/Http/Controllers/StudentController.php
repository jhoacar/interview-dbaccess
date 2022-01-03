<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

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
     *       required=true,
     *       @OA\JsonContent(
     *            type="object",
     *            @OA\Property(property="name", type="string",example="Jose")
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
        return $student;
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
     * @OA\Put(
     *     path="/api/students/{id}",
     *     tags={"StudentController"},
     *     summary="Actualizar un estudiante",
     *     @OA\Parameter(
     *         description="Id del estudiante a actualizar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         example="24214432423v123",
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *       required=true,
     *       @OA\JsonContent(
     *            type="object",
     *            @OA\Property(property="name", type="string",example="Pedro"),
     *       )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Actualizar un curso a la base de datos."
     *     ),
     *     @OA\Response(
     *         response="default",
     *         description="Ha ocurrido un error."
     *     )
     * )
     */
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $student = Student::findOrFail($id);
        //$student = $request->all();
        //$student->save();
        return $student;
        // $student->update($request->all()); 
        // foreach($request as $parameter){
        //     $student->
        // }
        //$student->save();
        //$student = Student::where('_id',$request->id)
        //->update($request->all()); 

        // return DB::collection('users')
        //         ->where('_id', $request->id)
        //         ->update($request->all(), ['upsert' => true]);
    }

    /**
     * @OA\Delete(
     *     path="/api/students/{id}",
     *     tags={"StudentController"},
     *     summary="Borrar un estudiante",
     *     @OA\Parameter(
     *         description="Id del estudiante a eliminar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         example="124124124msas1231m",
     *         @OA\Schema(
     *             type="string",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Eliminar un estudiante a la base de datos."
     *     ),
     *     @OA\Response(
     *         response="default",
     *         description="Ha ocurrido un error."
     *     )
     * )
     */
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Student::destroy($id))
            return response()->json(["ok" => "student deleted"]);
        else
            return response()->json(["error" => "student could don't be deleted"]);
    }
}
