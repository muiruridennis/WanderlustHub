import { Navigate, Route, Routes } from 'react-router-dom';
import { clientsRoutes } from "../../Constants/AppContentRoutes";

function Layout ({client}) { 
    return (
        <main component="main"  sx={{
            flexGrow: 1,
            py: 8
        }}>
            <Routes>
                {clientsRoutes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element task={client}/>}
                            />
                        )
                    )
                })}
                <Route path="/" element={<Navigate to="clientsDetails" replace />} />
            </Routes>
        </main>
    )
}

export default Layout
