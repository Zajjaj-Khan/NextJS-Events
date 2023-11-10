import Link from "next/link";
import classes from "./event-item.module.css";
import button from './button.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
function EventItem({ title, image, date, location, id }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link className={button.btn} href={exploreLink}><span>Explore Event</span>
          <span className={classes.icon}><ArrowRightIcon/></span>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
