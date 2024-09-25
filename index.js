// Initialize employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function 1: Non-destructive update
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function 2: Destructive update
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function 3: Non-destructive delete
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function 4: Destructive delete
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test cases for each function
  console.log(updateEmployeeWithKeyAndValue(employee, "position", "Engineer")); // Non-destructive update
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Engineer")); // Destructive update
  console.log(deleteFromEmployeeByKey(employee, "name")); // Non-destructive delete
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "name")); // Destructive delete
  