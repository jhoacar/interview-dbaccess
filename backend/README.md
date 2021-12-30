<h1 align="center">Learning Application API</h1>

<p>
  Dado el problema se propone una solucion con el framework Laravel de PHP,
  usando una base de datos no relacional, debido a la poca informacion proporcionada
  y posibles cambios que se quieran surgir en el futuro, este tipo de base
  de datos permite una mayor flexibilidad al momento de querer agregar nuevos atributos
  a las entidades ya estudiadas, para ello usaremos MongoDB.
</p>

<h2>Analisis de Requerimientos: </h2>

<ul>
    <li>
        <h3><strong>
                Crear cursos indicando el instructor, duración y la hora del día en que se imparte. Un instructor no
                puede ser asignado a 2 cursos que se den a la misma hora:
            </strong></h3>
        <p>
            Analizamos las entidades presentes y sus atributos, que serian:
        <ul>
            <li>
                <strong>Instructor</strong><br>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Cursos</li>
                </ul>
            </li>
            <li>
                <strong>Curso</strong><br>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Duracion</li>
                    <li>Fecha</li>
                    <li>Instructor</li>
                </ul>
            </li>
        </ul>
        </p>
    </li>
    <li>
        <h3>
            <strong>
                Crear y modificar la plantilla de instructores de la plataforma.
            </strong>
        </h3>
        <p>
            Analizamos las entidades presentes y sus acciones, que serian:
        <ul>
            <li>
                <strong>Instructor</strong><br>
                <ul>
                    <li>Crear</li>
                    <li>Borrar</li>
                    <li>Actualizar</li>
                    <li>Obtener</li>
                </ul>
            </li>
        </ul>
        </p>
    </li>
    <li>
        <h3>
            <strong>
                Cargar la lista de estudiantes y asignarlos a los cursos que asisten. Un estudiante no puede ser asignado a 2 cursos que se impartan a la misma hora.
            </strong>
        </h3>
        <p>
            Analizamos las entidades presentes con sus atributos y acciones, que serian:
        <ul>
            <li>
                <strong>Estudiante</strong><br>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Cursos</li>
                </ul><br>
                <ul>
                    <li>Crear</li>
                    <li>Borrar</li>
                    <li>Actualizar</li>
                    <li>Obtener</li>
                </ul>
            </li>
        </ul>
            Analizamos las relaciones que deben tener entre la entidad Estudiante y Curso
        </p>
    </li>
    <li>
        <h3>
            <strong>
                Se debe poder consultar los cursos, instructores, estudiantes, y poder revisar el cronograma de un día para revisar los cursos que se dan en algún día específico.
            </strong>
        </h3>
        <p>
            Analizamos las acciones presentes que se tienen que realizar
        <ul>
            <li>
                Consultar los cursos
            </li>
            <li>
                Consultar los instructores
            </li>
            <li>
                Consultar los estudiantes
            </li>
            <li>
                Consultar el cronograma de algun en específico
            </li>
        </ul>
        </p>
    </li>
</ul>
