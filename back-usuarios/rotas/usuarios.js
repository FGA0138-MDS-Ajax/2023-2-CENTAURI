import express, { Router } from "express";
import{getUsers} from "../controle/usuarioct.js";

const router = express.Router()

router.get("/",getUsers)

export default router