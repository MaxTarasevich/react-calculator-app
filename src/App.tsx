import Key from './components/key'
import Switcher from './components/switcher'
import './styles/index.scss'

const keys = [
  '7',
  '8',
  '9',
  'DEL',
  '4',
  '5',
  '6',
  '+',
  '1',
  '2',
  '3',
  '-',
  '.',
  '0',
  '/',
  'x',
  'RESET',
  '=',
]

function App() {
  return (
    <main className="calculator theme1">
      <div className="container">
        <div className="panel">
          <span>calc</span>
          <span>theme</span>

          <Switcher />
        </div>
        <div className="screen">3.9998554521</div>
        <div className="keys">
          {keys.map((key) => (
            <Key key={key} CalcKey={key} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
