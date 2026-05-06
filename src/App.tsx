import { Calculator } from './components/Calculator'
import { RepoButton } from './components/RepoButton'

function App() {
  return (
    <main className="app">
      <Calculator />
      <RepoButton url="https://github.com/Chon211205/Calculator.git" />
    </main>
  )
}

export default App