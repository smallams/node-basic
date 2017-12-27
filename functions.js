// const students = [
//   {
//     name: 'Juan',
//     age: 13
//   },
//   {
//     name: "Pedro",
//     age: 15
//   }
// ];
//
// const DisplayStudents = (students) => {
//    // console.log('Student 1:', students[0].name);
//    // console.log('Student 2:', students[1].name);
//
//    console.log(JSON.stringify(students,undefined,2));
// }
//
// DisplayStudents(students);


const CreatePerson =(name,age)=>{
  return person = {
    Name: name,
    Age: age
  }
}

const person = CreatePerson('Ron','27');

console.log(JSON.stringify(person,undefined,2));
