// Code your solution in this file!
function distanceFromHqInBlocks (location){
    const numBlocks = Math.abs(location-42)
    return numBlocks
}

console.log(distanceFromHqInBlocks(32))

function distanceFromHqInFeet(blocks){
    let numBlocks = distanceFromHqInBlocks(blocks)
    const inFeet = numBlocks * 264
    return inFeet

}



function distanceTravelledInFeet(start, destination) {
    let difference = Math.abs(start - destination);
    // difference value is in blocks
    let feet = difference * 264;
    return feet;
  }


  function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400){
        return 0
    }

    if (distance > 400 && distance < 2000){
        const afterFree = distance - 400
        let fare = afterFree* .02
        return fare
    }
    else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
