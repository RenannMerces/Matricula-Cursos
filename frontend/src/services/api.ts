const API_URL = "http://localhost:3000"

export async function getCursos() {
  const response = await fetch(`${API_URL}/cursos`)
  return response.json()
}

export async function criarMatricula(data: any) {
  const response = await fetch(`${API_URL}/matricula`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  return response.json()
}