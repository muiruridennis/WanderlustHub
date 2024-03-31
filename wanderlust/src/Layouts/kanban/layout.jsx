import { Navigate, Route, Routes } from 'react-router-dom';
import { taskRoutes } from "../../Constants/AppContentRoutes";

function Layout ({task}) { // to be fixed later to avoid much prop drilling
    return (
        <main component="main"  sx={{
            flexGrow: 1,
            py: 8
        }}>
            <Routes>
                {taskRoutes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element task={task}/>}
                            />
                        )
                    )
                })}
                <Route path="/" element={<Navigate to="kanban" replace />} />
            </Routes>
        </main>
    )
}

export default Layout