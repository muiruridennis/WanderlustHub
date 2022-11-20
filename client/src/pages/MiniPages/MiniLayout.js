import React from 'react'
import { minorRoutes } from '../../Constants/AppContentRoutes';
import { Route, Routes, Navigate  } from 'react-router-dom';

function MiniLayout({client}) {
    return (
            <Routes>
                {minorRoutes.map((route, idx) => {
                    return (
                        route.element
                        && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element client={client} />}
                            />
                        )                
                    )
                })}
                <Route path="/" element={<Navigate to="personal" replace />} />
                {/* this line acts like an index prop that  declares personal route as the default 
                child route to render in the parent's Outlet when there is no other child to render. 
                index is the default placeholder content for an empty path. */}
            </Routes>
    )
}

export default MiniLayout