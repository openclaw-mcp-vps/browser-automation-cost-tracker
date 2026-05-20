export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Overpaying for{' '}
          <span className="text-[#58a6ff]">Browser Automation</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Aggregate costs across Puppeteer, Playwright, and cloud browser services.
          Instantly see which provider is cheapest for your actual usage patterns.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-base"
        >
          Start Tracking — $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { title: 'Multi-Service Aggregation', desc: 'Connect Browserless, Apify, ScrapingBee, and self-hosted instances in one dashboard.' },
          { title: 'Cost Breakdown', desc: 'Per-run, daily, and monthly cost breakdowns with trend charts and anomaly alerts.' },
          { title: 'Smart Recommendations', desc: 'AI-powered suggestions on when to switch providers based on your workload.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2 text-sm">{f.title}</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited service connections',
              'Historical data up to 12 months',
              'Cost alerts & anomaly detection',
              'CSV & JSON export',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which browser automation services are supported?',
              a: 'We support Browserless, Apify, ScrapingBee, Bright Data, and self-hosted Puppeteer/Playwright setups via our lightweight agent.',
            },
            {
              q: 'How does the cost tracking work?',
              a: 'We connect to each service API using your read-only API keys to pull usage and billing data. Nothing is executed on your behalf.',
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes, cancel anytime from your billing portal. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Browser Automation Cost Tracker. All rights reserved.
      </footer>
    </main>
  )
}
