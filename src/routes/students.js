const express = require("express");
const app = express();

// import Students Controller
const students = require("../controllers/studentsController");
// console.log(students);

app.get("/", (req, res) => {
  res.send("Hola Mundo, primera API Rest!");
});

app.get("/students", (req, res) => {
  const inst = new students();
  const allStudents = inst.getAllStudents();
  res.status(200);
  res.json({
    data: allStudents,
  });
});

app.get("/students/id/:value", (req, res) => {
  const value = req.params.value;
  const getInfoStudent = new students();
  const getStudentById = getInfoStudent.getStudentById(value);
  res.status(200);
  res.json({
    data: getStudentById,
  });
});

app.get("/students/name/:value", (req, res) => {
  const value = req.params.value;
  const getInfoStudent = new students();
  const getStudentByName = getInfoStudent.getStudentByName(value);
  res.status(200);
  res.json({
    data: getStudentByName,
  });
});

app.get("/students/grade/:value", (req, res) => {
  const value = req.params.value;
  const getInfoStudent = new students();
  const getStudentByGrade = getInfoStudent.getStudentsByGrade(value);
  res.status(200);
  res.json({
    data: getStudentByGrade,
  });
});

app.get("/students/search/:text", (req, res) => {
  const getInfoStudent = new students();
  const text = req.params.text;
  const searchStudent = getInfoStudent.searchByName(text);
  res.status(200);

  res.json({
    data: searchStudent,
  });
});

module.exports = app;
