import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from '../sections/settings/settings-notifications.js';
import { SettingsPassword } from '../sections/settings/settings-password.js';

const Settings = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4">
            Settings
          </Typography>
          <SettingsNotifications />
          <SettingsPassword />
        </Stack>
      </Container>
    </Box>
  </>
);



export default Settings;