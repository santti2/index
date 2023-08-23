const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'sports']
  }
            
  const { 
    weight = 70,
    height = 180,
    } = person
  console.log(weight, height)

  // devuelve el ancho y la altura porque el console.log pide que lo imprima

  