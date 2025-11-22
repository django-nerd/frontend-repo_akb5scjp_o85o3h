import { useState } from 'react'
import Hero from './components/Hero'
import WorkflowInput from './components/WorkflowInput'
import Visualizations from './components/Visualizations'

function App() {
  const [result, setResult] = useState(null)

  return (
    <div className="min-h-screen bg-[#0b1020] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.15),transparent_40%)]" />
      <Hero />
      <main className="relative z-10">
        <WorkflowInput onResult={setResult} />
        <Visualizations result={result} />
        <Footer />
      </main>
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center text-white/60">
      Built with a glassy, futuristic aesthetic. Drag, explore, and iterate.
    </footer>
  )
}

export default App
