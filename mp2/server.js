const express = require("express")
const app = express();
const jwt = require("jsonwebtoken")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const cors = require('cors')
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

const employees = [
    {
      id: 1,
      employeeNumber: 'EMP001',
      fullName: 'RJ Gomez',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-01',
      isAdmin: true
    },
    
    {
      id: 2,
      employeeNumber: 'EMP002',
      fullName: 'Daniella Sarraga',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-02',
      isASdmin: true
    },
  
    {
      id: 3,
      employeeNumber: 'EMP003',
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-03',
      isAdmin: false
    },
  
    {
      id: 4,
      employeeNumber: 'EMP004',
      fullName: 'Tony Stark',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-04',
      isAdmin: false
    },
  
    {
      id: 5,
      employeeNumber: 'EMP005',
      fullName: 'Jacob Miller',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-05',
      isAdmin: false
    },
  
    {
      id: 6,
      employeeNumber: 'EMP006',
      fullName: 'Johnny Fisher',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-06',
      isAdmin: false
    },
  
    {
      id: 7,
      employeeNumber: 'EMP007',
      fullName: 'Dean Johnson',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-07',
      isAdmin: false
    },
  
    {
      id: 8,
      employeeNumber: 'EMP008',
      fullName: 'Eric Leyton',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      dateHired: '2023-08-08',
      isAdmin: false
    },
  
];

//Login endpoint

app.post('/login',(req,res) => {
    const {username, email, password} = req.body;

    const user = employees.find(
        (u) => {
            if((u.username === username || u.email === email) && u.password === password) {
                return u;
            }
        }
    )

    console.log(user);

    if(user) {

        const accessToken = generateAccessToken(user);

        res.json(
        {"Code":"200","Msg":"Success!"}
        )
    } else{
        res.status(401).json({"Code":"401","Msg":"Failed!"})
    }
})

const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            asAdmin: user.isAdmin
        },
        "ThisIsMySecretKeysdlkfvnaeklsbnfalbfnskdlbnfs",
        { expiresIn: "100s" }
    )
}

// Get all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});
  
// Create a new employee
app.post('/employees', (req, res) => {
    const newEmployee = req.body;
    newEmployee.id = employees.length + 1;
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});
  
// Update an employee by ID
app.put('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedEmployee = req.body;
    employees = employees.map((employee) =>
      employee.id === id ? { ...employee, ...updatedEmployee } : employee
    );
    res.json(updatedEmployee);
});
  
// Delete an employee by ID
app.delete('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    employees = employees.filter((employee) => employee.id !== id);
    res.status(204).send();
});
  
  
// feedback
const feedbackData = [];
  
app.post('/submit-feedback', (req, res) => {
    const { name, email, feedback } = req.body;
  
    if (!name || !email || !feedback) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
  
    // Save the feedback data (in-memory storage)
    feedbackData.push({ name, email, feedback });
  
    res.status(200).json({ message: 'Feedback submitted successfully.' });
});


// -----------------------------------------------------------------

app.listen(5000)
console.log("server is running in port 5000")