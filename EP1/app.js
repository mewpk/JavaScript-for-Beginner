console.log("Marian Onilne");
var height = 200;
const Nickname = "MaMa";
const ismale = false;
var money = null;
let bigNumber = 10n //bignit JS 2020

console.log(height,Nickname,ismale,money,bigNumber);


// เรื่อง Object 
const Person = {
    name : "MA JAA",
    age : 99,
    height : 200,
    city : "Bangkok"
}

console.log(Person)
console.log(Person.name)

Person.name = "Yea Miko"

console.log(Person.name)

Person.weight = 60

console.log(Person)

// เรื่อง  Array

const animals = ["Fish","Cat","Dog"]

console.log(animals)

console.log(animals[0])

animals.push("Tiger") //เพิ่มค่าด้านหลัง

console.log(animals)

animals.pop() //ลบตัวหลังสุดออก

console.log(animals)

animals.unshift("Duck") //เพิ่มค่าด้านหน้า

console.log(animals)

animals.shift() // ลบตัวหน้าสุด

console.log(animals)

// Arithmetic Operators เครื่องหมายคำนวณทางคณิตศาสตร์

let result = 5+1

console.log(result)

 result = 11/2

console.log(result)

 result = 11%2 // modulus หาเศษ

console.log(result)

result = 11*2

console.log(result)

// เรียงลำดับ ความสำคัญของเครื่องหมายจะ ** / * + - 

result = 10 +  2 ** 3 *2

console.log(result)
