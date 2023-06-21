import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export const ClientsSearch = () => (
  <Card sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
    <OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Search customer"
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <SearchIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 500 }}
    />
  </Card>
);