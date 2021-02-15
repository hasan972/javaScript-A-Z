//array destruction
/*
let number = [10,20,30,40,50,60,70]
let [num1,num2,num3,num4, ...z] = number
console.log(num1)
console.log(num4)
console.log(z)
*/
//swap variable using destructure
/*
let a = 0, b = 20;
[a,b] = [b,a]
console.log(a,b)
*/
//ES6 objective destructure
const studentsInfo ={
  Name : 'Rakibul Hasan',
  Id : 16201100,
  cgpa : 3.24
}
const {Name,Id,cgpa} = studentsInfo
console.log(Name+ Id)
console.log(Id)
//nasted objected destruction
const studentsInfo2 ={
  name : 'Rakibul Hasan',
  id : 16201100,
  Cgpa : 3.24 ,
  Languages : {
    native : 'Bangle',
    mid :'English',
  nationality : {
    a :'Bangladeshi',
    b :'Indian'
   }
  }
}
const {name,id,Languages, nation,} = studentsInfo2
console.log(Name)
console.log(Languages)
console.log(Languages.native)
console.log(Languages.nationality)

//destructuring function parameter using ES6 functin
const studentInfo3 = ({Fullname,regId}) => {
  console.log(regId)
  console.log(Fullname)
}
const students = {
  Fullname : 'Rakibul Hasan',
  regId : 100
}
studentInfo3 (students)
