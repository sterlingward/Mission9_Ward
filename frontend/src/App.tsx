import teamsData from "./data/CollegeBasketballTeams.json";
import { useState, useEffect } from "react";
import "./App.css";

function Heading() {
  return <h1>NCAA Basketball Teams</h1>;
  return <h2>This Website lists out information about all the colleges in NCAA Basketball. You'll find a list below</h2>
}

function TeamCard({ school, mascot, city, state }: { school: string; mascot: string; city: string; state: string }) {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {mascot}</p>
      <p>Location: {city}, {state}</p>
    </div>
  );
}

function TeamList() {
  const [teams, setTeams] = useState(teamsData.teams);

  return (
    <div>
      {teams.map((team, index) => (
        <TeamCard key={index} school={team.school} mascot={team.name} city={team.city} state={team.state} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  );
}

export default App;
