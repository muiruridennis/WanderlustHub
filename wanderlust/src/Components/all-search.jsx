import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export const Search = ({ searchTerm, handleSearchInputChange }) => (
  <Card sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
    <OutlinedInput
      onChange={handleSearchInputChange}
      // defaultValue=""
      value={searchTerm}
      fullWidth
      placeholder="Search ..."
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