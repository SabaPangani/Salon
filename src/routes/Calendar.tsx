import { Day, Month, Week } from "@syncfusion/ej2-react-schedule";
import {
  Inject,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";

const events = [
  {
    Id: 2,
    Subject: "New Budget Report",
    StartTime: new Date(2024, 3, 17, 10, 0),
    EndTime: new Date(2024, 3, 17, 12, 30),
    IsAllDay: true,
    Status: "Completed",
    Priority: "High",
  },
];

export default function Calendar() {
  return (
    <div>
      <ScheduleComponent eventSettings={{ dataSource: events }}>
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    </div>
  );
}
