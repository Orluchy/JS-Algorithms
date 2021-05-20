//Number 1












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