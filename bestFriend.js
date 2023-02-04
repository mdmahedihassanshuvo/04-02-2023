const array = ["shuvo", "ashik", "mahedi", "habluhassan", "hassan"];

function bestFriend(array){
    let largestName = array[0];
    // console.log(largestName.length)
    for (var i = 0 ; i < array.length; i++){
        let element = array[i];
        // console.log(element.length);
        if(largestName.length < element.length){
            largestName = element;
            // console.log(largestName);
        }
    }
    return largestName;
}
const largestName = bestFriend(array);
console.log(largestName);
// bestFriend(array)