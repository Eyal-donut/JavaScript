const arrayNoDuplicates = (numArray) => {
    let uniqueNums = numArray.filter((num, index) => {
        return numArray.indexOf(num) === index;
    });
    return uniqueNums; 
}