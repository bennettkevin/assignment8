import { useState } from 'react'
import PlayerThrow from './PlayerThrow'
import ComputerThrow from './ComputerThrow'
import ResultDisplay from './ResultDisplay'

/**
 * Function to create the app component.
 * @returns The main app component of the page containing all of the components for the rock paper scissors game.
 */
function App() {
  // States to hold game information and monitor new game status.
  let [ playersSelection, setPlayerSelection ] = useState("");
  let [ computersSelection, setComputerSelection ] = useState("");
  let [ newGame, setNewGame ] = useState(0);

  return (
    <div id="app">
      <PlayerThrow setPlayersSelection={ setPlayerSelection } newGame={ newGame }/>
      <ComputerThrow playersSelection={ playersSelection } setComputerSelection={ setComputerSelection } newGame={ newGame }/>
      <ResultDisplay playersSelection={ playersSelection } setPlayerSelection={ setPlayerSelection } computersSelection={ computersSelection } setComputerSelection={ setComputerSelection } newGame={ newGame } setNewGame={ setNewGame } />
    </div>
  )
}

export default App
