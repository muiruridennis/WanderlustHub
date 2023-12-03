// ActionButtons.js
import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';

function ActionButtons({ expense, setOpenPopup, setCurrentExpenseId, setConfirmDialog, confirmDialog }) {

    const handleEdit = () => {
        setOpenPopup(true);
        setCurrentExpenseId(expense.id);
    };

    const handleDelete = () => {
        setConfirmDialog({
            isOpen: true,
            title: 'Are you sure to delete This Expenses?',
            subTitle: "You can't undo this operation",
            action:"Delete",

            onConfirm: () => {
              setConfirmDialog({
                ...confirmDialog,
                isOpen: false
              })
              alert(`deleting....`)
             
            }
          })    };

          const handleApprove = () => {
            setConfirmDialog({
                isOpen: true,
                title: 'Approve Expense',
                subTitle: 'Are you sure to approve this expense?',
                action:"Approve",
                onConfirm: () => {
                    setConfirmDialog({
                        ...confirmDialog,
                        isOpen: false
                    });
                    // Perform the approval action here, such as updating the expense status
                    alert('Expense approved');
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
            {expense.status !== "Approved" && (
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
