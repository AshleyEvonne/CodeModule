import {str as csv} from "./helper.js"

function splitCSV (str) {
    let people = str.split('\n');
    
    for(let i = 0; i < people.length; i++) {
       
    }
    for (let person = people.length - 1; person > -1; person--){
        
    }

}



 

function expandFunc(str){
    let tempArr = str.split('\n')
    let new_arr = [] 
for (let i = 0; i <= tempArr.length -1; i++){
    const subArr = tempArr[i].split(',')
    new_arr.push(subArr)
}
return new_arr

}
const arr = expandFunc(csv)



function Transform (arr){

    let keys = arr[0]
    let obj = {}
    let new_arr = []
    for (let i = 1; i <= arr.length -1; i++){
       
        let sub_arr = arr[i].length -1
        for( let j = 0; j <= sub_arr; j++){
            const key = keys[j].toLowerCase()
            const value = arr[i][j]
            obj[key] = value 
        }
        new_arr.push(obj)
        obj = {}
    }

    return new_arr
} 



function sortandManipulate (arr){

    let removeItem = arr.pop() 
    let new_obj = { id: "48", name: "Barry", occupation: "Runner", age: "25" } 
    arr[1] = new_obj
    arr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }) 
    return arr
}
console.log (sortandManipulate(arr));


let new_arr = arr.join();
console.log(new_arr)