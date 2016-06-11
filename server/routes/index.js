var express = require('express');
var router = express.Router();

//var auth = require('../config/auth');
var ctrlInfo = require('../controllers/infoCtrl');


// authentication

//router.post('/register', ctrlAuth.register);
//router.post('/login', ctrlAuth.login);

router.get('/Info', ctrlInfo.getInfo);
router.post('/Info', ctrlInfo.createInfo);
router.get('/Info/:id', ctrlInfo.editInfo);
router.put('/Info/:id', ctrlInfo.updateInfo);
router.delete('/Info/:id', ctrlInfo.deleteInfo);

//router.get('/Skill', ctrlSkills.getSkill);
//router.post('/Skill', auth.authent, ctrlSkills.createSkill);
//router.get('/Skill/:id', ctrlSkills.editSkill);
//router.put('/Skill/:id', auth.authent,  ctrlSkills.updateSkill);
//router.delete('/Skill/:id', auth.authent, ctrlSkills.deleteSkill);





module.exports = router;