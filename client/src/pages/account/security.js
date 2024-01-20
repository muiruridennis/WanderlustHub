import { useCallback, useState } from 'react';
import { format } from 'date-fns';
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
  InputAdornment,
  IconButton
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const accountLogin = [

  {
    loginType: "Credential login ",
    time: 1655016400000,
    ipAddress: "127.21.170.181",
    client: "Chrome, Mac OS 10.15.7"
  },
  {
    loginType: "Credential login ",
    time: 1555016400000,
    ipAddress: "159.89.173.104",
    client: "Opera Mini, Nokia  3.1"
  },
  {
    loginType: "Credential login ",
    time: 1555516400000,
    ipAddress: "95.130.17.84",
    client: "Chrome, Mac OS 10.15.7"
  },
]

function Security() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);



  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={4} >
              <Grid item
                sm={12}
                md={4}
                lg={4}
              >
                <Typography variant='h6' align="left" >Change password</Typography>
              </Grid>
              <Grid item
                sm={12}
                md={8}
                lg={8}
              >
                <Stack direction="row"
                  spacing={3}
                >
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button size="small" variant="contained" type="submit" disabled={!formik.values.password || formik.errors.password}>
                    Change
                  </Button>

                </Stack>
              </Grid>
            </Grid>
          </CardContent>

        </Card>
      </form>

      <form >
        <Card sx={{ marginTop: 3 }}>
          <CardHeader
            // subheader="The information can be edited"
            title="Multi Factor Authentication"
            align="left"
          />
          <CardContent sx={{ paddingTop: 1 }}>
            <Grid container  >
              <Grid item
              >
                <Typography variant='body1' align="left" >Text Message</Typography>
                <Typography variant='body2' align="left" >Use your mobile phone to receive security codes via SMS.</Typography>
                <CardActions sx={{ justifyContent: 'flex-start', marginTop: 3 }}>
                  <Button variant="contained">
                    Activate 
                  </Button>
                </CardActions>

              </Grid>

            </Grid>
          </CardContent>

        </Card>
      </form>
      <Card sx={{ marginTop: 3 }}>
        <CardHeader
          subheader="Your recent login activity"
          title="Login history"
          align="left"
        />
        <CardContent sx={{ paddingTop: 1 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  LOGIN TYPE
                </TableCell>
                <TableCell>
                  IP ADDRESS
                </TableCell>
                <TableCell>
                  CLIENT
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountLogin.map(({ loginType, client, ipAddress, time }) => {
                const LoggedInAt = format(time, 'HH:mm:ss dd/MM/yyyy');
                return (
                  <TableRow
                    hover
                    key={time}
                  >
                    <TableCell>
                      {`${loginType} on ${LoggedInAt}`}
                    </TableCell>
                    <TableCell>
                      {ipAddress}
                    </TableCell>
                    <TableCell>
                      {client}
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

export default Security
