import { useEffect, useState } from 'react'

/**
 * Function to create the component for player throw section of the page.
 * @param {properties} param0 These are the properties available to pass to the PlayerThrow Component. 
 * @returns The Player throw section for the page.
 */
function PlayerThrow({ setPlayersSelection, newGame }) {
    const playerChoice = [
        { name: "rock", src: "../../public/images/rock.PNG" },
        { name: "paper", src: "../../public/images/paper.PNG" },
        { name: "scissors", src: "../../public/images/scissors.PNG" }
    ];

    // State to hold the currently selected image used for rerendering images with new styles.
    let [ selected, setSelected ] = useState("NULL");

    /**
     * Function to determine what the player selection.
     * @param {click} event The event so the function knows which image was clicked.
     */
    const playerSelection = (event) => {
        const playersChoice = event.target;

        setSelected(playersChoice.getAttribute("data-name"));

        setPlayersSelection(playersChoice.getAttribute("data-name"));

    }

    /**
     * Function to determine if the current image being rendered is the one that the player selected or not.
     * @param {boolean} currentSelection Boolean for if the current selected name is the same as the name of the current image being rendered. 
     * @returns 
     */
    const isSelected = (currentSelection) => {
        if(currentSelection){
            return "selected";
        }
        else {
            return "";
        }
    }

    // Reset selected to default value when a new game is started.
    useEffect(() => {
        setSelected("NULL");
    }, [newGame])
    
    // Creates each image for the player to choose from before populating to the component.
    const playerSelections = playerChoice.map(playerChoice =>
        <img key={playerChoice.name} className={isSelected(selected === playerChoice.name)} data-name={playerChoice.name} src={playerChoice.src} alt={playerChoice.name} onClick={playerSelection}></img>
    );

    return (
        <section id="player-throw">
            { playerSelections }
        </section>
    );
}

export default PlayerThrow;