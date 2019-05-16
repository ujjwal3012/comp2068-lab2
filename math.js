const basicCalculate = (method, a, b) => {

  switch (method.toLowerCase()) {

    case 'add':

      return { operation: '+', result: a + b };

    case 'subtract':

      return { operation: '-', result: a - b };

    case 'multiply':

      return { operation: 'x', result: a * b };

    case 'divide':

      return { operation: '/', result: a / b };

    default:

      return 'invalid option';

  }

};



const options = ['add', 'subtract', 'multiply', 'divide'];



const basicCalculatorRoute = (request, response) => {

  request.query.a = parseInt(request.query.a); // Parse string value of a into an integer

  request.query.b = parseInt(request.query.b); // Parse string value of b into an integer



  const { method, a, b } = request.query; // Destructuring method, a, b from request.query



  // if b and a is not a number - it has to be a number

  if (isNaN(b) || isNaN(a)) {

    return response.send('Both A and B must be a number');

  }



  // If method is not in our valid options - tell them it has to be and display them

  if (!options.includes(method.toLowerCase())) {

    return response.send(

      `Method must include one of the following: ${options.join(', ')}`

    );

  }



  // Get Operation and Result from basic calculate function

  const { operation, result } = basicCalculate(method, a, b);



  response.send(`${a} ${operation} ${b} = ${result}`); // Print out value of calculation

};


module.exports = basicCalculatorRoute; // Exporting function


