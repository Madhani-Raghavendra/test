
import { Router } from "express";
import { Register, getallRegister, login } from "../controllers/Register.js";

const Rout=Router()

Rout.post('/Register',Register)
Rout.get('/allRegister',getallRegister)
Rout.post('/Login',login)

export default Rout