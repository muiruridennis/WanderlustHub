import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTours} from "../../Actions/tour"

function Tours() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchTours()) 
    }, [dispatch]);
    const {tours, isLoading} = useSelector((state) => state.tours);

    return (
        <>
        <h1>tour  graphs will apper here</h1>
        </> 
    )
}

export default Tours