var serv =require('../public/Logic/EmloyeeData')
var express = require('express');
var router = express();
router.use(express.json());
const mongoose=require('mongoose')
const dotenv = require("dotenv").config();
const cors = require('cors');
router.use(cors());

mongoose.connect('mongodb+srv://Hema_Marada:Miracle224444@Cluster0.72j8uit.mongodb.net/React_Doc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });



  
  
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

router.get('/getemp',(req,res)=>
{
  serv.getEmployeeData(req, res, function(getEmployeeData) {
  });
})
router.post('/postemp',(req,res)=>
{
  serv.addEmployee(req, res, function(addEmployee) {
  });

})
router.listen(7000, () => {
  console.log('Server started on port 7000');
});



module.exports = router;
