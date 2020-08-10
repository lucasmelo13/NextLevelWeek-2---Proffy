const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
  ]
  
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
//Funcionalidades
function getSubjects(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
    //Ou seja o loop.index vai retornar um numero e aqui dentro iremos subtrai-lo -1 para pegar a matéria correta
    /*
    "Artes",           indice do array: 0      loop index = 1   
    "Biologia",        indice do array: 1      loop index = 2
    "Ciências",        indice do array: 2      loop index = 3
    "Educação física", indice do array: 3      loop index = 4
    "Física",          indice do array: 4      loop index = 5
    "Geografia",       indice do array: 5      loop index = 6
    "História",        indice do array: 6      loop index = 7
    "Matemática",      indice do array: 7      loop index = 8
    "Português",       indice do array: 8      loop index = 9
    "Química",         indice do array: 9      loop index = 10

    Por conta o indice array ser menor , realizar o calculo de -1
]
    */
}

function convertHoursToMinutes(time) {
    const [ hour, minutes ] = time.split(":")
    return Number((hour * 60) + minutes)
  }
  
  module.exports = {
    subjects,
    weekdays,
    getSubjects,
    convertHoursToMinutes
  }