import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import EventSearch from "../../components/events/EventSearch";
import { useRouter } from "next/router";
function Events() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventHandler(year,month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);

  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}

export default Events;
