import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-100">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link active" aria-current="page">
              Inicio
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/cursos">
            <a className="nav-link" aria-current="page">
              Cursos
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/instructores">
            <a className="nav-link" aria-current="page">
              Instructores
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/estudiantes">
            <a className="nav-link" aria-current="page">
              Estudiantes
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
