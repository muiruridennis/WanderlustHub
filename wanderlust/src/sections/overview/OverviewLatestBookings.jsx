import { format } from 'date-fns';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    Divider,
    SvgIcon,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
     Typography
} from '@mui/material';
import { SeverityPill } from "../../Components/severity-pill"

const statusMap = {
    Pending: 'warning',
    Approved: 'success',
    Rejected: 'error'
};

export const OverviewLatestBookings = (props) => {
    const { bookings = [], sx } = props;

    return (
        <Card sx={sx}>
            {/* <CardHeader title="Latest Bookings" /> */}
            {/* <Scrollbar sx={{ flexGrow: 1 }}> */}
            <Typography color="#000000" sx={{ fontSize: "1.25rem", fontWeight: 700 }}>Latest Bookings</Typography>

            <Box sx={{ minWidth: 800 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Booking
                            </TableCell>
                            <TableCell>
                                Client
                            </TableCell>
                            <TableCell>
                                Tour
                            </TableCell>
                            <TableCell sortDirection="desc">
                                Date
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((booking) => {
                            const createdAt = format(booking.createdAt, 'dd/MM/yyyy');

                            return (
                                <TableRow
                                    hover
                                    key={booking.id}
                                >
                                    <TableCell>
                                        {booking.ref}
                                    </TableCell>
                                    <TableCell>
                                        {booking.client.name}
                                    </TableCell>
                                    <TableCell>
                                        {booking.trip.name}
                                    </TableCell>
                                    <TableCell>
                                        {createdAt}
                                    </TableCell>
                                    <TableCell >
                                        <SeverityPill color={statusMap[booking.status]}>
                                            {booking.status}
                                        </SeverityPill>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
            {/* </Scrollbar> */}
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    color="inherit"
                    endIcon={(
                        <SvgIcon fontSize="small">
                            <ArrowForwardIcon />
                        </SvgIcon>
                    )}
                    size="small"
                    variant="text"
                    sx={{textTransform: "none"}}
                >
                    View all
                </Button>
            </CardActions>
        </Card>
    );
};