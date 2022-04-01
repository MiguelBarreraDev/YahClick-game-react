import React, {useEffect, useState} from 'react'
const Context = React.createContext({})

export function ContextCounter({children}) {
	const [counter, setCounter] = useState(0)
	const [mode, setMode] = useState("Start")
	const [time, setTime] = useState(15)
	
	return (
		<Context.Provider value={{counter, setCounter, mode, setMode, time, setTime}}>{children}</Context.Provider>
	)
}

export default Context
