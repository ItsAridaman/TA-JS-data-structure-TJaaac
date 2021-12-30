// 1. Create an array named numbers and store 5 number values in it


let numberArray=[34,5,65,3,10];



// 2. Calculate the sum of array items and print it to the console using console.log()

let summ=0;
for (let numberArr of numberArray)
{
    summ+=numberArr;
}
console.log(`${summ}`);

// 3. Calculate the average of array items and print it to the console using console.log()

let sum1=0;
for (let numberArr of numberArray)
{
    sum1+=numberArr;
}

let average1=sum1/numberArray.length;

console.log(`${average1}`);


// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber=0;

for(let j=0; j<numberArray.length;j++)
{
if(numberArray[j]>highestNumber)
{
    highestNumber=numberArray[j];
}
else
{
}
}
console.log(highestNumber);



// 5. Find the lowest number in the array and print it to the console using console.log()

let lowestNumber=numberArray[0];

for(let k=0; k<numberArray.length;k++)
{
if(numberArray[k]<lowestNumber)
{
    lowestNumber=numberArray[k];
}
else
{
}
}
console.log(lowestNumber);

// 6. Find the even numbers in the array and print them to the console using console.log()

for (let evenNumbers of numberArray)
{
    if (evenNumbers % 2===0)
    {
        console.log(evenNumbers);
    }
    else{

    }
}


// 7. Find the odd numbers in the array and print them to the console using console.log()

for (let oddNumbers of numberArray)
{
    if (oddNumbers % 2!==0)
    {
        console.log(oddNumbers);
    }
    else{
        
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for (let fiveNumbers of numberArray)
{
    if (fiveNumbers % 5===0)
    {
        console.log(fiveNumbers);
    }
    else{
    }
}


// 9. Log all the element of the array one by one

for (allNumbers of numberArray)
{
    console.log(allNumbers);
}


// 10. Find all the number in the array that is divisible by 3
for (let threeNumbers of numberArray)
{
    if (threeNumbers % 3===0)
    {
        console.log(threeNumbers);
    }
    else{
    }
}