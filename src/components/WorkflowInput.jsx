import { useState } from 'react'

export default function WorkflowInput({ onResult }) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async () => {
    if (!text.trim()) return
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/parse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })
      const data = await res.json()
      onResult?.(data)
    } catch (e) {
      console.error(e)
      alert('Failed to process workflow')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="input" className="relative py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg">Paste Workflow</h3>
          <textarea
            className="mt-3 w-full h-48 bg-black/20 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400/60"
            placeholder="Describe the current workflow..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={submit}
            disabled={loading}
            className="mt-4 px-5 py-3 rounded-xl bg-violet-500/80 hover:bg-violet-500 text-white disabled:opacity-60"
          >
            {loading ? 'Analyzing…' : 'Analyze'}
          </button>
        </div>
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg">Tips</h3>
          <ul className="mt-3 text-white/70 text-sm space-y-2 list-disc pl-5">
            <li>List steps, decisions, and actors.</li>
            <li>Mention approvals, calculations, and handoffs.</li>
            <li>We’ll generate before/after visualizations and agent suggestions.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
