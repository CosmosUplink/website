import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useTheme } from '@mui/styles';
import {firebase, firestore} from './../../firebase'
import { collection, getDocs } from "firebase/firestore"; 
import {useEffect, useState} from 'react'



const localizer = momentLocalizer(moment)



export default props => {
  const theme = useTheme()
  const styles = {
    calendar: {
      height: '75vh',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
    },
    dayProp: () => ({
      style: {
        backgroundColor: theme.palette.background.default,
      }
    }),
    eventProp: () => ({
      style: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }
    }),
  }
  const [events, setEvents]=useState([])
  var tmp= []
  const fetchEvents = async () => {
    tmp = await getDocs(collection(firestore, "events"));
    tmp = tmp.docs.map(e => {
      e = e.data()
      var title = e.Project
      if (e.Variant)
        title += " " + e.Variant
      title += " " + e.Type
      e = {
        title: title,
        start: e.StartDate.toDate().toDateString(),
        end: e.EndDate.toDate().toDateString(),
      }
      return e
    })
    setEvents(tmp)
}
  
  useEffect(() => {
    fetchEvents();
  }, [])
    
  return (
  <div>
    <Calendar
      localizer={localizer}
      events={events.map(event => ({title: event.title, start: new Date(event.start), end: new Date(event.end)}) )}
      startAccessor="start"
      endAccessor="end"
      views={{month: true, agenda: true}}
      style={styles.calendar}
      dayPropGetter={styles.dayProp}
      eventPropGetter={styles.eventProp}
    />
  </div>
)
}
