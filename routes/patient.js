
const express = require('express');
const clinics = require('../controllers/clinics');
const router = express.Router();


router.post('/edit/:id',clinics.editData);
router.get('/patient/Neurology/:id',clinics.Neurology);
router.get('/patient/Cardiology/:id',clinics.Cardiology);
router.get('/patient/Nuclear_Magnetic/:id',clinics.Nuclear_Magnetic);
router.get('/patient/Opthalmology/:id',clinics.Opthalmology);
router.get('/patient/Surgical/:id',clinics.Surgical);
router.get('/patient/Traumatology/:id',clinics.Traumatology);
router.post('/patient/Home/appointment',clinics.appoint);


router.get('/patient/Home/:id',clinics.patientHome);
router.get('/patient/table/:id',clinics.patientTable);
router.get('/patient/edit/:id',clinics.patientEdit);
router.get('/patient/:id',clinics.patientId);

module.exports=router;