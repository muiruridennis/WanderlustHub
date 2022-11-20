import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from '../styles';
import { deleteFromList } from "../../../../Actions/tourClients"


function ClientsTable() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleUpdate = (e) => { }
    const { clientList } = useSelector((state) => state.tourClient);
    return (
        <table>
            <thead>
                <tr>
                    {/* <td>ID</td> */}
                    <td>Name</td>
                    <td>Paid</td>
                    <td>Bal</td>
                    <td>Contact</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {/* For every unit in this.state.units */}
                {clientList.map((client) => {
                    return (
                        <tr key={client.id}>
                            {/* <td ><input defaultValue={client.id} disabled /></td> */}
                            <td ><input className={classes.nameField} defaultValue={`${client.firstName} ${" "}${client.lastName}`} disabled /></td>
                            <td ><input className={classes.tableField} defaultValue={client.amountPaid} disabled /></td>
                            <td ><input className={classes.tableField} defaultValue={client.balance} disabled /></td>
                            <td ><input className={classes.tableField} defaultValue={client.phoneNumber} disabled /></td>
                            <td><button className={classes.updateButton} onClick={handleUpdate}>Update</button></td> 
                            <td><button className={classes.deleteButton} onClick={() => {
                                dispatch(deleteFromList(client.id))}}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ClientsTable