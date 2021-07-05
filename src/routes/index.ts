import { HomePage, LandingPage } from "../pages"

const routes = [
    {
        key: 'home',
        path:'/home',
        component: HomePage
    },
    {
        key: 'landing',
        path:'/',
        component: LandingPage
    },
]

export default routes