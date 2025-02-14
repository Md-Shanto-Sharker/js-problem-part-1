function inchToFeet (inch){
    const feet = inch / 12;
    const feet_result = parseInt(feet);
    const remaing = inch % 2 ;
    const result  = feet + '  feet ' + remaing + ' inch '
    return result;
}
const shantoHeight = inchToFeet(75);
console.log(shantoHeight);