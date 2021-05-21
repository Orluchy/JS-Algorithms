//We'll go with  different approaches :smiles:

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
//         else if (nums === true || nums === false){
//             return `${nums} is not a valid number but a/an boolean.`
//         }
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
//Function to check the multiples of different numbers(integers) with and without apostrophes
//and output an error response when a none integer value is parsed

const checkYuGiOh = (n) => {
    let mynums = [];
 //Code to check wrong input

    if ( isNaN(n) || JSON.stringify(n) == '[]' || n == null || JSON.stringify(n) == '""' || n === true || n === false ) {
        return `Invalid parameter: ${JSON.stringify(n)}`;
      } 
//Code to create an array of the multiples/factors of a number
    
      else {

        for(let i = 1; i <= n; i++ ) {
            let temp = "";

            if (i % 2 === 0) {
                temp += "yu";
            } 

            if ( i % 3 === 0) {
                temp += (temp === "")? "gi": "-gi";
            } 

            if (i % 5 === 0) {
                temp += (temp === "")? "oh": "-oh";
            }
            
            if (temp === "") {
                temp = i;
            }

            mynums.push(temp);
        }
        // console.log(mynums);
        return mynums;
      }
};
