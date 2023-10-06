
let scoreA = document.getElementById("score-Ateam")
let scoreB = document.getElementById("score-Bteam")
let aTeamscore = 0
let bTeamscore = 0

//Team A Section//

function aTeamAddOne(){
    aTeamscore = aTeamscore + 1
    scoreA.textContent = aTeamscore
}
function aTeamAddTwo(){
    aTeamscore += 2
    scoreA.textContent = aTeamscore
}
function aTeamAddThree(){
    aTeamscore += 3
    scoreA.textContent = aTeamscore
}

//Team B Section//

function bTeamAddOne(){
    bTeamscore += 1
    scoreB.textContent = bTeamscore
}
function bTeamAddTwo(){
    bTeamscore += 2
    scoreB.textContent = bTeamscore
}
function bTeamAddThree(){
    bTeamscore += 3
    scoreB.textContent = bTeamscore
}