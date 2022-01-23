import React from 'react'
import {Grid, Box} from '@mui/material'
import Background from './Background'
import AppBar from './AppBar'
import Footer from './Footer'

import { useTheme } from '@mui/styles'

export default ({children}) => {
  const theme = useTheme()
  const styles = {
    top: {
        minHeight: '1rem',//'3.5rem', 
        height: '6vh',
    },
    center: {
      height: '79vh',
      margin: '5vh 0 5vh 0'

    },
    bottom: {
      height: '5vh',
      minHeight: '1rem',//'3rem',
    }
  }
  return (
    <Background>
      <Grid container justifyContent='center'>  
        <Grid item xs={12} >
          <Box style={styles.top}>
          <AppBar />
          </Box>
        </Grid>
          <Grid item xs={12} sm={10} key={3}>
            <Box style={styles.center}>
              {children}
            </Box>
          </Grid>
        <Grid item xs={12} style={styles.bottom}>
          <Footer/>
        </Grid>
      </Grid>
    </Background>
  )    
}
