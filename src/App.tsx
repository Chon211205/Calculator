import { Calculator } from './components/Calculator'
import { RepoButton } from './components/RepoButton'

function App() {
  return (
    <main className="app">
      <h1>Calculadora</h1>
      <Calculator />
      <RepoButton url="https://github.com/Chon211205/Calculator.git" />
    </main>
  )
}

export default App