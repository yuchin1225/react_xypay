import Home from "../layout/home";
import Car from "../layout/car";



const routes = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        exact: false,
        path: "/payCar",
        component: Car
    }
];


export default routes;