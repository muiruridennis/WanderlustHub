import React from 'react'
import { format } from 'date-fns';
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  CardHeader,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

function Billings() {
  const Payments = [
    {
      date: 1655016400000,
      paymentFor: "Maasai Mara Trip",
      link: "/invoice/payment:123"
    },
    {
      date: 1555016400000,
      paymentFor: "Nairobi National Park",
      link: "/invoice/payment:126"
    },
    {
      date: 1555516400000,
      paymentFor: "Burudani Adventure",
      link: "/invoice/payment:123"
    },
  ];
  return (
    <>
      <Card sx={{ marginTop: 3 }}>
        <CardHeader
          title="Invoice history"
          subheader="You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below."
          align="left"
        />
        <CardContent sx={{ paddingTop: 1 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Payment For
                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Payments.map(({ date, paymentFor, link }) => {
                const LoggedInAt = format(date, 'HH:mm:ss dd/MM/yyyy');
                return (
                  <TableRow
                    hover
                    key={date}
                  >
                    <TableCell>
                      {LoggedInAt}
                    </TableCell>
                    <TableCell>
                      {paymentFor}
                    </TableCell>
                    <TableCell>
                      <Link
                      style={{textDecoration:"underline"}}
                        // to={link}
                        to={"#"}
                      >
                        View Invoice
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

        </CardContent>

      </Card>
    </>
  )
}

export default Billings
