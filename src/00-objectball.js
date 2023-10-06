
const gameObject = () => {
    const obj = {
        home: 
        {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16, 
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
            },
        },
        away: 
        {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18, 
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
            }
        }
    }
    return obj
}

// return points of specific player 
const numPointsScored = (playerName) => {
    let obj = gameObject()
    for (key in obj) {
        for (player in obj[key].players) {
            if (playerName === player) {
                return obj[key].players[player].points
            }
        }  
    }
}

// return shoe size of specific player 
const shoeSize = (playerName) => {
    let obj = gameObject()
    for (key in obj) {
        for (player in obj[key].players) {
            if (playerName === player) {
                return obj[key].players[player].shoe
            }
        }  
    }
}

// return team color of specific player 
const teamColors = (playerName) => {
    let obj = gameObject()
    for (key in obj) {
        for (player in obj[key].players) {
            if (playerName === player) {
                return obj[key].colors
            }
        }  
    }
}

// return array of teams name
const teamNames = () => {
    let obj = gameObject()
    const teams = []
    for (key in obj) {
        teams.push(obj[key].teamName)
    }
    return teams
}

// return the player number of specific team 
const playerNumbers = (teamName) => {
    let obj = gameObject()
    const teamPlayerNumber = []
    for (key in obj) {
        if (teamName === obj[key].teamName) {
            for (player in obj[key].players) {
                teamPlayerNumber.push(obj[key].players[player].number)
            }  
        }
    }
    return teamPlayerNumber
}

// returns a object of that player's stats
const playerStats = (playerName) => {
    let obj = gameObject()
    for (player in obj) {
        return obj[player].players[playerName]
    }
}


// return the number of rebounds associated with the player that has the largest shoe size
const bigShoeRebounds = () => {
    let obj = gameObject()
    const rebounds = []
    for (key in obj) {
        for (player in obj[key].players) {
            if (obj[key].players[player].shoe > 10) {
                rebounds.push(obj[key].players[player].rebounds)
            }
        }
    }
    return rebounds
}


// player has the most points
const mostPointsScored = () => {
    let obj = gameObject()
    let currentPoints = 0
    let winnerPlayer = ""
    for (key in obj) {
        
        for (player in obj[key].players) {
            if (obj[key].players[player].points > currentPoints) {
                currentPoints = obj[key].players[player].points
                winnerPlayer = player
            }
        }
    }
    return winnerPlayer

}

// team has the most points
const winningTeam = () => {
    let obj = gameObject()
    let currentPoints = 0
    let winnerTeam = ""
    for (key in obj) {
        for (player in obj[key].players) {
            if (obj[key].players[player].points > currentPoints) {
                currentPoints = obj[key].players[player].points
                winnerTeam= obj[key].teamName
            }
        }
    }
    return winnerTeam
}

// player has the longest name
const playerWithLongestName = () => {
    let obj = gameObject()
    let lengthName = 0
    let winnerName = ""
    for (key in obj) {
        for (player in obj[key].players) {
            if (player.length > lengthName) {
                lengthName = player.length
                winnerName = player
            }
        }
    }
    return winnerName
}


// check if the player with the longest name had the most steals
const doesLongNameStealATon = () => {
    let obj = gameObject()

    for (key in obj) {
        for (player in obj[key].players) {
            if (obj[key].players[playerWithLongestName()].steals > obj[key].players[player].steals ) {
                return true
            } else {
                return false
            }
        }
    }
}


