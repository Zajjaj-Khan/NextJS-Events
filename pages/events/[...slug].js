import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
function filteredEventPage() {
  const router = useRouter();
  const filteredData = router.query.slug;
  console.log(filteredData);
  if (!filteredData) {
    return <p className="center">Loading....</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear; //+ will transform from string to number

  const numMonth = +filteredMonth; //+ will transform from string to number

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ){
    return <p>Tnvaild Filtered Value, Please adjust your filters</p>
  };
  const filteredEvents = getFilteredEvents({
    year:numYear,
    month: numMonth,
  });
  if(!filteredEvents || filteredEvents.length === 0){
    return <p>No events found for the choosen filter. </p>
  }
 
  const date = new Date(numYear,numMonth-1);

  return (
    <Fragment>
     <ResultsTitle date={date}/>
     <EventList items={filteredEvents}/>
    </Fragment>
  );
}
export default filteredEventPage;
