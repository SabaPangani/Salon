import React, { useState } from "react";
import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AppointmentModal from "../components/modals/CreateAppointment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DraggableCalendar = withDragAndDrop(Calendar);
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
  const [showModal, setShowModal] = useState(false);

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

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    serviceName: string
  ) => {
    event.preventDefault();
    handleEventSubmit(serviceName);
  };

  const onEventDrop = ({
    event,
    start,
    end,
    isAllDay: droppedOnAllDaySlot,
  }: any) => {
    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const onEventResize = ({ event, start, end }: any) => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="my-32">
        {selectedSlot && (
          <AppointmentModal
            toggleModal={toggleModal}
            handleFormSubmit={handleFormSubmit}
          />
        )}
        <DraggableCalendar
          localizer={localizer}
          selectable
          resizable={true}
          events={events}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={(event) => alert((event as any).title)}
          style={{ height: 1000 }}
          className="w-screen bg-white px-20 py-10"
          step={60}
        />
      </div>
    </DndProvider>
  );
};

export default MyCalendar;
