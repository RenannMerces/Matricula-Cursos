import { Router } from "express"
import { cursos } from "../database/db"

const router = Router()

router.get("/", (req, res) => {
  res.json(cursos)
})

export default router