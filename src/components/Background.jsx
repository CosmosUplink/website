import { useTheme } from '@mui/styles';
import Paper from '@mui/material/Paper';

export default ({children}) => {
  const theme = useTheme()
  const styles = {
    paper: {
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary
    }
  }
  return (
    <Paper square elevation={0} style={styles.paper}>
      {children}
    </Paper>
  )
}