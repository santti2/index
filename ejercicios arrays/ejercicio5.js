const number = [-5,1,6,4,9]

function sortAbsoluteNumbers(numbers){
    
    const numeross = []
    for (let numero of numbers ){
        const absNumber = Math.abs(numero)
        numeross.push(absNumber)
    } 
    numeross.sort((a, b) => a - b)
    return numeross
}
console.log(sortAbsoluteNumbers(number))
