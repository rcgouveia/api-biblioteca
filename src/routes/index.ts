import { Router } from "express";
import bibliocarioRoutes from './bibliotecarioRoute'
import clienteRoutes from './clienteRoute'
import emprestimoRoutes from './emprestimoRoute'
import livroRoutes from './livroRoute'
import reservaRoutes from './reservaRoute'

const routes = Router();

routes.use(bibliocarioRoutes)
routes.use(clienteRoutes)
routes.use(emprestimoRoutes)
routes.use(livroRoutes)
routes.use(reservaRoutes)

export default routes