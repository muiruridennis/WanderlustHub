import { Navigate, Route, Routes } from 'react-router-dom';
import { accountRoutes } from "../../Constants/AppContentRoutes";

function Layout () {
    return (
        <main component="main"  sx={{
            flexGrow: 1,
            py: 8
        }}>
            <Routes>
                {accountRoutes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element />}
                            />
                        )
                    )
                })}
                <Route path="/" element={<Navigate to="account" replace />} />
            </Routes>
        </main>
    )
}

export default Layout