const arguments = process.argv.slice(2);

function circleAreaCalculation(radius){
    let area = Math.PI*(radius*radius)
    console.log(area);
}
circleAreaCalculation(arguments[0]*1);