const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Smartphone", category: "Electronics" },
  { id: 4, name: "Jeans", category: "Clothing" },
  { id: 5, name: "Blender", category: "Home Appliances" },
  { id: 6, name: "Mixer", category: "Home Appliances" },
];

function groupCategory(products) {
  return products.reduce((acc, prod) => {
    if (!acc[prod.category]) {
      acc[prod.category] = [];
    }
    acc[prod.category].push(prod.name);
    return acc;
  }, {});
}

console.log(groupCategory(products));

const employees = [
  { name: "John", department: "HR" },
  { name: "Jane", department: "Finance" },
  { name: "Joe", department: "HR" },
  { name: "Jill", department: "IT" },
  { name: "Jack", department: "Finance" },
];

function sortEmployee(employees) {
  return employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = [];
    }
    acc[emp.department].push(emp.name);
    return acc;
  }, {});
}

console.log(sortEmployee(employees));
