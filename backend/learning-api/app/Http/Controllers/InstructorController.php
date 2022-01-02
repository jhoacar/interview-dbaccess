<?php

namespace App\Http\Controllers;

use App\Instructor;
use Illuminate\Http\Request;
/**
* @OA\Info(title="API Course", version="1.0")
*
* @OA\Server(url="http://localhost:8000")
*
* @OA\Tag(
*     name="InstructorController",
*     description="API Endpoints of Instructors"
* )
*/
class InstructorController extends Controller
{
    /**
    * @OA\Get(
    *     path="/api/instructors",
    *     tags={"InstructorController"},
    *     summary="Mostrar instructores",
    *     @OA\Response(
    *         response=200,
    *         description="Mostrar todos los instructores."
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
        $instructors = Instructor::all();
        return $instructors;
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
    *     path="/api/instructors",
    *     tags={"InstructorController"},
    *     summary="Subir un instructor",
    *     @OA\Response(
    *         response=200,
    *         description="Postea un instructor a la base de datos."
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
        $instructor = Instructor::create($request->all());
        return response()->json(array_merge(['status' => 'created'],$instructor));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Instructor  $instructor
     * @return \Illuminate\Http\Response
     */
    public function show(Instructor $instructor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Instructor  $instructor
     * @return \Illuminate\Http\Response
     */
    public function edit(Instructor $instructor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Instructor  $instructor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Instructor $instructor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Instructor  $instructor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Instructor $instructor)
    {
        //
    }
}
