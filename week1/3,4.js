const students = [
    {
      name: 'Nam',
      age: 24,
      gender: 'male',
    },
    {
      name: 'Mai',
      age: 22,
      gender: 'female',
    },
    {
      name: 'Trang',
      age: 23,
      gender: 'female',
    },
    {
      name: 'An',
      age: 20,
      gender: 'male',
    },
    {
      name: 'Thien',
      age: 27,
      gender: 'male',
    },
  ];
 //CAU3-CACH1
  //xuat hoc sinh nam
  const result1 = students.filter(student => student.gender == 'male'); 
   //xuat hoc sinh nu
  const result2 = students.filter(student => student.gender == 'female');
//dem nam va nu
  var countMale = 0;
  var countFemale =0;

  students.forEach(function(item) {
    if(item.gender=='male')
    {countMale++}
    else
    {countFemale++};
  });
  //xuat ket qua
  console.log(countMale);
  console.log(countFemale);
console.log(result1);
console.log(result2);

//CAU3-CÁCH2
console.log(students.reduce((objGender, student)=>{
    if(student.gender == 'male') objGender.male++
    else objGender.female++
    return objGender
},{male: 0, female: 0}));
// //Câu4
const name = students.map(student => student.name);

console.log(name);

