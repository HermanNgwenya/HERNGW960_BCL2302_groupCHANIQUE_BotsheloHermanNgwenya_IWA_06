/*
const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay && minuteOfDay !== null && hourOfDay == '00' && minuteOfDay == '00'){
	const taxAsDecimal = tax / '100'
  const startingAfterTax = salary * '1' - taxAsDecimal
	const balace = starting - transport - food - rent
}
	
console.log(balance.toFixed(3))
*/


//solution



const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay == 0 && minuteOfDay == 0){
	let taxAsDecimal = parseInt(tax)/ 100;
    const startingAfterTax = salary * (1 - taxAsDecimal);
	const balance = startingAfterTax - transport - food - rent;
	let currency = 'R';
    console.log(currency , balance.toFixed(2));
}

	
