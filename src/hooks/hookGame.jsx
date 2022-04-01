import {useContext} from 'react'
import Context from '../context/ContextCounter'

export function useGetGame() {
	let result = {}
	let context = useContext(Context)

	for (let key in context) {
		if (!(/^set.*$/.test(key)))
			result[key] = context[key]
	}
	return result
}

export function usePutGame() {
	let context = useContext(Context)
	let result = {}

	for (let key in context) {
		if ((/^set.*$/.test(key)))
			result[key] = context[key]
	}
	return result
}
