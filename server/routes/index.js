var express = require('express');
var router = express.Router();

//var auth = require('../config/auth');
var ctrlInfo = require('../controllers/infoCtrl');
var ctrlSkills = require('../controllers/skillsCtrl');
var ctrlAuth = require('../controllers/userCtrl');

// authentication

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/Info', ctrlInfo.getInfo);
router.post('/Info', ctrlInfo.createInfo);
router.get('/Info/:id', ctrlInfo.editInfo);
router.put('/Info/:id', ctrlInfo.updateInfo);
router.delete('/Info/:id', ctrlInfo.deleteInfo);

router.get('/Skill', ctrlSkills.getSkill);
router.post('/Skill', ctrlSkills.createSkill);
router.get('/Skill/:id', ctrlSkills.editSkill);
router.put('/Skill/:id', ctrlSkills.updateSkill);
router.delete('/Skill/:id', ctrlSkills.deleteSkill);





module.exports = router;