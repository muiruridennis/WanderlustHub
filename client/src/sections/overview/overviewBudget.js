import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PaidIcon from '@mui/icons-material/Paid';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewBudget = (props) => {
    const { difference, positive = false, value } = props;

    return (
        <Card
            sx={{
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
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}                        >
                            Total Revenue
                        </Typography>
                        <Typography variant="h4">
                            {value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: '#8CC0DE',
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <PaidIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
                {difference && (
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        <Stack
                            alignItems="center"
                            direction="row"
                            spacing={0.5}
                        >
                            <SvgIcon
                                color={positive ? 'success' : 'error'}
                                fontSize="small"
                            >
                                {positive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                            </SvgIcon>
                            <Typography
                                color={positive ? 'success.main' : 'error.main'}
                                variant="body2"
                            >
                                {difference}%
                            </Typography>
                        </Stack>
                        <Typography
                            color="text.secondary"
                            variant="caption"
                        >
                            Since last month
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
};