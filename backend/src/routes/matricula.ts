import { Router } from "express"
import { matriculas } from "../database/db"

const router = Router()

router.post("/", (req, res) => {
  const { nome, email, cursoId } = req.body

  if (!nome || !email || !cursoId) {
    return res.status(400).json({
      erro: "Dados inválidos"
    })
  }

  const novaMatricula = {
    id: matriculas.length + 1,
    nome,
    email,
    cursoId
  }

  matriculas.push(novaMatricula)

  res.status(201).json(novaMatricula)
})

export default router