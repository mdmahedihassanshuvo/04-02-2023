let array = [1, 2, 3, 4, 5, 6, 7, 8, -9, 10];
for(var i = 0; i < array.length ; i++){
    if(array[i] < 0){
        break;
    }
    console.log(array[i]);
}
