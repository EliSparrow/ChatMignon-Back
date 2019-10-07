const express = require("express");
const router = express.Router();

const CatController = require('../controllers/cat.controller');

router.post('/', CatController.create);
router.get('/', CatController.listCats);
router.get('/:id', CatController.showCat);
router.put('/:id', CatController.updateCat);

module.exports = router;