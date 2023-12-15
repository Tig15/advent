function runHashAlgorithm(input) {
  const steps = input.split(",");
  let sum = 0;

  for (let i = 0; i < steps.length; i++) {
    let currentVal = 0;
    const step = steps[i].replace(/\n/g, "");
    for (let j = 0; j < step.length; j++) {
      const charCode = step.charCodeAt(j);
      currentVal += charCode;
      currentVal *= 17;
      currentVal %= 256;
    }
    sum += currentVal;
  }

  return sum;
}

const initializationSequence =
  "rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7";

const result = runHashAlgorithm(initializationSequence);
// console.log("Sum of the results:", result);

// "/\n/g is a regular expression that matches all newline characters (\n). The /g flag at the end indicates a global search, meaning it will find all occurrences of newline characters in a string."
