import patients from "./patients";

export const appointments = [
  {
    appointmentId: 1,
    doctorId: 1,
    patientId: patients[0].id,
    patientName: `${patients[0].firstName} ${patients[0].lastName}`,
    day: "Tue",
    date: 9,
    time: "11:00AM",
  },
  {
    appointmentId: 2,
    doctorId: 2,
    patientId: patients[1].id,
    patientName: `${patients[1].firstName} ${patients[1].lastName}`,
    day: "Wed",
    date: 10,
    time: "01:00PM",
  },
  {
    appointmentId: 3,
    doctorId: 1,
    patientId: patients[2].id,
    patientName: `${patients[2].firstName} ${patients[2].lastName}`,
    day: "Thu",
    date: 11,
    time: "03:00PM",
  },
  {
    appointmentId: 4,
    doctorId: 3,
    patientId: patients[4].id,
    patientName: `${patients[4].firstName} ${patients[4].lastName}`,
    day: "Fri",
    date: 12,
    time: "10:00AM",
  },
];
