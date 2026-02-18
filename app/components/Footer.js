'use client'
import Link from 'next/link';
export const Footer = () => {

  const Icons = {
    Warning: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),

    Shield: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  };

  return (
    <footer className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Disclaimer Card */}
        <div className="glass-card p-10 rounded-3xl mb-16">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <Icons.Warning />
            </div>
            <div>
              <h4 className="font-bold text-yellow-400 text-xl mb-3">
                Disclaimer
              </h4>
              <p className="text-gray-400 leading-relaxed text-md lg:text-lg">
                This platform is designed to{" "}
                <strong className="text-white">
                  increase investor awareness by highlighting statistical
                  patterns, risk indicators, and market behavior insights.
                </strong>{" "}
                The data, examples, and commentary presented are for educational
                and informational purposes only. Nothing on this website
                constitutes financial advice, investment recommendations, or
                factual claims about any specific company. Independent research
                and professional consultation are strongly recommended.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Icons.Shield />
            </div>
            <div>
              <Link href="/" className="text-2xl font-bold gradient-text">
                Invest in Penny
              </Link>
              <p className="text-gray-500">Market Risk Intelligence</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span>© 2026 Educational Concept</span>
            <span>•</span>
            <span>Not Financial Advice</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
