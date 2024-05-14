import './App.module.css'
import './global.css'
import { Header } from './components/Header/Header'
import { Tasks } from './components/Tasks/Tasks'

function App() {

  return (
    <div>
      <Header/>
      <Tasks/>
    </div>
  )
}

export default App