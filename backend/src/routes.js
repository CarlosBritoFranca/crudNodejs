import { Router } from "express";

import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import authMiddleware from "./middleware/auth";

const routes = new Router();

//Rota de Sessão
routes.post("/api/sessions", SessionController.store);

//Rota do User

routes.get("/api/users", UserController.index);
routes.post("/api/users", UserController.store);
routes.get("/api/users/show", UserController.show);
routes.use(authMiddleware);
routes.put("/api/users", UserController.update);
routes.delete("/api/users/:id", UserController.delete);

export default routes;
