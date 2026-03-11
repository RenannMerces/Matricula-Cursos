import express from "express"
import cors from "cors"
import cursosRoutes from "./routes/cursos"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/cursos", cursosRoutes)

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})