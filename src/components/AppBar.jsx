import {AppBar, Toolbar, Typography, Box, Grid} from '@mui/material';
import { useTheme } from '@mui/styles';
import {Link} from 'react-router-dom'
import logo from '../logo.png';

export default () => {
  const theme = useTheme()
  const styles = {
    outerBox: {
      height: '100%',
      width: 'auto',
      backgroundColor: theme.palette.background.default,
      padding: '0 2vw 0 2vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    innerBox: {
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: theme.typography.h6.letterSpacing,
        marginLeft: theme.spacing(2)
      },
      upLink: {
        textDecoration: 'none',
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
        letterSpacing: theme.typography.h5.letterSpacing,
        marginLeft: theme.spacing(1)
      },
      image: {
        height: '5vh',
      },

  }

  return (
    <Box style={styles.outerBox}>
      <Box style={styles.innerBox}>
        <img src={logo} alt="logo" style={styles.image} />
        <Link to='/' style={styles.upLink}>Uplink</Link>
      </Box>

      <Box style={styles.innerBox}>
        <Link to='/' style={styles.link}>Overview</Link>
        <Link to='/airdrops' style={styles.link}>Airdrops</Link>
      </Box>
    </Box>
  )
}

/*

export default () => {
  const theme = useTheme()
  const styles = {
      appBar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      },
      homeLink: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
        letterSpacing: theme.typography.h5.letterSpacing,
        marginLeft: theme.spacing(1)
      },
      link: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: theme.typography.h6.letterSpacing,
        marginLeft: theme.spacing(2)
      },
      image: {
        width: theme.spacing(6),
        margin: theme.spacing(1) 
      }
    }
  return (
      <AppBar position="sticky" elevation={6} style={styles.appBar}>
        <Toolbar variant='dense'>
            <img src={logo} alt="logo" style={styles.image} />
            <Grid container justifyContent='space-between' alignItems='center'>
              <Grid item > 
                <Link to='/' style={styles.homeLink}>Uplink</Link>
              </Grid>
              <Grid item>
                <Box>
                  <Link to='/' style={styles.link}>Overview</Link>
                  <Link to='/airdrops' style={styles.link}>Airdrops</Link>
                </Box>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}*/

