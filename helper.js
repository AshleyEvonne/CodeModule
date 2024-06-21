export let csv = 'ID,Name,Occupation,Age\n42,Bruces,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26'


export function expandFunc(str){
    let tempArr = str.split('\n')
    let new_arr = [] 
    for (let i = 0; i <= tempArr.length -1; i++){
        const subArr = tempArr[i].split(',')
        new_arr.push(subArr)
    }
return new_arr

}