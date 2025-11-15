import { useEffect, useState } from 'react'

/**
 * This function creates the result section and handles the logic for determining the outcome of a game.
 * @param {properties} param0 These are the properties available to pass to the ResultDisplay Component. 
 * @returns The Result section of the page.
 */
function ResultDisplay({ playersSelection, setPlayerSelection, computersSelection, setComputerSelection, setNewGame }) {
    let [ result, setResult ] = useState("");

    /**
     * The function to determine the winner of the game.
     */
    function determineWinner() {
        if(playersSelection === "") {
            return;
        }
        else if (playersSelection === computersSelection) {
            setResult("It's a tie!");
            
        }
        else if (playersSelection === "rock") {
            if (computersSelection === "scissors") {
                setResult("You win!");
                
            }
            else if (computersSelection === "paper") {
                setResult("You lose!");
                
            }
        }
        else if (playersSelection === "paper") {
            if (computersSelection === "scissors") {
                setResult("You lose!");
                
            }
            else if (computersSelection === "rock") {
                setResult("You win!");
                
            }
        }
        else if (playersSelection === "scissors") {
            if (computersSelection === "rock") {
                setResult("You lose!");
                
            }
            else if (computersSelection === "paper") {
                setResult("You win!");
                
            }
        }
    }

    /**
     * This is the callback for the play again button handles clearing the board and resetting results.
     */
    const playAgain = () => {
        setResult("");
        setPlayerSelection("");
        setComputerSelection("");
        setNewGame(prev => prev + 1);
    }

    // Determine the winner when computerSelection is changed.
    useEffect(determineWinner, [computersSelection]);
    
    return (
        <section id="outcome">
            <p>Result: <span id="result"> { result }</span></p>
            <button id="replay" onClick={ playAgain }>Play again</button>
        </section>
    )
}

export default ResultDisplay;