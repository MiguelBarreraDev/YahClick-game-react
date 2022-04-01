import {useEffect} from 'react'
import {useGetGame, usePutGame} from '../hooks/hookGame'

let idInterval = null

export default function Timer({className, id}) {
	const {mode, time} = useGetGame()
	const {setTime} = usePutGame()

	function updateTime() {
		setTime(prevTime => prevTime - 1)
	}

	function effectTime() {
		if (mode === "Click") {idInterval = setInterval(updateTime, 200)}
	}

	useEffect(effectTime, [mode])
	
	if (time === 0 || mode === "Start") {clearInterval(idInterval)}

	return <span className={className} id={id}>{time}</span>
}
