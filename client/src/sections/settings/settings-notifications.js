import { useCallback, useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Switch,
  Divider,
  FormControlLabel,
   Radio,
  FormControl, RadioGroup,
  FormLabel, FormGroup
} from '@mui/material';

export const SettingsNotifications = () => {
  const [formData, setFormData] = useState({
    notificationType: 'booking_update',
    emailEnabled: true,
    smsEnabled: false,
    inAppEnabled: true,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        />
        <Divider />
        <CardContent>
          <FormControl component="fieldset" >
            <FormLabel component="legend">Notification Type</FormLabel>
            <RadioGroup
              aria-label="notificationType"
              name="notificationType"
              value={formData.notificationType}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="booking_update"
                control={<Radio />}
                label="Booking Update"
              />
              <FormControlLabel
                value="promotions"
                control={<Radio />}
                label="Promotions"
              />
              <FormControlLabel
                value="news_alert"
                control={<Radio />}
                label="News Alert"
              />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={<Switch name="emailEnabled" checked={formData.emailEnabled} onChange={handleChange} />}
              label="Email Enabled"
            />
            <FormControlLabel
              control={<Switch name="smsEnabled" checked={formData.smsEnabled} onChange={handleChange} />}
              label="SMS Enabled"
            />
            <FormControlLabel
              control={<Switch name="inAppEnabled" checked={formData.inAppEnabled} onChange={handleChange} />}
              label="In-App Enabled"
            />
          </FormGroup>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
