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
/*
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

//find and findIndex
let num = [3,7,5,1,2,0];
const evenNumber = (value,imdex,array) => {
  if(value%2===0)
  return value;
}
const firstEvenNumber = num.find(evenNumber);
const firstIndexNumvber = num.findIndex(evenNumber);
console.log(firstEvenNumber)
console.log(firstIndexNumvber)

//find and findIndex for any objected
const studentInfo4 =[
  {
    Height : 5.5,
    waight : 50
  },
  {
    Height : 4.5,
    waight : 60
  },
  {
    Height : 6.0,
    waight : 70
  },
  {
    Height : 6.2,
    waight : 80
  }
]
console.log(studentInfo4.find (x => x.Height > 6))
console.log(studentInfo4.findIndex (x => x.Height > 6))
*/
/*
import {text, setText} from './myModule.js'
console.log(text)
setText("Good Bye");
console.log(text)
//Another way
import{massage} from './myModule.js'
console.log(massage)
//Another way
import{t as massage1} from './myModule.js'
console.log(massage1)
*/
//Make class, constructor, objective
//The constructor() method is a special method for creating and initializing objects created within a class.

//The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

 class student {
   constructor(id, name){
     this.id = id;
     this.name = name;
   }
   //set the name to use set methode
   set studentName(name){
     this.name = name;
   }
   //get is use for get the object value form the class
   get studentInfoo(){
     return this.id + " "+ this.name;
   }
 }
 let st = new student (16201100, "Shanto");
 console.log(st.id)
 console.log(st.name)

 st.studentName = "Hasan";
 console.log(st.name)
 console.log(st.studentInfoo)
