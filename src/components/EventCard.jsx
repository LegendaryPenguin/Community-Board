import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="card">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <a href={event.link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
}

export default EventCard;
