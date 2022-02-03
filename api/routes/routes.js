const { Router } = require('express');
const getClothes = require('../controllers/getClothes')
const router = Router();

router.get('/', getClothes)

module.exports = router;