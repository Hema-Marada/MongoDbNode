const Employee = require('../DB/Employee'); // Assuming 'Employee' is the correct model/schema

const addEmployee = async (req, res) => {
  try {
    // Extract employee data from the request body
    const { name, id, address, team } = req.body;

    // Create a new employee document
    const newEmployee = new Employee({
      Name: name,
      Id: id,
      Address: address,
      Team: team
    });

    // Save the new employee document to the database
    await newEmployee.save();

    // Send a success response
    res.status(200).json({ message: 'Employee added successfully' });
  } catch (error) {
    // If an error occurs, send an error response
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getEmployeeData = async (req, res) => {
  try {
    // Fetch employee data from the database
    const employees = await Employee.find(); // Assuming 'Employee' model has 'find' method to fetch all employees
  
    // Send the fetched data as a JSON response
    res.json(employees);
  } catch (error) {
    // If an error occurs, send an error response
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addEmployee,getEmployeeData };
