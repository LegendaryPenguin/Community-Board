import "./App.css";
import EventCard from "./components/EventCard";
import events from "./data/events";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">🌍 Resources for International Students</h1>
      <div className="card-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default App;
