// Part 1
let count = 0;

function increments() {
  try {
    count++;
    increments(count);
  } catch (e) {
    console.error(e.message, count);
  }
}

// Part 2
function flatten(ary) {
  let flattenedAry = [];
  for (let i of ary) {
    // console.log(i);
    if (Array.isArray(i)) {
      flattenedAry = flattenedAry.concat(flatten(i));
    } else {
      flattenedAry.push(i);
    }
    // console.log(flattenedAry);
  }
  return flattenedAry;
}

function trampoline(f) {
  // console.log(f);
  while (typeof f === "function") {
    // console.log(f);
    f = f();
  }
  return f;
}

// Part 3
const primeDiv = document.getElementById("prime-container");
// console.log(primeDiv);

function addAllPrimes(n) {
  if (n <= 1) return;
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    isPrime = checkPrime(i);
    // console.log(isPrime);
    if (isPrime) {
      let hEl = document.createElement("h4");
      // console.log(hEl);
      // console.log(i);
      hEl.textContent = i;
      primeDiv.appendChild(hEl);
    }
  }

  alert("calculation is finished");
}

function allPrimesRec(n, i) {
  if (n <= i) {
    setTimeout(() => {
      alert("calculation is finshed");
    }, 3000);
    return;
  } else {
    isPrime = checkPrime(i);
    if (isPrime) {
      let hEl = document.createElement("h4");
      console.log(i);
      hEl.textContent = i;
      primeDiv.appendChild(hEl);
    }
    i++;
    allPrimesRec(n, i);
  }
}

function checkPrime(num) {
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
    }
  }
  return prime;
}

// calling the functions
// increments();
const multiAry = [
  [1, 2, 3],
  [5, 6, 7, [3, 4, 5]],
];
// console.log(multiAry);
// const flatAry = flatten(multiAry);
// console.log(flatAry);

const multiAry2 = [
  [[[[[[[[[[[[[[[[[[1, 2, 2, [[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]],
];
// console.log(multiAry2);
// console.log(typeof flatten(multiAry2));
// let fAry2 = trampoline(flatten(multiAry2));
// console.log(fAry2);
console.log(trampoline(flatten(multiAry2)));

// addAllPrimes(10000);
// allPrimesRec(10000, 2);
trampoline(allPrimesRec(8000, 2)); // at 10,000, call stack is exceeded
