import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Home/Home.css'
import Navigation from '../widgets/NavigationPanel/Navigation';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // Sample events
  const events = [
    {
      title: 'Meeting 1',
      start: new Date(2023, 10, 27, 10, 0, 0),
      end: new Date(2023, 10, 27, 12, 0, 0),
    },
    {
      title: 'Meeting 2',
      start: new Date(2023, 10, 28, 14, 0, 0),
      end: new Date(2023, 10, 28, 16, 0, 0),
    },
  ];

  // Handle event click
  const handleEventClick = event => {
    alert(`Clicked event: ${event.title}`);
  };

  return (
    <div style={{ height: '500px' }}>
      <Navigation/>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '20px' }}
        onSelectEvent={handleEventClick}
      />
    </div>
  );
};

export default MyCalendar;
