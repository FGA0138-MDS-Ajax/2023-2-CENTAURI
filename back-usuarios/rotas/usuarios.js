import express, { Router } from "express";
import {getUsers, addUser, deleteUser} from "../controle/usuarioct.js";

const router = express.Router()

router.get("/", getUsers);

router.post("/", addUser);

router.delete("/:id", deleteUser);

export default router