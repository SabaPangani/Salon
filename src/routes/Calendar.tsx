import React, { useState } from "react";
import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Toolbar from "../components/Toolbar";

const localizer = momentLocalizer(moment);

interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    setSelectedSlot(slotInfo);
  };

  const handleEventSubmit = (title: string) => {
    if (selectedSlot) {
      const newEvent: CalendarEvent = {
        id: Math.random(),
        title: title,
        start: selectedSlot.start,
        end: selectedSlot.end,
      };
      setEvents([...events, newEvent]);
      setSelectedSlot(null);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleEventSubmit("New Event");
  };

  const CustomToolbar = ({ label }: any) => {
    return (
      <div className="flex justify-between p-4 bg-white text-white">
        <button className="btn btn-primary">{label}</button>
        {/* Rest of your custom toolbar */}
      </div>
    );
  };
  return (
    <div className="my-32">
      {selectedSlot && (
        <form onSubmit={handleFormSubmit}>
          <button type="submit">Add Event</button>
        </form>
      )}
      <Calendar
        localizer={localizer}
        selectable
        events={events}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => alert(event.title)}
        onDoubleClickEvent={(event) => {
          /* Handle double click event */
        }}
        style={{ height: 1000 }}
        startAccessor="start"
        endAccessor="end"
        className="w-screen bg-white px-20 py-10"
        components={{ toolbar: Toolbar }}
        step={60}
        
      />
    </div>
  );
};

export default MyCalendar;
