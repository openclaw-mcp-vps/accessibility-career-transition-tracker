export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm font-medium">
          For developers navigating vision loss
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Your coding career{" "}
          <span className="text-[#58a6ff]">doesn&apos;t end</span>
          {" "}when your sight changes.
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          AccessPath helps developers with vision loss track transferable skills,
          discover screen-reader-friendly tools, and connect with mentors who&apos;ve
          walked the same path.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No lock-in.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🗂", title: "Skill Tracker", desc: "Map your existing dev skills to accessible workflows and new roles." },
          { icon: "🔧", title: "Tool Suggestions", desc: "Curated screen readers, IDEs, and extensions vetted by blind devs." },
          { icon: "🤝", title: "Mentor Matching", desc: "Connect 1-on-1 with developers who made the same transition." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Full skill tracking dashboard",
              "Unlimited tool recommendations",
              "Mentor matching (up to 3 active)",
              "Job board for inclusive employers",
              "Screen-reader optimized UI"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Is AccessPath itself accessible?",
              a: "Yes. The entire app is built to WCAG 2.1 AA standards, tested with NVDA, JAWS, and VoiceOver. Every feature works without a mouse."
            },
            {
              q: "Who are the mentors?",
              a: "Vetted developers who have personally navigated vision loss mid-career. They volunteer their time and are matched based on your tech stack and goals."
            },
            {
              q: "Can I cancel anytime?",
              a: "Absolutely. Cancel from your account settings in one click. No questions, no fees, no lock-in period."
            }
          ].map((item) => (
            <div key={item.q} className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#6e7681]">
        <p>&copy; {new Date().getFullYear()} AccessPath. Built for the blind dev community.</p>
      </footer>
    </main>
  );
}
