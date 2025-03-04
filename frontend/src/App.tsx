import teamsData from "./data/CollegeBasketballTeams.json";
import { useState, useEffect } from "react";
import "./App.css";

function Heading() {
  return (
    <div>
      <h1>NCAA Basketball Teams</h1>
      <h2>Explore information about NCAA basketball teams, including their mascots and locations.</h2>
    </div>
  );
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
