import Link from 'next/link';
import classes from './results-title.module.css';
import button from '../events/button.module.css'
function ResultsTitle({date}) {
 

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <button className={ button.btn}>
        <Link href='/events' className={classes.link}>Show all events</Link></button>
    </section>
  );
}

export default ResultsTitle;
