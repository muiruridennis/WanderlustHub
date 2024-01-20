import { formatDistanceToNow } from 'date-fns';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import client from "../../Images/client.jpg";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
  Typography
} from '@mui/material';

export const OverviewExpenses = (props) => {
  const { tours = [], sx } = props;

  return (
    <Card sx={sx}>
      <Typography color="#000000" sx={{ fontSize: "1.25rem", fontWeight: 700 }}>Latest Expenses</Typography>
      <List>
        {tours.map((tour, index) => {
          const hasDivider = index < tours.length - 1;
          const ago = formatDistanceToNow(tour.updatedAt);

          return (
            <ListItem
              divider={hasDivider}
              key={tour.id}
            >
              <ListItemAvatar>
                {
                  client
                    ? (
                      <Box
                        component="img"
                        src={client}
                        sx={{
                          borderRadius: 1,
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                    : (
                      <Box
                        sx={{
                          borderRadius: 1,
                          backgroundColor: 'neutral.200',
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                }
              </ListItemAvatar>
              <ListItemText
                primary={tour.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={`Updated ${ago} ago`}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <IconButton edge="end">
                <SvgIcon>
                  <MoreHorizIcon />
                </SvgIcon>
              </IconButton>
            </ListItem>
          );
        })}
      </List>
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