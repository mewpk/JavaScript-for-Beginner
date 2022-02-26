console.log("Hello world");
var height = 175;
const name = "MewPK";
const ismale = false;
var city = null;
let bigNumber = 10n //bignit JS 2020

console.log(height,name,ismale,city,bigNumber);


// เรื่อง Object and Array
const Person = {
    name : "Mew JAA",
    age : 18,
    height : 168,
    city : "Bangkok"
}

console.log(Person)
console.log(Person.name)

Person.name = "Yea Miko"

console.log(Person.name)

Person.weight = 49

console.log(Person)

const animals = ["Fish","Cat","Dog"]

console.log(animals)

console.log(animals[0])

animals.push("Tiger")

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
