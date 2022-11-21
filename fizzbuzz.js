
const FizzBuzz = (start, begin) => {
    for (let i = start; i < begin; i += 1) {
        if (i % 15 === 0) {
          console.log('FizzBuzz');
        } else if (i % 5 === 0) {
          console.log('Buzz');
        } else if (i % 3 === 0) {
          console.log('Fizz');
        } else {
          console.log(i);
        }
      }
}

console.log(FizzBuzz(1, 101))