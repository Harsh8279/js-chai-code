let num_in_string = "33"

console.log("type of number is ",typeof num_in_string,"and value is --> ",num_in_string)
console.log("Converting......")
num_in_number = Number(num_in_string)
console.log("type of number is ",typeof num_in_number,"and value is --> ",num_in_number)

// we can do this type of conversion but if we have alphanumeric value before conversion then???
// e.g. value will be "33abc" 

num_in_string = "33abc"

console.log("type of number is ",typeof num_in_string,"and value is --> ",num_in_string)
console.log("Converting......")
num_in_number = Number(num_in_string)
console.log("type of number is ",typeof num_in_number,"and value is --> ",num_in_number)
// answer for alphanumeric conversion is NaN --> Not a Number

num_in_string = null

console.log("type of number is ",typeof num_in_string,"and value is --> ",num_in_string)
console.log("Converting......")
num_in_number = Number(num_in_string)
console.log("type of number is ",typeof num_in_number,"and value is --> ",num_in_number)

let num_in_string_1

console.log("type of number is ",typeof num_in_string_1,"and value is --> ",num_in_string_1)
console.log("Converting......")
num_in_number_1 = Number(num_in_string_1)
console.log("type of number is ",typeof num_in_number_1,"and value is --> ",num_in_number_1)

num_in_boolean = false

console.log("type of number is ",typeof num_in_boolean,"and value is --> ",num_in_boolean)
console.log("Converting......")
num_in_number = Number(num_in_boolean)
console.log("type of number is ",typeof num_in_number,"and value is --> ",num_in_number)

num_in_boolean = true

console.log("type of number is ",typeof num_in_boolean,"and value is --> ",num_in_boolean)
console.log("Converting......")
num_in_number = Number(num_in_boolean)
console.log("type of number is ",typeof num_in_number,"and value is --> ",num_in_number)

let is_logged_in = 0

console.log("the value of is_logged_in -->",is_logged_in,"and type is --> ",typeof is_logged_in)

let boolean_in_num = Boolean(is_logged_in)
console.log("type of boolean_in_num is ",typeof boolean_in_num,"and value is --> ",boolean_in_num)

is_logged_in = 1

console.log("the value of is_logged_in -->",is_logged_in,"and type is --> ",typeof is_logged_in)

boolean_in_num = Boolean(is_logged_in)
console.log("type of boolean_in_num is ",typeof boolean_in_num,"and value is --> ",boolean_in_num)

is_logged_in = ""

console.log("the value of is_logged_in -->",is_logged_in,"and type is --> ",typeof is_logged_in)

boolean_in_num = Boolean(is_logged_in)
console.log("type of boolean_in_num is ",typeof boolean_in_num,"and value is --> ",boolean_in_num)


is_logged_in = "harsh"

console.log("the value of is_logged_in -->",is_logged_in,"and type is --> ",typeof is_logged_in)

boolean_in_num = Boolean(is_logged_in)
console.log("type of boolean_in_num is ",typeof boolean_in_num,"and value is --> ",boolean_in_num)


is_logged_in = null

console.log("the value of is_logged_in -->",is_logged_in,"and type is --> ",typeof is_logged_in)

boolean_in_num = Boolean(is_logged_in)
console.log("type of boolean_in_num is ",typeof boolean_in_num,"and value is --> ",boolean_in_num)

is_logged_in = undefined

console.log("the value of is_logged_in -->",is_logged_in,"and type is --> ",typeof is_logged_in)

boolean_in_num = Boolean(is_logged_in)
console.log("type of boolean_in_num is ",typeof boolean_in_num,"and value is --> ",boolean_in_num)




/*

Output :-

type of number is  string and value is -->  33
Converting......
type of number is  number and value is -->  33
type of number is  string and value is -->  33abc
Converting......
type of number is  number and value is -->  NaN
type of number is  object and value is -->  null
Converting......
type of number is  number and value is -->  0
type of number is  undefined and value is -->  undefined
Converting......
type of number is  number and value is -->  NaN
type of number is  boolean and value is -->  false
Converting......
type of number is  number and value is -->  0
type of number is  boolean and value is -->  true
Converting......
type of number is  number and value is -->  1
the value of is_logged_in --> 0 and type is -->  number
type of boolean_in_num is  boolean and value is -->  false
the value of is_logged_in --> 1 and type is -->  number
type of boolean_in_num is  boolean and value is -->  true
the value of is_logged_in -->  and type is -->  string
type of boolean_in_num is  boolean and value is -->  false
the value of is_logged_in --> harsh and type is -->  string
type of boolean_in_num is  boolean and value is -->  true
the value of is_logged_in --> null and type is -->  object
type of boolean_in_num is  boolean and value is -->  false
the value of is_logged_in --> undefined and type is -->  undefined
type of boolean_in_num is  boolean and value is -->  false


NaN --> Not a Number 
*/