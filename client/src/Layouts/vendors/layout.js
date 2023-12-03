import { Navigate, Route, Routes } from 'react-router-dom';
import { vendorsRoutes } from "../../Constants/AppContentRoutes";

function Layout({ vendor }) {
    return (
        <main component="main" sx={{
            flexGrow: 1,
            py: 8
        }}>
            <Routes>
                {vendorsRoutes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element vendor={vendor} />}
                            />
                        )
                    )
                })}
                <Route path="/" element={<Navigate to="VendorDetails" replace />} />
            </Routes>
        </main>
    )
}

export default Layout
