import express from 'express'
import dataBase from './database/ormconfig'
import dotenv from 'dotenv'
import routes from './routes'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // habilita o express para receber dados no formato json
app.use(routes) // habilita as rotas
app.use(cors())


app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
  console.log(dataBase.isInitialized)
})