let num = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980]
const originalNum = [...num];
//a Sort the numbers from lowest to highest
num.sort((a, b) => a - b);

console.log(num)

//b Sort the numbers from highest to lowest
num.sort((a, b) => b - a);
console.log(num);

//c Return an array of unique numbers. If a number is repeated, it should not occur twice in the returned array.

let uniqueNum = [...new Set(num)];
console.log(uniqueNum);

//d Calculate the sum of the numbers in the array referred to in the problem statement

const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//e Return a new array with elements that are less than or equal to 100

const lessThanOrEqualTo100 = originalNum.filter((value) => value <= 100);
console.log(lessThanOrEqualTo100);

//f Return a new array with elements that are greater than 50

const greaterThan50 = originalNum.filter((value) => value > 50);
console.log(greaterThan50);

//g Return a new array with elements that are divisible by 2
const divisibleBy2 = originalNum.filter((value) => value % 2 === 0);
console.log(divisibleBy2);

//h Return a new array with elements that are divisible by 3
const divisibleBy3 = originalNum.filter((value) => value % 3 === 0);
console.log(divisibleBy3);

//i Return a new array with elements that are neither divisible by 2 or 3, if they
//exist. Otherwise return an empty array
const neitherDivisibleBy2or3 = originalNum.filter((value) => value % 2 !== 0 && value % 3 !== 0);
console.log(neitherDivisibleBy2or3);

//j Declare a variable that counts how many elements are in the original array
const originalNumCount = originalNum.length;
console.log(originalNumCount);

//k Declare a new array that contains the same elements as the original array,
//but reversed. The array should start at 980 and end at 3.
const reversedNum = [...originalNum].reverse();
console.log(reversedNum);

//2
const mixedValues = [7, 10, 'Clentan', 13, 89, true, 45, false, 'Jerry', 'Vukona', 'Reabetswe', 600];

//2a Using a for loop and a variable, return all values that are numbers.
const numberValues = [];
for (let index = 0; index < mixedValues.length; index++) {
	if (typeof mixedValues[index] === 'number') {
		numberValues.push(mixedValues[index]);
	}
}
console.log(numberValues);

//b Using a while loop and a variable, return all values that are strings
const stringValues = [];
let stringIndex = 0;
while (stringIndex < mixedValues.length) {
	if (typeof mixedValues[stringIndex] === 'string') {
		stringValues.push(mixedValues[stringIndex]);
	}
	stringIndex++;
}
console.log(stringValues);

//c Using a do while loop, return the sum of all values in the array
let mixedValuesSum = 0;
let sumIndex = 0;
do {
	if (typeof mixedValues[sumIndex] === 'number') {
		mixedValuesSum += mixedValues[sumIndex];
	}
	sumIndex++;
} while (sumIndex < mixedValues.length);
console.log(mixedValuesSum);

//d Using any looping structure of your choice and a variable, combine all the
//strings to form a proper greeting that follows the basic English grammar
//standards. Eg “Hello, Sarah, Thabo, and Mariah.”.

let greeting = 'Hello, ';
for (let index = 0; index < stringValues.length; index++) {
	if (index === stringValues.length - 1) {
		greeting += `and ${stringValues[index]}.`;
	} else {
		greeting += `${stringValues[index]}, `;
	}
}
console.log(greeting);

//e Using any looping structure of your choice and a new variable, remove all
//values in the array that are strings
const valuesWithoutStrings = [];
for (const value of mixedValues) {
	if (typeof value !== 'string') {
		valuesWithoutStrings.push(value);
	}
}
console.log(valuesWithoutStrings);

