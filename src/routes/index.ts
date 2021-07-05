import { HomePage, LandingPage } from "../pages"

const routes = [
    {
        key: 'landing',
        path:'/',
        component: LandingPage
    },
    {
        key: 'home',
        path:'/home',
        component: HomePage
    },
]

export default routes