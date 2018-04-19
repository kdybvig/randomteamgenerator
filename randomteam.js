function generateTeams () {
  document.getElementById("teams").innerHTML = "";
  let players = document.getElementById("players").value
  players = players.split(/(\r\n|\r|\n)/)
  players = players.filter(player => /[a-z]/i.test(player))
  const numTeams = Math.min(Number(document.getElementById("num-teams").value),players.length);
  for (i = 0; i < numTeams; i++) {
    const team = document.createElement("p")
    team.innerHTML = `Team ${i +1}: `
    teams.appendChild(team)
  }
  let curTeam = 0;
  while (players.length>0) {
    const rndIndex = Math.floor(Math.random()*players.length)
    let nextTeam;
     if (curTeam < numTeams-1) {
      nextTeam = curTeam + 1
    } else {
      nextTeam = 0;
    }
    const newTeam = document.getElementById("teams").getElementsByTagName("p")[curTeam];
    const nextNewTeam = document.getElementById("teams").getElementsByTagName("p")[nextTeam];
    let player;
    if (players.length === 2 && /Isaiah|Anthony/.test(nextNewTeam.innerHTML) && /Isaiah|Antony/.test(players)) {
    console.log('next' +nextNewTeam.innerHTML);
    const newIndex = Math.max(players.indexOf('Isaiah'),players.indexOf('Anthony'));
    player = players.splice(newIndex,1);
    console.log('new player' + player);
    console.log(players)
    } else if (/Isaiah|Anthony/.test(newTeam.innerHTML) && /Isaiah|Anthony/.test(players[rndIndex])) {
    console.log(newTeam.innerHTML)
    console.log(players)
    const playerX = players.splice(rndIndex, 1);
    const newIndex = Math.floor(Math.random()*players.length)
    player = players.splice(newIndex,1);
    console.log(player);
    players.push(playerX[0]);
    } else {
    player = players.splice(rndIndex, 1);}
    console.log('player' + player)
    let playerText = document.createTextNode(` ${player},`);
    if (players.length < numTeams) {
      playerText = document.createTextNode(` ${player}`)
    }
    newTeam.appendChild(playerText);
    curTeam = nextTeam
  }
}