const developers = [
	{
		name: 'Vee',
		laptops: ['Dell'],
		phones: ['Samsung', 'Xiaomi'],
		computerSetups: [
			{ brand: 'Lenovo', monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
		]
	},
	{
		name: 'Katlego',
		laptops: ['HP', 'Samsung'],
		phones: ['Apple', 'Samsung', 'Tecno', 'Samsung'],
		computerSetups: [
			{ brand: 'Lenovo', monitors: 2, keyboards: 1, mice: 1, speakers: 2 },
			{ brand: 'Dell', monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
		]
	},
	{
		name: 'Rethabile',
		laptops: ['Samsung'],
		phones: ['Samsung', 'Huawei', 'Poco'],
		computerSetups: [
			{ brand: 'Asus', monitors: 1, keyboards: 1, mice: 1, speakers: 1 },
			{ brand: 'Acer', monitors: 1, keyboards: 1, mice: 1, speakers: 2 }
		]
	},
	{
		name: 'Gift',
		laptops: [],
		phones: ['Samsung'],
		computerSetups: [
			{ brand: 'Acer', monitors: 3, keyboards: 1, mice: 1, speakers: 2 },
			{ brand: 'HP', monitors: 2, keyboards: 1, mice: 1, speakers: 2 }
		]
	},
	{
		name: 'Thokozile',
		laptops: ['Lenovo'],
		phones: ['Apple'],
		computerSetups: [
			{ brand: 'Dell', monitors: 1, keyboards: 1, mice: 1, speakers: 2 },
			{ brand: 'Asus', monitors: 1, keyboards: 0, mice: 1, speakers: 1 },
			{ brand: 'Dell', monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
		]
	}
];

//3a: Create an array containing only the developers' names.
const developerNames = developers.map((developer) => developer.name);
console.log(developerNames);

//b: Count all phones owned by the developers.
const totalPhones = developers.reduce((total, developer) => total + developer.phones.length, 0);
console.log(totalPhones);

//c: Count setups with zero mice, keyboards, speakers, or monitors.
const incompleteSetups = developers.reduce((total, developer) => total + developer.computerSetups.filter((setup) =>
	setup.mice === 0 || setup.keyboards === 0 || setup.speakers === 0 || setup.monitors === 0
).length, 0);
console.log(incompleteSetups);

//d and e: Find the most and least common phone brands.
const phoneBrandCounts = {};
for (const developer of developers) {
	for (const phone of developer.phones) {
		phoneBrandCounts[phone] = (phoneBrandCounts[phone] || 0) + 1;
	}
}
const phoneBrandEntries = Object.entries(phoneBrandCounts);
const highestPhoneCount = Math.max(...phoneBrandEntries.map(([, count]) => count));
const lowestPhoneCount = Math.min(...phoneBrandEntries.map(([, count]) => count));
const mostTrustedPhoneBrands = phoneBrandEntries
	.filter(([, count]) => count === highestPhoneCount)
	.map(([brand]) => brand);
const leastTrustedPhoneBrands = phoneBrandEntries
	.filter(([, count]) => count === lowestPhoneCount)
	.map(([brand]) => brand);
console.log(mostTrustedPhoneBrands);
console.log(leastTrustedPhoneBrands);

//f, g, and h: Count developers without phones, laptops, or desktop setups.
const developersWithoutPhones = developers.filter((developer) => developer.phones.length === 0).length;
const developersWithoutLaptops = developers.filter((developer) => developer.laptops.length === 0).length;
const developersWithoutDesktop = developers.filter((developer) => developer.computerSetups.length === 0).length;
console.log(developersWithoutPhones);
console.log(developersWithoutLaptops);
console.log(developersWithoutDesktop);

//i: Find the developer with the most physical gadgets.
const developerGadgetTotals = developers.map((developer) => ({
	developer,
	total: developer.laptops.length + developer.phones.length + developer.computerSetups.reduce((total, setup) =>
		total + setup.monitors + setup.keyboards + setup.mice + setup.speakers, 0)
}));
const mostGadgets = developerGadgetTotals.reduce((most, current) => current.total > most.total ? current : most);
console.log({ name: mostGadgets.developer.name, total: mostGadgets.total, gadgets: mostGadgets.developer });

//j: Find the developer with the most phones.
const mostPhones = developers.reduce((most, developer) =>
	developer.phones.length > most.phones.length ? developer : most
);
console.log({ name: mostPhones.name, phones: mostPhones.phones });

//k: Find the developer with the most computer setups.
const mostComputerSetups = developers.reduce((most, developer) =>
	developer.computerSetups.length > most.computerSetups.length ? developer : most
);
console.log({ name: mostComputerSetups.name, computerSetups: mostComputerSetups.computerSetups });

//l: Find the developer with the most monitors across all computer setups.
const developerMonitorTotals = developers.map((developer) => ({
	name: developer.name,
	monitors: developer.computerSetups.reduce((total, setup) => total + setup.monitors, 0)
}));
const mostMonitors = developerMonitorTotals.reduce((most, current) => current.monitors > most.monitors ? current : most);
console.log(mostMonitors);