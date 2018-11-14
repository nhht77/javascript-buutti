/**
 * Implement calculateSalary which should calculate the salary of one employee based on 
 * input parameter baseSalary, which is a number representing developers base salary and 
 * billings, which should be a list of objects, which contain fields:
 * rate (billing rate per hour) 
 * hours (number of hours)
 * multiplier (which portition of billing is calculated as bonus)
 * */

function calculateSalary(billings, baseSalary) {
    billings.map(val => {
        Object.keys(billings).reduce( (previous, key) => {
            return previous + val[key].value;
        }, baseSalary);
    })
}

const billings = [
    {rate: 65, hours: 140, multiplier: 0.2},
    {rate: 70, hours: 10, multiplier: 0.2}
];

const salary = calculateSalary(billings, 2000);
console.log("Salary was " + salary); //Should be 3960 with default values

