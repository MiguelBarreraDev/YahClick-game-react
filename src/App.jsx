import Header from './components/Header.jsx'
import MainGame from './components/MainGame.jsx'
import {ContextCounter} from './context/ContextCounter'

export default function App() {
	return (
		<>
			<ContextCounter>
				<Header/>
				<MainGame/>
			</ContextCounter>
		</>
	)
}
