import { register, format } from "timeago.js";
const localeFunc = (number, index, totalSec) => {
  // number: the timeago / timein number;
  // index: the index of array below;
  // totalSec: total seconds between date to be formatted and today's date;
  return [
    ["justo ahora", "ahora mismo"],
    ["hace %s segundos", "dentro de %s segundos"],
    ["hace 1 minuto", "dentro de 1 minuto"],
    ["hace %s minutos", "dentro de %s minutos"],
    ["hace 1 hora", "dentro de 1 hora"],
    ["hace %s horas", "dentro de %s horas"],
    ["hace 1 día", "dentro de 1 día"],
    ["hace %s días", "dentro de %s días"],
    ["hace 1 semana", "dentro de 1 semana"],
    ["hace %s semanas", "dentro de %s semanas"],
    ["hace 1 mes", "dentro de 1 mes"],
    ["hace %s meses", "dentro de %s meses"],
    ["hace 1 año", "dentro de 1 año"],
    ["hace %s años", "dentro de %s años"],
  ][index];
};
// register your locale with timeago
register("my-locale", localeFunc);

export const formatTime = (time) => format(time, "my-locale");
