//solution 1

function tournamentWinner(competitions, results) {
  // Write your code here.
  // Initializing the scorekeeping objects: Here, the leader object will
  //   keep track of the team with the current highest score.
  //   The scoreboard object will store the cumulative scores for each team.
  const leader = { score: -Infinity, name: "" };
  const scoreboard = {};

  // Looping through each competition: This loop will go through each match in the competitions list.
  for (let i = 0; i < competitions.length; i++) {
    // Determining the winner of the current competition:
    // If results[i] is 0, it means the away team won, so winnerIdx
    // is set to 1 (the index of the away team in competitions[i]).
    // If results[i] is 1, it means the home team won, so winnerIdx is set to 0
    // (the index of the home team in competitions[i]).
    const winnerIdx = results[i] === 0 ? 1 : 0;
    const winner = competitions[i][winnerIdx];

    // Updating the scoreboard:
    if (winner in scoreboard) scoreboard[winner] += 3;
    else scoreboard[winner] = 3;

    // Updating the leader: If the current winning team's score in the scoreboard is higher than the current leader's score, then this team becomes the new leader.
    if (leader.score < scoreboard[winner]) {
      leader.name = winner;
      leader.score = scoreboard[winner];
    }
  }

  // Return the winning team:
  return leader.name;
}
