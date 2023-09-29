import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment-timezone';
import axios from 'axios';
import { Link } from 'react-router-dom';


const localizer = momentLocalizer(moment);

const CalendarForm = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Nom de l\'événement :');
    if (title) {
      const newEvent = {
        start: moment.tz(start, 'Indian/Antananarivo').toDate(),
        end: moment.tz(end, 'Indian/Antananarivo').toDate(),
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleSave = () => {
    axios.post('http://localhost:8000/api/agenda/agenda', events)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
    <Link to="/calendrier">Calendrier</Link>
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        resizable
        onSelectSlot={handleSelect}
        step={60}
        style={{ margin: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}
      />
      <button onClick={handleSave}>Enregistrer</button>
    </div>
    </>
  );
};

export default CalendarForm;
