import {Grid, Link} from '@mui/material'
import Calendar from './Calendar'
import OnePageLayout from '../../components/OnePageLayout'
import { useTheme } from '@mui/styles';


const Home = () => {
  const theme = useTheme()
  const styles = {
    link: {
        textDecoration: 'none',
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: theme.typography.h6.letterSpacing,
      },
  }
  return (
    <OnePageLayout>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <Calendar />
        </Grid>
          <Grid style={{marginTop: 20}}>
            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfjlB3qjLnQ-1RJakErBvagM_CP5XmA9um3K08l_6ksU5L1ow/viewform' style={styles.link} target="_blank" rel="noopener noreferrer">Submit Event</Link>
          </Grid>
      </Grid>
    </OnePageLayout>
    )
}

export default Home