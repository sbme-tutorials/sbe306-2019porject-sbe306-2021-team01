const Sequelize=require('sequelize');
const sequelize=require('../util/db.js');


const Appointment= sequelize.define('Appointments',{
    Date: {
    type:Sequelize.DATE,
    allowNull:true,
    },
    Description:{
        type:Sequelize.TEXT,
        allowNull:true
    }
})


module.exports=Appointment;