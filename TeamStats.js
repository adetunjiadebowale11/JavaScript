const team={
  _players:[{
    firstName: "Adam",
    lastName: "Ben",
    age: 23
  },
    {firstName: 'Pete', 
    lastName: 'Wheeler', 
    age: 54
    },
    {
      firstName: "Good",
      lastName: "Luck",
      age: 87
    }],
  _games:[
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
{
  opponent: 'WestHam',
  teamPoints: 23,
  opponentPoints: 26
},
{
  opponent: 'Liverpool',
  teamPoints: 34,
  opponentPoints: 46
}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    const player={
      firstName:firstName,
      lastName:lastName,
      age: age
    };
    return  this.players.push(player);
  },
  addGame(opponent,teamPoints,opponentPoints){
 const gameObject={
   opponent: opponent,
   teamPoints: teamPoints,
   opponentPoints: opponentPoints,
 }
  return this.games.push(gameObject);
  }
}

team.addPlayer("Steph","Curry",28);
team.addPlayer("Lisa","Leslie",44);
team.addPlayer("Bugs","Bunny",76);

team.addGame('Titans', 100, 98);
team.addGame('Sudoku', 200, 58);
team.addGame("Chess", 400, 88);

console.log(team._players);
console.log(team._games);
