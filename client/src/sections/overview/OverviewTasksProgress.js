import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    LinearProgress,
    Stack,
    SvgIcon,
    Typography
} from '@mui/material';

export const OverviewTasksProgress = (props) => {
    const { value } = props;

    return (
        <Card sx={{
            cursor: 'pointer',
            height: '100%',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            },
        }}
        >
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="#0A2647"
                            gutterBottom
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}
                        >
                            Task Progress
                        </Typography>
                        <Typography variant="h4">
                            {value}%
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'warning.main',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <FormatListBulletedIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                <Box sx={{ mt: 3 }}>
                    <LinearProgress
                        value={value}
                        variant="determinate"
                    />
                </Box>
            </CardContent>
        </Card>
    );
};