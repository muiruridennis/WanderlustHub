import { useCallback, useState } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import ConfirmDialog from "../../Components/ConfirmDialog";
export const DeleteAccount = () => {
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
        },
        []
    );

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader
                        subheader="Delete Account"
                        title="Account"
                    />
                    <CardContent>
                        <Typography>
                            Delete your account and all of your source data. This is irreversible.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="outlined" color="error"
                        onClick={() => {
                            setConfirmDialog({
                              isOpen: true,
                              title: 'Are you sure to delete Your Account?',
                              subTitle: "You can't undo this operation",
                              onConfirm: () => {
                                setConfirmDialog({
                                  ...confirmDialog,
                                  isOpen: false
                                })
                                alert(`deleting....`)
                                // setNotify({
                                //   isOpen: true,
                                //   message: 'Deleted Successfully',
                                //   type: 'error'
                                // })
                              }
                            })

                          }}
                        >
                            Delete Account
                        </Button>
                    </CardActions>
                </Card>
            </form>
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    );
};