const {Router} = require('express');
const monsters = require('./monsters')
const habitats = require('./habitats')
const lives =  require('./lives')

const router = Router();

router.use('/monsters',monsters)
router.use('/lives',lives)
router.use('/habitats',habitats)

module.exports = router;
