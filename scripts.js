// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

//Grabs each number array
const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

//Empty string for result
const result = []

//Variables for the last element of the array's index
let firstCount = data.lists[0][1].length -1
let secondCount = data.lists[1][1].length -1
let thirdCount = data.lists[2][1].length -1

//Compares the last element of the 3 arrays and gives the highest value
const extractBiggest = () => {

    //If statement comparing first and second arrays's last element
    if (first[firstCount] > second[secondCount]) {
        //If first array's element is bigger it returns it and decreases the variable that keeps track of the last element's index
        firstCount -= 1;
        return first[firstCount + 1]

    }else {
        //If statement comparing second and third arrays's last element
        if (second[secondCount] > third[thirdCount]) {
            //If second array's element is bigger it returns it and decreases the variable that keeps track of the last element's index
            secondCount -= 1;
            return second[secondCount + 1]

        }else {
            //Returns third array's last element and decreases the variable that keeps track of the last element's index
            thirdCount -= 1;
            return third[thirdCount + 1]

        }
    }
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)