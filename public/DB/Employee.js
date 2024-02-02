const mongoose=require('mongoose')

const Employee = new mongoose.Schema({
    Name:String,
    Id:String,
    Address:String,
    Team:String



})
// console.log(Employee)
module.exports=mongoose.model('employee',Employee)
