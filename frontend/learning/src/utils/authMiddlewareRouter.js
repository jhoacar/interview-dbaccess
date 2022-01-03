import redirectTo from "./redirectTo";
import { role } from "./middlewareRole";

// TODO: Aquí se coloca todas las rutas que sean disponibles para todos.
export const availableToAll = [  "/charlas/crear",
  "/charlas",
  "/charlas[id]","/_error", "/404", "/", "/votaciones", "/votaciones/[id]", "/admin/votaciones", "/admin/votaciones/[id]"];

// TODO: Todas las rutas que no requieren petición a backend
export const noRequireRequest = [
  "/register",
  "/login",
  "/logout",
  "/_error",
  "/404",
];

const AuthMiddlewareRouter = (ctx) => {
  const { pathname, reduxStore: store } = ctx;
  console.log(pathname)
  const {
    tokenUser: token,
    dataUser: { userTypeName },
  } = store.getState().auth;
  const auth = () => {
    //eslint-disable-line
    if (!token) {
      redirectTo("/login", { res: ctx.res, status: 301 });
    }
  };

  const authNoNeedLogin = () => {
    if (token) {
      redirectTo(role.getUrl(userTypeName), { res: ctx.res, status: 301 });
    }
  };

  switch (pathname) {
    case "/register":
      authNoNeedLogin();
      return;
    case "/login":
      authNoNeedLogin();
      return;
    case "/charlas":
      authNoNeedLogin();
      return;
    case "/charlas/crear":
      authNoNeedLogin();
      return;
    case "/charlas/[id]":
      authNoNeedLogin();
      return;
    case "/logout":
      auth();
      return;
  }

  if (availableToAll.includes(pathname)) return;
  if (pathname.indexOf(role.getUrl(userTypeName)) !== -1) {
    auth();
  } else {
    redirectTo(role.getUrl(userTypeName), { res: ctx.res, status: 301 });
  }
};

export default AuthMiddlewareRouter;
