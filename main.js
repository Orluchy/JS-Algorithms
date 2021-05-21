//Number 1
/*Function to convert Fahr valued numbers to Celsius
valued numbers. It only takes a number or a string that can be seen as a number
*/
const convertFahrToCelsius = (nums) => {
    if (typeof nums == 'number') {
        let celsius = ((nums-32)*(5/9));
        result = Number(celsius.toFixed(4));
        return (result);
    }
    else if (typeof nums == 'object') {
        if(Array.isArray(nums)) {
            return `${JSON.stringify(nums)} is not a valid number but a/an array.`
        }
        else if (nums === true || nums === false){
            return `${nums} is not a valid number but a/an boolean.`
        }
        else {
            output = `${JSON.stringify(nums)} is not a valid number but a/an ${typeof nums}.`
            return (output);
        }
    }

    else if(typeof nums == 'string'){
      let numsDigit = Number(nums);
        if(isNaN(numsDigit)) {
            return (`${nums} is not a valid number but a ${typeof nums}.`)
        }
        else {
            let celsius = ((numsDigit-32)*(5/9));
            result = Number(celsius.toFixed(4));
            return (result);
        }
    }
        
};
 



/*/////////////////////////////////////////////////////////
                            TASK2
////////////////////////////////////////////////////////*/
//Number 2
const myArrofNums = (n) => {
    let mynums = [];

    for(let i = 1; i <= mynums; i++ ) {
        if (i % 2 === 0){
            mynums.push ("yu");
        } 
        else if ( i % 3 === 0){
            mynums.push ("gi");
        } 
        else if (i % 5 === 0){
            mynums.push ("oh");
        }
        else if (i % 2 === 0 && i % 3 === 0){
            mynums.push ("yu-gi");
        }
        else if (i % 3 === 0 && i % 5 === 0){
            mynums.push ("gi-oh");
        }
        else if (i % 2 === 0 && i % 5 === 0){
            mynums.push ("yu-oh");
        }
        else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            mynums.push ("yu-gi-oh");
        }
        else {
            mynums.push (i);
        }
    }

    return mynums;

}
