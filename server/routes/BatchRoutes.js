import { Router } from "express";
import { UpdateBatch, addBatch, getallbatches } from "../controllers/Batch.js";

const Route = Router()

Route.post('/Upcoming', addBatch)
Route.get('/all', getallbatches)
Route.patch('/Update/:id', UpdateBatch)
export default Route