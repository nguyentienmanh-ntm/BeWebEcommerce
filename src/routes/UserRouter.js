import express from "express";
const router = express.Router();
import userController from '../controllers/UserController';

router.post('/', userController.createUser);

export default router;