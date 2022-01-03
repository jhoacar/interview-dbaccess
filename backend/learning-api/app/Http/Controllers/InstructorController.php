<?php

namespace App\Http\Controllers;

use App\Instructor;
use Illuminate\Http\Request;
use Throwable;

/**
 * 
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
     *     @OA\RequestBody(
     *       @OA\JsonContent(
     *            type="object",
     *            @OA\Property(property="name", type="string",example="Jose")
     *       )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Subir un instructor a la base de datos."
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
        return $instructor;
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
     * @OA\Put(
     *     path="/api/instructor/{id}",
     *     tags={"InstructorController"},
     *     summary="Actualizar un instructor",
     *     @OA\Parameter(
     *         description="Id del instructor a actualizar",
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
     *         description="Actualizar un instructor a la base de datos."
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
     * @param  \App\Instructor  $instructor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $instructor = Instructor::findOrFail($request["id"]);
        $instructor->update($request->all());
        return $instructor;
    }
    /**
     * @OA\Delete(
     *     path="/api/instructors/{id}",
     *     tags={"InstructorController"},
     *     summary="Borrar un instructor",
     *     @OA\Parameter(
     *         description="Id del instructor a eliminar",
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
     *         description="Eliminar un instructor a la base de datos."
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
     * @param  \App\Instructor  $instructor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Instructor $instructor)
    {
        if(Instructor::destroy($request->id))
            return response()->json(["ok" => "istructor deleted"]);
        else
            return response()->json(["error" => "intructor could don't be deleted"]);
    }
}
