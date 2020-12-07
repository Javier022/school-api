const express = require("express");
const app = express();

// import Students Controller
const students = require("../controllers/studentsController");

app.get("/", (req, res) => {
  res.send("Hello world, first API rest!");
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
  let value = parseInt(req.params.value);
  console.log("typeof of value:", typeof value);
  const id = value && value !== NaN ? value : "";
  // console.log("type of id !", typeof id);
  console.log("valor del id:", id);

  const getInfoStudent = new students();
  const getStudentById = getInfoStudent.getStudentById(id);
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
