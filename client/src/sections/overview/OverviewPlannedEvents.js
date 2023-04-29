import { format } from 'date-fns';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
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

export const OverviewPlannedEvents = (props) => {
  const { events = [], sx } = props;
  return (
    <Card sx={sx}>
      <Typography color="#000000" sx={{ fontSize: "1.25rem", fontWeight: 700 }}>Upcoming Events</Typography>
      <List>
        {events.map((event, index) => {
          const hasDivider = index < events.length - 1;
          const plannedAt = format(event.date, 'dd/MM/yyyy');

          return (
            <ListItem
              divider={hasDivider}
              key={event.id}
            >
              {/* <ListItemAvatar>
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
              </ListItemAvatar> */}
              <ListItemText
                primary={event.name}
                primaryTypographyProps={{ variant: 'subtitle2'}}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <ListItemText
                primary={event.location}
                primaryTypographyProps={{ variant: 'caption' }}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <ListItemText
                primary={plannedAt}
                primaryTypographyProps={{ variant: 'caption' }}
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