import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export const BookingsSearch = ({ searchQuery, handleSearchChange }) => (
  <OutlinedInput
    value={searchQuery}
    onChange={handleSearchChange}
    fullWidth
    type="search"
    placeholder="Search booking by name, client name"
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
    sx={{ maxWidth: 600 }}
  />
);