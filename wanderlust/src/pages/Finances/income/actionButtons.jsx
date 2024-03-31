// ActionButtons.js
import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';

function ActionButtons({ income, setOpenPopup, setCurrentIncomeId, setConfirmDialog, confirmDialog }) {

    const handleEdit = () => {
        setOpenPopup(true);
        setCurrentIncomeId(income.id);
    };

    const handleDelete = () => {
        setConfirmDialog({
            isOpen: true,
            title: 'Are you sure to delete This incomes?',
            subTitle: "You can't undo this operation",
            action: "Delete",

            onConfirm: () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                })
                alert(`deleting....`)

            }
        })
    };

    const handleApprove = () => {
        setConfirmDialog({
            isOpen: true,
            title: 'Approve income',
            subTitle: 'Are you sure to approve this income?',
            action: "Approve",
            onConfirm: () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                });
                // Perform the approval action here, such as updating the income status
                alert('income approved');
            }
        });
    };



    return (
        <>
            <Tooltip title="Edit">
                <IconButton onClick={handleEdit}>
                    <EditIcon color='primary' />
                </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
                <IconButton onClick={handleDelete}>
                    <DeleteIcon color='error' />
                </IconButton>
            </Tooltip>
            {income.status !== "Approved" && (
                <Tooltip title="Approve">
                    <IconButton onClick={handleApprove}>
                        <CheckCircleIcon color='success' />
                    </IconButton>
                </Tooltip>
            )}
        </>
    );
}

export default ActionButtons;
