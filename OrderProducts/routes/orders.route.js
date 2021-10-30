let OrdersController = require('../controllers/orders.controller')
const {JoiValidator} = require('../middleware/validation')
// Modules
const express = require("express");
const { auth } = require('../middleware/authintication');
const router = express.Router();

router.post("/",auth,new JoiValidator(['order']),OrdersController.makeOrder);
router.get("/",auth,new JoiValidator(['page']) ,OrdersController.getOrders);
router.delete("/:id",auth,new JoiValidator(['id']) ,OrdersController.cancelOrder);
router.put("/:id",auth,new JoiValidator(['id']) ,OrdersController.deliverOrder);

module.exports = router;