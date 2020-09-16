

function check(computer, user) {
    
    //Computer has rock
    if ( computer == 'rock' | user 'paper' ) {
        result = 'win'
    }
    else if ( computer == 'rock' | user 'rock' ) {
        result = 'draw'
    }
    else if ( computer == 'rock' | user 'scissor' ) {
        result = 'lose'
    }

    //Computer has paper
    else if ( computer == 'paper' | user 'scissor' ) {
        result = 'win'
    }
    else if ( computer == 'paper' | user 'paper' ) {
        result = 'draw'
    }
    else if ( computer == 'paper' | user 'rock') {
        result = 'lose'
    }

    //Computer has scissor
    else if ( computer == 'scissor' | user 'rock' ) {
        result = 'win'
    }
    else if ( computer == 'scissor' | user 'scissor' ) {
        result = 'draw'
    }
    else (
        result = 'lose'
    )
}

