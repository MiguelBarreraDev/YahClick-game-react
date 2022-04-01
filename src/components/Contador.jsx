import ButtonGame from './ButtonGame'
import {useGetGame} from '../hooks/hookGame'
import '../styles/Contador.css'

export default function Contador () {
	const {counter} = useGetGame()

	return (
		<main className='main'>
			<div className='main-counter'>{counter}</div>
			<ButtonGame className="main-button button-reset" children="Reset"/>
			<ButtonGame className="main-button button-start" children="Start"/>
		</main>
	);
}
