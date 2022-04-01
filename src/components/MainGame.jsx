import ModalEndGame from './ModalEndGame'
import Contador from './Contador'
import {useGetGame} from '../hooks/hookGame'

export default function MainGame () {
	const {time, counter} = useGetGame()
	return time === 0 ? <ModalEndGame score={counter}/> : <Contador/>
}
