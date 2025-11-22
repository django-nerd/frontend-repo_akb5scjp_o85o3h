import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 text-center px-6 py-16">
        <h1 className="text-5xl md:text-7xl font-semibold text-white drop-shadow-[0_0_24px_rgba(124,58,237,0.6)]">
          CogniFloe
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">
          Agentic Upgrade Middleware — translate any legacy workflow into a self-orchestrating agent architecture.
        </p>
        <a href="#input" className="inline-block mt-8 px-6 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/15 transition">
          Upload Workflow
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1020]" />
    </section>
  )
}
