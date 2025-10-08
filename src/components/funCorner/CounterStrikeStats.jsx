import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function CounterStrikeStats() {
  const [stats, setStats] = useState(null);
  const premierRank = stats?.ranks?.premier || "ERROR";
  const faceitRank = stats?.ranks?.faceit || "ERROR";
  const faceitElo = stats?.ranks?.faceit_elo || "ERROR";

  useEffect(() => {
    axios.get("https://api-public.cs-prod.leetify.com/v3/profile?steam64_id=76561199095781332")
      .then(response => setStats(response.data))
      .catch(error => console.error("Error fetching CS stats:", error));
  }, []);

  return (
    <div className="stats-section">
      <h2>Counter-Strike 2 Stats</h2>
      {stats ? (
        <>
          <pre>Current Premier Rank: {premierRank}</pre>
          <pre>Current Faceit Rank: {faceitRank} ({faceitElo} Elo)</pre>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <p>Data Provided by <a href="https://leetify.com/">Leetify</a></p>
    </div>
  );
};