import Login from "./Pages/Login/Login";
import App from "./Pages/Pagina inicial/App";


const routes = [
    {
      path: '/',
      component: App,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
    },
  ];
  
  export default routes;