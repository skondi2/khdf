function multiplyByThree(array) {
    for (let i = 0; i < array.length; i++) {
    let mappedArray = array.map(element => element * 3);
    }
}
console.log(multiplyByThree([2, 3]));