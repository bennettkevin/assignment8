import { useEffect, useState } from 'react'

/**
 * Function to create the component for computer throw section of the page.
 * @param {properties} param0 These are the properties available to pass to the ComputerThrow Component. 
 * @returns The Computer throw section for the page.
 */
function ComputerThrow({ playersSelection, setComputerSelection, newGame }) {
    const computerChoice = [
        { name: "rock", src: "images/rock.PNG" },
        { name: "paper", src: "images/paper.PNG" },
        { name: "scissors", src: "images/scissors.PNG" },
        { name: "question", src: "images/question-mark.PNG" }
    ];

    let [index, setIndex] = useState(3);

    // Start cycling images and determine the computers selection when playerSelection is changed.
    useEffect(() => {
        if (playersSelection === "") {
            return;
        }
        else {
            const interval = setInterval(() => {
                setIndex(prev => prev < computerChoice.length - 2 ? prev + 1 : 0);
            }, 500);

            const timeout = setTimeout(() => {
                clearInterval(interval);

                let randomIndex = Math.floor(Math.random() * 3);
                setIndex(randomIndex);
                setComputerSelection(computerChoice[randomIndex].name);
            }, 3000);

            return (() => {

                clearTimeout(timeout);
            })
        }
    }, [playersSelection]);

    // Reset the image to a question mark when we start a new game.
    useEffect(() => {
        setIndex(3);
    }, [newGame])


    return (
        <section id="player-throw">
            <img className="computer" src={computerChoice[index].src} alt={computerChoice[index].name}></img>
        </section>
    );
}

export default ComputerThrow;