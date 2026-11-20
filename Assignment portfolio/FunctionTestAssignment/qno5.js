const calculateBonus = (salary) => {
  if (salary >= 40000) return salary * 0.1;
  else return salary * 0.05;
};
const calculateTax = (salary) => salary * 0.05;

const calculateNetSalary = (salary, bonusCallback, taxCallback) =>
  salary + bonusCallback(salary) - taxCallback(salary);

const generatePayslip = (name, salary, callback) => {
  const bonus = calculateBonus(salary);
  const tax = calculateTax(salary);
  const net = callback(salary, calculateBonus, calculateTax);
  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${net}`);
};

generatePayslip("Ram", 50000, calculateNetSalary);