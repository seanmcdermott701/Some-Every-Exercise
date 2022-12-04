// Function #1 (some)
const hasOddNumber = (arr) => {
    return arr.some((num) => {
        return num % 2 == 1;
    })
};

// Function #2 (some)
const hasAZero = (num) => {
    return num.toString().split('').some((num2) => {
        return num2 == '0';
    })
};

// Function #3 (every)
const hasOnlyOddNumbers = (arr) => {
    return arr.every((num) => {
        return num % 2 == 1;
    });
}

// Function #4 (every)
const hasNoDuplicates = (arr) => {
    return arr.every((num) => {
        return arr.indexOf(num) == arr.lastIndexOf(num);
    })
};

// Function #5 (every)
const hasCertainKey = (arr, key) => {
    return arr.every((obj) => {
        return key in obj;
    })
};

// Function #6 (every)
const hasCertainValue = (arr, key, val) => {
    return arr.every((obj) => {
        return obj[key] == val;
    })
};