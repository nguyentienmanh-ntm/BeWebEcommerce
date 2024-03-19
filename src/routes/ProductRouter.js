const express = require("express");
const router = express.Router()
const ProductController = require("../controllers/ProductController")

router.post('/create', ProductController.createProduct)
router.put('/update-product/:id', ProductController.updateProduct)
router.get('/get-all', ProductController.getAllProduct)
router.get('/get-details/:id', ProductController.getDetailsProduct)
router.delete('/delete/:id', ProductController.deleteProduct)
// router.post('/delete-many', ProductController.deleteMany)

module.exports = router