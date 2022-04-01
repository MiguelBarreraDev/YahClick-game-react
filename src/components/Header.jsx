import '../styles/Header.css'
import logo from '../logo.svg'
import Timer from './Timer'

export default function Header() {
	return (
		<>
			<header className="header">
				<img className="header-logo" src={logo}/>
				<h1 className="header-title">YahClick!</h1>
				<Timer className="header-timer"/>
			</header>
		</>
	)
}
