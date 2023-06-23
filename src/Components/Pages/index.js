import Dashboard from "./Dashboard";
import Groups from "./Groups";

const routes = {
    DASHBOARD: '/',
    GROUPS: '/groups'
}

export const pages = [
    {path: routes.DASHBOARD, main: Dashboard},
    {path: routes.GROUPS, main: Groups},
]