'use client'
import { useState, useEffect, useRef } from 'react';
import useScrollAnimation from '../hooks/animation';
const allCommentsByTab = {
  "1Y": [
    { id: 1, author: "InvestorAnalyst_2024", date: "Feb 10, 2026", content: "After analyzing the trading patterns, I noticed unusual volume spikes that don't correlate with any news or fundamental changes. The promotional emails I've been receiving about this stock seem coordinated and follow classic pump patterns.", sentiment: "negative", likes: 342, replies: 89 },
    { id: 2, author: "MarketWatcher_Pro", date: "Feb 8, 2026", content: "Looking at the SEC filings, there are several red flags including related party transactions and frequent changes in auditors. New investors should perform thorough due diligence before considering any position.", sentiment: "warning", likes: 567, replies: 134 },
    { id: 3, author: "PennyStockResearcher", date: "Feb 5, 2026", content: "The company's promotional campaigns on social media appear to follow classic pump patterns. Volume increased 500% before any material news was released. This is a textbook example of what to watch out for.", sentiment: "negative", likes: 891, replies: 267 },
    { id: 4, author: "ValueInvestor_88", date: "Jan 28, 2026", content: "Their latest quarterly earnings showed a 40% miss on revenue projections with no clear path to profitability. Management guidance keeps getting revised downward each quarter.", sentiment: "negative", likes: 423, replies: 97 },
    { id: 5, author: "TechStockTracker", date: "Jan 15, 2026", content: "Insider selling has accelerated significantly over the past 3 months. When executives sell while promoters push the stock to retail investors, the writing is usually on the wall.", sentiment: "warning", likes: 654, replies: 188 },
    { id: 6, author: "FinancialDetective", date: "Dec 22, 2025", content: "I traced the promotional network back to several shell companies with offshore addresses. Classic boiler room setup. The SEC has previously investigated similar structures from the same promoters.", sentiment: "negative", likes: 778, replies: 221 },
    { id: 7, author: "RiskAnalyst_NYC", date: "Dec 10, 2025", content: "Short interest has climbed to 34% of float. That level of institutional skepticism combined with retail FOMO is a recipe for extreme volatility. Tread very carefully here.", sentiment: "warning", likes: 512, replies: 143 },
    { id: 8, author: "AlgoTrader_X", date: "Nov 30, 2025", content: "My momentum algorithm flagged this one for a potential reversal. The artificial volume propping up price is unsustainable. Looking at options flow, smart money is positioned heavily on the bearish side.", sentiment: "negative", likes: 389, replies: 76 },
    { id: 9, author: "CorporateGovernance_Watch", date: "Nov 12, 2025", content: "Third auditor change in 18 months. This is a massive red flag. Legitimate companies don't cycle through major auditing firms at this rate unless there are serious disagreements over accounting practices.", sentiment: "negative", likes: 934, replies: 312 },
    { id: 10, author: "PatternTrader_2025", date: "Oct 28, 2025", content: "This stock's chart looks identical to three other penny stocks that crashed 90%+ after the promotional period ended. The distribution phase appears to be underway as promoters quietly exit positions.", sentiment: "negative", likes: 1204, replies: 445 },
  ],
  "6M": [
    { id: 1, author: "QuarterlyReviewer", date: "Feb 10, 2026", content: "Six months of data paints a clear picture: this stock only moves on paid promotion, not fundamentals. Every spike correlates with a newsletter blast, not earnings or product news.", sentiment: "negative", likes: 287, replies: 64 },
    { id: 2, author: "SmallCapSkeptic", date: "Feb 2, 2026", content: "The 6-month chart shows a classic stair-step manipulation pattern. Each manufactured rally distributes shares to new buyers at progressively higher prices before the inevitable decline.", sentiment: "negative", likes: 445, replies: 102 },
    { id: 3, author: "MidYearAnalyst", date: "Jan 20, 2026", content: "Revenue for the last two quarters combined doesn't justify even 10% of current market cap. We're looking at a valuation that's entirely based on narrative rather than any financial reality.", sentiment: "warning", likes: 623, replies: 167 },
    { id: 4, author: "SEC_Watcher_Pro", date: "Jan 5, 2026", content: "An SEC comment letter from November asked pointed questions about revenue recognition. Management's vague responses and 30-day extension requests are not confidence inspiring.", sentiment: "negative", likes: 834, replies: 256 },
    { id: 5, author: "DeepDive_Research", date: "Dec 18, 2025", content: "I spent a week verifying their customer claims. Of the 12 'enterprise clients' listed in their deck, 8 appear to be inactive shell companies. This needs regulatory attention.", sentiment: "negative", likes: 1122, replies: 398 },
    { id: 6, author: "BondTrader_Alpha", date: "Dec 5, 2025", content: "Their convertible note terms are predatory to common shareholders. The dilution math at current conversion prices would wipe out nearly 60% of retail holders' value.", sentiment: "warning", likes: 567, replies: 134 },
    { id: 7, author: "OptionsFlow_Pro", date: "Nov 22, 2025", content: "Unusual put activity 2 weeks before each significant decline. Someone with advanced knowledge is consistently hedging before negative catalysts. This pattern has repeated 4 times now.", sentiment: "negative", likes: 743, replies: 211 },
    { id: 8, author: "ForensicAccounting_1", date: "Nov 8, 2025", content: "Cash burn rate versus stated runway doesn't add up. Based on public filings, they should have run out of operating capital 6 weeks ago unless there's undisclosed financing.", sentiment: "negative", likes: 891, replies: 278 },
    { id: 9, author: "RetailInvestorAlert", date: "Oct 25, 2025", content: "I got burned on their last secondary offering at $4.20. They priced a new offering 3 weeks later at $1.80. Management knew the stock was overvalued when they took retail money.", sentiment: "negative", likes: 1456, replies: 534 },
    { id: 10, author: "WallStreetWatch_2025", date: "Oct 12, 2025", content: "The revolving door of CFOs — three in 18 months — is a massive warning signal. Financial executives don't leave companies this frequently unless there are serious issues they don't want their name attached to.", sentiment: "warning", likes: 987, replies: 345 },
  ],
  "3M": [
    { id: 1, author: "Q4_Analyst_Pro", date: "Feb 11, 2026", content: "The Q4 earnings call transcript reveals management dodging every direct question about cash position. Analysts on the call visibly frustrated by non-answers. This lack of transparency is unacceptable.", sentiment: "negative", likes: 234, replies: 58 },
    { id: 2, author: "ShortTermTrader_99", date: "Feb 7, 2026", content: "Three months of watching this stock and the pattern is undeniable: promotional emails every 2 weeks, stock spikes 20-40%, insiders sell into strength, stock returns to lows. Rinse and repeat.", sentiment: "negative", likes: 512, replies: 143 },
    { id: 3, author: "RecentIPO_Watch", date: "Jan 30, 2026", content: "Their latest partnership announcement was with a company that has no website, no employees on LinkedIn, and was incorporated 2 weeks before the press release. This is fabricated news.", sentiment: "negative", likes: 789, replies: 234 },
    { id: 4, author: "CurrentEvents_Trader", date: "Jan 22, 2026", content: "Volume dried up completely after the latest promotion ended. 90-day average volume down 78%. When the artificial demand goes away, there are no real buyers left at these prices.", sentiment: "warning", likes: 345, replies: 87 },
    { id: 5, author: "JanuaryEffect_2026", date: "Jan 10, 2026", content: "The January tax-loss selling pressure is revealing the true price discovery here. Without promoter support, the stock is finding support near penny territory where it belongs fundamentally.", sentiment: "negative", likes: 678, replies: 189 },
    { id: 6, author: "FreshEyes_Research", date: "Dec 28, 2025", content: "Coming to this stock fresh after a friend's recommendation. Spent the weekend researching and found 47 nearly identical promotional emails sent to different lists. All roads lead to the same offshore promoter.", sentiment: "negative", likes: 923, replies: 312 },
    { id: 7, author: "YearEnd_Recap_2025", date: "Dec 20, 2025", content: "Year-end recap: stock promoted 6 times in 2025, each time ending lower than where it started. Total return for buy-and-hold investors: -71%. Promoters made millions. Retail lost millions.", sentiment: "negative", likes: 1678, replies: 567 },
    { id: 8, author: "NewsFeed_Analyst", date: "Dec 12, 2025", content: "Three press releases in one week with no substance. 'Exploring strategic alternatives,' 'evaluating partnership opportunities,' 'considering market expansion.' These are filler PRs designed purely to generate promotional interest.", sentiment: "warning", likes: 445, replies: 112 },
    { id: 9, author: "FundamentalsFirst_88", date: "Dec 5, 2025", content: "Price to sales ratio of 847x with declining revenue. I've been covering micro-caps for 12 years and this is among the most egregiously overvalued situations I've encountered. No fundamental basis whatsoever.", sentiment: "negative", likes: 1234, replies: 423 },
    { id: 10, author: "EndOfYear_Watch", date: "Nov 28, 2025", content: "Management just filed to register 40M new shares for sale while telling retail investors the stock is 'undervalued.' The disconnect between what they say and what they do is stunning.", sentiment: "negative", likes: 1567, replies: 489 },
  ],
  "Recent": [
    { id: 1, author: "TodayTrader_Live", date: "Feb 13, 2026", content: "Woke up to another promotional email this morning. Same boilerplate claims, new subject line. They've sent 14 of these in the past 30 days. The frequency suggests desperation to maintain volume.", sentiment: "negative", likes: 156, replies: 34 },
    { id: 2, author: "LiveMarket_Watch", date: "Feb 12, 2026", content: "Yesterday's 'positive news' was a recycled press release from 8 months ago with the dates changed. I have both saved. This is securities fraud territory and I've filed a tip with the SEC.", sentiment: "negative", likes: 892, replies: 267 },
    { id: 3, author: "ThisWeek_Research", date: "Feb 11, 2026", content: "Real-time analysis: bid-ask spreads widening dramatically suggesting market makers are pulling back. When liquidity providers step away from a promoted stock, it's a very bad omen for near-term price action.", sentiment: "warning", likes: 423, replies: 98 },
    { id: 4, author: "LatestNews_Analyst", date: "Feb 10, 2026", content: "Just checked — the 'CEO interview' they linked in today's email was recorded 11 months ago. They're recycling old content to new email lists who don't know the history. Classic long-con tactics.", sentiment: "negative", likes: 634, replies: 178 },
    { id: 5, author: "RealTime_Trader_2026", date: "Feb 10, 2026", content: "Watching the tape right now. Every uptick is being sold into aggressively. Distribution pattern is unmistakable. Someone with a very large position is liquidating carefully to avoid breaking the price prematurely.", sentiment: "warning", likes: 789, replies: 234 },
    { id: 6, author: "Breaking_Research", date: "Feb 9, 2026", content: "BREAKING: I found the same promotional copy used for TRNR was used word-for-word for two other pump-and-dump schemes in 2023 and 2024, both of which collapsed 95%+. Same promoter network.", sentiment: "negative", likes: 2134, replies: 678 },
    { id: 7, author: "FreshData_Daily", date: "Feb 9, 2026", content: "Short borrow rate just hit 145% annualized. That's an extreme cost for bears to maintain positions, which explains why this hasn't collapsed faster. But it also means when it goes, it will go very fast.", sentiment: "warning", likes: 567, replies: 145 },
    { id: 8, author: "DailyScanner_Pro", date: "Feb 8, 2026", content: "Alert triggered: unusual options positioning with a massive cluster of put contracts expiring in 3 weeks at the $0.50 strike. Someone is paying a lot for downside protection in the very near term.", sentiment: "negative", likes: 891, replies: 289 },
    { id: 9, author: "MarketOpen_2026", date: "Feb 7, 2026", content: "Pre-market volume already 3x normal with no news. This is the hallmark of coordinated buying at the open to trigger momentum algos and FOMO buying from retail. By close, those early buyers will be selling.", sentiment: "negative", likes: 712, replies: 198 },
    { id: 10, author: "WeeklyWrap_Analyst", date: "Feb 6, 2026", content: "Weekly summary: 4 meaningless press releases, 8 promotional emails, 0 substantive business updates, -12% net price action despite the promotion spend. The return on manipulation is diminishing rapidly.", sentiment: "negative", likes: 1345, replies: 412 },
  ],
};

