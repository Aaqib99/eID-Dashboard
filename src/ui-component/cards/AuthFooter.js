// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://veryfid.io" target="_blank" underline="hover">
            veryfid
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://veryfid.io" target="_blank" underline="hover">
            &copy;Digital-Identity
        </Typography>
    </Stack>
);

export default AuthFooter;
