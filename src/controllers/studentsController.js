const students = require("../db/studentsdb");

class Student {
  getAllStudents() {
    return {
      success: true,
      message: "Todos los Estudiantes",
      estudiantes: students,
    };
  }

  getStudentById(id) {
    if (typeof id === "number") {
      const data = students.find((index) => {
        const obj = {
          id: index.id === id,
        };
        return obj;
      });
      return {
        success: true,
        message: "Resultado Busqueda",
        studentId: data,
      };
    } else {
      return {
        success: false,
        message: "Debes Ingresar un ID valido",
        data: [],
      };
    }
  }

  getStudentByName(name) {
    const getName = students.find((nombre) => {
      return nombre.nombre === name;
    });
    return {
      success: true,
      message: "Resultado Busqueda",
      data: getName,
    };
  }

  getStudentsByGrade(grade) {
    const allGrades = students.filter((el) => {
      return el.grado === grade;
    });
    return {
      success: true,
      message: "Resultados Busqueda",
      data: allGrades,
    };
  }

  searchByName(value) {
    const text = value.toLowerCase();
    if (typeof text === "string" && text.length !== 0) {
      const allNames = students.filter((nameStudent) => {
        const names = nameStudent.nombre.toLowerCase();
        if (names.indexOf(text) !== -1) {
          return names;
        }
      });

      if (allNames.length !== 0) {
        // console.log(allNames.length);
        const onlyNames = allNames.map((val) => {
          const obj = {
            nombre: val.nombre,
          };
          return obj;
        });
        return {
          success: true,
          message: "Resultados Busqueda",
          data: onlyNames,
        };
      } else {
        return {
          success: false,
          message: "No Existe ningun usuario",
          data: [],
        };
      }
    }
  }
}

// const getInfoStudent = new Student();

module.exports = Student;
