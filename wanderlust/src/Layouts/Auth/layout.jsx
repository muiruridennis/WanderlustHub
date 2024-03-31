import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes } from "../../Constants/AppContentRoutes";

function Layout () {
    return (
        <main component="main">
            <Routes>
                {authRoutes.map((route, idx) => {
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
                <Route path="/" element={<Navigate to="auth" replace />} />
            </Routes>
        </main>
    )
}

export default Layout
