
const rps = () => {

    function computer() {
        const random = ( Math.floor(Math.random() * 3) );
        const choice = ( 'rock', 'paper', 'scissor' )
        return choice = [random];
    }

    function random() {

        if (random == 1) {
            return 'rock'
        }
        else if (random == 2) {
            return 'paper'
        }
        else (random == 3) {
            return 'scissor'
        }
    }



    function check(computer, user) {
        
        //Computer has rock
        if ( computer == 'rock' | user 'paper' ) {
            result = 'You won!'
        }
        else if ( computer == 'rock' | user 'rock' ) {
            result = 'It is a tie!'
        }
        else if ( computer == 'rock' | user 'scissor' ) {
            result = 'You lost!'
        }

        //Computer has paper
        else if ( computer == 'paper' | user 'scissor' ) {
            result = 'You won!'
        }
        else if ( computer == 'paper' | user 'paper' ) {
            result = 'It is a tie!'
        }
        else if ( computer == 'paper' | user 'rock') {
            result = 'You lost!'
        }

        //Computer has scissor
        else if ( computer == 'scissor' | user 'rock' ) {
            result = 'You won!'
        }
        else if ( computer == 'scissor' | user 'scissor' ) {
            result = 'It is a tie!'
        }
        else (
            result = 'You lost!'
        )
    }



}