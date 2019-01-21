'use strict';

const passport = require('passport');
const express = require('express');

const employeeService = require('../../services/employees/employee');

let router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), employeeService.fetchDetails);
// router.get('/', passport.authenticate('jwt', { session: false }), adminService.fetchEmployees);

module.exports = router;