const INITIAL_SHOW = 5;

export const  CommunitySection = () => {

 
  const [activeFilter, setActiveFilter] = useState("1Y");
  const [showAll, setShowAll] = useState(false);
  const collapseRef = useRef(null);

  const filters = ["1Y", "6M", "3M", "Recent"];
// --- Mock hooks (replace with your actual implementations) ---
const useScrollAnimation = () => {
  return { ref: null, isVisible: true };
};
 const { ref, isVisible } = useScrollAnimation();
// --- Mock Icons (replace with your actual Icons component) ---
const Icons = {
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Heart: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Chat: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  AlertCircle: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  ChevronUp: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  ),
};
  const filterLabel = (f) =>
    f === "1Y" ? "Past 1 Year" :
    f === "6M" ? "Past 6 Months" :
    f === "3M" ? "Past 3 Months" : "Recent";

  // Reset to collapsed when switching tabs
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const allComments = allCommentsByTab[activeFilter];
  const visibleComments = showAll ? allComments : allComments.slice(0, INITIAL_SHOW);
  const hiddenCount = allComments.length - INITIAL_SHOW;

  return (
    <section id="community" className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          {/* Section Header */}
         <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <span className="demo-badge mb-4 inline-block">Simulated Comments</span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Investor </span>
              <span className="gradient-text">Discussions</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8">
              See what the community is saying about NASDAQ: TRNR
            </p>

            {/* Stats Badge */}
        <div className="flex justify-center">
  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 glass-card px-6 sm:px-8 py-4 rounded-2xl w-fit max-w-md">
    
    <div className="text-center sm:text-left">
      <p className="text-3xl sm:text-4xl font-bold gradient-text">
        5,247+
      </p>
      <p className="text-xs sm:text-sm text-gray-500">
        Comments (Past 1 Year)
      </p>
    </div>

    <div className="hidden sm:block w-px h-12 bg-white/10" />

    <div className="text-center sm:text-left">
      <p className="text-3xl sm:text-4xl font-bold text-red-400">
        87%
      </p>
      <p className="text-xs sm:text-sm text-gray-500">
        Negative Sentiment
      </p>
    </div>

  </div>
</div>

          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/50"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30"
                }`}
              >
                {filterLabel(filter)}
              </button>
            ))}
          </div>

          {/* Comment Cards */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-3 sm:px-4">
  {visibleComments.map((comment, index) => {
    const isNewlyRevealed = index >= INITIAL_SHOW;

    return (
      <div
        key={`${activeFilter}-${comment.id}`}
        className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl hover-lift transition-all"
        style={{
          animationDelay: `${
            isNewlyRevealed
              ? (index - INITIAL_SHOW) * 0.08
              : index * 0.15
          }s`,
          animation: isNewlyRevealed
            ? "fadeSlideIn 0.4s ease forwards"
            : undefined,
        }}
      >
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`w-8 h-8 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-sm sm:text-lg font-bold ${
                comment.sentiment === "negative"
                  ? "bg-gradient-to-br from-red-500/30 to-pink-500/30 text-red-400"
                  : "bg-gradient-to-br from-orange-500/30 to-yellow-500/30 text-orange-400"
              }`}
            >
              {comment.author.charAt(0)}
            </div>

            <div>
              <p className="font-semibold text-white text-base sm:text-lg">
                {comment.author}
              </p>

              <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
                <Icons.Clock />
                {comment.date}
              </p>
            </div>
          </div>

          {/* TAG */}
          <span
            className={`self-start text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium ${
              comment.sentiment === "negative"
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
            }`}
          >
            {comment.sentiment === "negative" ? "Bearish" : "Cautious"}
          </span>
        </div>

        {/* CONTENT */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          {comment.content}
        </p>

        {/* ACTIONS */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-2 hover:text-red-400 transition-colors cursor-pointer">
            <Icons.Heart />
            {comment.likes.toLocaleString()} likes
          </span>

          <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
            <Icons.Chat />
            {comment.replies} replies
          </span>
        </div>
      </div>
    );
  })}
</div>


          {/* Show More / Show Less Button */}
          <div className="mt-8 flex flex-col items-center gap-3 max-w-4xl mx-auto">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300
                bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                border border-white/10 hover:border-cyan-500/40
                text-gray-300 hover:text-cyan-400
                hover:shadow-[0_0_24px_rgba(6,182,212,0.15)]"
            >
              <span>
                {showAll
                  ? "Show Less"
                  : `Show ${hiddenCount} More Comment${hiddenCount !== 1 ? "s" : ""}`}
              </span>
              <span className="transition-transform duration-300 group-hover:scale-110">
                {showAll ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
              </span>
            </button>

            {/* Progress indicator */}
            <p className="text-xs text-gray-600">
              Showing {visibleComments.length} of {allComments.length} comments for {filterLabel(activeFilter)}
            </p>
          </div>

          {/* Info Badge */}
          {/* <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-xl">
              <Icons.AlertCircle />
              <p className="text-sm text-gray-400">
                Showing {visibleComments.length} of 5,247 simulated comments for demonstration purposes
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Keyframe animation for newly revealed cards */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};