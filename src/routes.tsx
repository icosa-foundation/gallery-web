import { Route } from './types/index'
import Index from './pages/index'

export const Routes: Route [] = [
    {
        path: '/',
        exact: false,
        component: Index
    }
]