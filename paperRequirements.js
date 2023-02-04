function paperRequirements(firstBook, secondBook, thirdBook){
    let totalPageNeed = firstBook + secondBook + thirdBook;
    return totalPageNeed;
}

const totalPageNeed = paperRequirements(100, 200, 300);
console.log(totalPageNeed);