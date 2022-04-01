import {useGetGame, usePutGame} from '../hooks/hookGame'

export default function ButtonGame({className , children}) {	
	const {mode} = useGetGame()
	const {setCounter, setMode, setTime} = usePutGame()
	
	function handleCounter() {
		if (children === "Start")
		{
			setMode("Click")
			setCounter(prevCounter => prevCounter + 1)
		}
		else if (children === "Reset")
		{
			setMode("Start")
			setTime(15)
			setCounter(0)
		}
	}

	return (
		<button className={className} onClick={handleCounter}>
			{children === "Start" ? mode : children}
		</button>
	)
}
