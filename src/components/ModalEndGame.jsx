import '../styles/ModalEndGame.css'
import {usePutGame} from '../hooks/hookGame'

export default function ModalGameOver({score}) {
	const {setMode, setTime, setCounter} = usePutGame()

	function restartGame() {
		setMode("Start")
		setTime(15)
		setCounter(0)
	}

	return (
		<div className='back-modal'>
			<main className='main modal'>
				<div className='container-score'>
					<h4 className='score-title'>Score</h4>
					<p className='score-value'>{score}</p>
				</div>
				<button className="modal-button" onClick={restartGame}>
					Try Again
				</button>
			</main>
		</div>
	)
}
