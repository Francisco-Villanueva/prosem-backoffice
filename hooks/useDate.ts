export default function useDate() {
  const dia = new Date();
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const año = dia.getFullYear(); // Obtiene el año (ejemplo: 2023)
  const mes = String(dia.getMonth() + 1).padStart(2, "0"); // Obtiene el mes (ejemplo: 08)
  const día = String(dia.getDate()).padStart(2, "0"); // Obtiene el día (ejemplo: 21)

  const currentDay = `${año}-${mes}-${día}`;

  const getWeekDay = (numberDay: number) => days[numberDay];
  return { currentDay, getWeekDay };
}
