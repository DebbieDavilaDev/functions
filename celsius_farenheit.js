function celsius_to_farenheit(celsius){
    const temperature_in_fahrenheit = celsius * (9 / 5) + 32
    return temperature_in_fahrenheit 
}
console.log(celsius_to_farenheit(32))
// so celsius is a PARAMETER, which is basically an empty box where we put a number in to get the Fahrenheit.


 


//exercise hours to minutes function
function hours_to_minutes(hours){
    let minutes = hours * 60
    return minutes
} console.log(hours_to_minutes(7))