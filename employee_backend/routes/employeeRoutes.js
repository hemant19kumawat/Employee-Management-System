const express = require('express');
const router = express.Router();
const {createEmployee,getallEmployee,updateEmployee,getEmployeebyId,deleteEmployee} = require('../controller/employeeController')
const {protect} = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/authorizationMiddleware');

// router.all(protect)
router.post('/createemployee',protect,authorize("admin"),createEmployee)
router.get('/getallemployee',protect,authorize("admin","employee"),getallEmployee)
router.put('/updateemployee/:id',protect,authorize("admin"),updateEmployee)
router.get('/getemployee/:id',protect,authorize("admin","employee"),getEmployeebyId)
router.delete('/deleteemployee/:id',protect,authorize("admin"),deleteEmployee)


module.exports = router;