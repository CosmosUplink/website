import { Box, Button, Link, Typography, Modal} from '@mui/material'
import { useTheme } from '@mui/styles'
import { Twitter, Email, YouTube, GitHub } from '@mui/icons-material/'
import { FaDiscord } from 'react-icons/fa'
import {useState} from 'react'

const BasicModal = () => {
  const theme = useTheme()
  const styles = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: theme.palette.text.primary,
  },
}


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button disableRipple size='large' onClick={handleOpen}>Donate</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={styles.box}>
          <Typography variant="h5" component="h2">Donation</Typography>
          <br/>
          <Typography>
            If you find our services useful, consider donating to us. With your donation, we will scale our operations and bring greater value to the cosmos.
            </Typography>
            <br/>
            <br/>
            <Typography>Cosmos: cosmos1r2fa8j6zsmrv3xlagjygclzw497laur9fhy2z4</Typography>
            <Typography>Osmosis: osmo1r2fa8j6zsmrv3xlagjygclzw497laur9pvh658</Typography>
            <br/>
            <Typography>Thank you</Typography>
        </Box>
      </Modal>
    </div>
  );
}


export default () => {
  const theme = useTheme()
  const styles = {
    containerBox: {
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: theme.palette.background.default,
      height: '100%',
      width: 'auto',
      padding: '0 2vw 0 2vw',
    },
    innerBox: {
      width: '60vw',
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
    },
    outerBox: {
      width: '20vw',
    },
    logo: {
      fontSize: '2rem',
      padding: '0px',
      margin: `0px ${theme.spacing(1)} 0px ${theme.spacing(1)}`,
    }
  }
  const logos = [
    {
      link: 'https://twitter.com/CosmosUplink',
      logo:  <Twitter style={styles.logo}/>,
    },
    {
      link: 'https://discord.gg/VYUgYXBvyy',
      logo: <FaDiscord style={styles.logo}/>,
    },
    {
      link: 'mailto:cosmos.uplink@protonmail.com',
      logo:  <Email style={styles.logo}/>,
        
    },
    {
      link: 'https://tinyurl.com/m9mwb2vd',
      logo: <YouTube style={styles.logo}/>,
    },
    {
      link: 'https://github.com/CosmosUplink',
      logo: <GitHub style={styles.logo}/>,
    }

]

  return (
    <Box style={styles.containerBox}>
      <Box style={styles.outerBox}>
        <BasicModal />
      </Box>
      <Box style={styles.innerBox}>
        {logos.map(({link, logo}, index) => <Link href={link} key={index} target="_blank" rel="noopener noreferrer">{logo}</Link>)}
      </Box>
      <Box style={styles.outerBox}> </Box>
    </Box>
  )
}