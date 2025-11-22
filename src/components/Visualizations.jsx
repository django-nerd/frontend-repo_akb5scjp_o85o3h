import { motion } from 'framer-motion'

export default function Visualizations({ result }) {
  if (!result) return null
  const { legacy_flowchart_json, agent_graph, automated_percentage, time_saving_estimate, scalability_score } = result

  return (
    <section className="py-12 space-y-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <Panel title="Legacy Workflow">
          <MiniFlow data={legacy_flowchart_json} color="from-rose-500/30 to-amber-500/30" />
        </Panel>
        <Panel title="Agentic Architecture">
          <MiniFlow data={agent_graph} color="from-violet-500/30 to-cyan-500/30" />
        </Panel>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <Metric label="Automation" value={automated_percentage} />
        <Metric label="Time Saved" value={time_saving_estimate} />
        <Metric label="Scalability" value={scalability_score} />
      </div>
    </section>
  )
}

function Panel({ title, children }) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      {children}
    </div>
  )
}

function Metric({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center">
      <div className="text-white/70 text-sm">{label}</div>
      <div className="text-3xl font-semibold text-white mt-2">{value}</div>
    </div>
  )
}

function MiniFlow({ data, color }) {
  const nodes = data?.nodes || data?.steps?.map(s => ({ id: s.id, label: s.text })) || []
  const edges = data?.edges || []
  return (
    <div className={`relative h-72 rounded-xl bg-gradient-to-br ${color} p-4`}> 
      <div className="absolute inset-0 rounded-xl backdrop-blur-xl bg-black/30 border border-white/10" />
      <div className="relative grid grid-cols-3 gap-4 h-full">
        <div className="col-span-1 space-y-3 overflow-auto p-2">
          {nodes.slice(0, 10).map((n, idx) => (
            <motion.div key={n.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className="px-3 py-2 rounded-lg bg-white/10 text-white/90 text-sm">
              {n.label}
            </motion.div>
          ))}
        </div>
        <div className="col-span-2 p-2">
          <div className="h-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center text-white/60 text-sm">
            {edges.length} connections
          </div>
        </div>
      </div>
    </div>
  )
}
