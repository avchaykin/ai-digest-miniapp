import type { DigestItem } from '../types/digest'

export const mockWeek: DigestItem[] = [
  {
    id: 'week-1',
    headline: 'OpenAI raises $40B at $300B valuation — largest private tech funding round in history',
    sourceName: 'Financial Times',
    sourceUrl: 'https://ft.com',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    topic: 'industry',
    perspectives: {
      developer: {
        summary: 'The funding round means OpenAI has runway to massively expand compute, hire top researchers, and keep API prices competitive. Developer-facing implications: expect continued model improvements and potential credits program expansion.',
        keyPoints: [
          'Primary use: compute infrastructure — significant cluster expansion planned',
          'Hiring surge in research and engineering expected — talent market will tighten',
          'API pricing likely to remain aggressive to capture developer platform share',
          'Investor pressure will accelerate product GA timelines',
          'Increases likelihood of on-premise/dedicated deployment options for enterprise',
        ],
        callToAction: 'Lock in annual API contracts now if you\'re volume-sensitive — pricing is unlikely to stay this favorable as OpenAI targets profitability.',
      },
      product_manager: {
        summary: 'The valuation signals market conviction that AI is not a bubble. For product teams, this means the AI tooling ecosystem will keep expanding rapidly and long-term API availability from major providers is de-risked.',
        keyPoints: [
          'Validates AI-first product strategies to skeptical stakeholders and boards',
          'OpenAI\'s focus on enterprise platform will bring more reliability and SLA commitments',
          'Competitive pressure from this funding will accelerate capability improvements across all providers',
          'Consolidation risk: well-funded incumbents may acquire key AI tooling companies',
          'Investment signals that workflow automation and AI agents are the next major product wave',
        ],
        callToAction: 'Use this valuation milestone to reinforce the business case for AI investment in your roadmap planning — the market has definitively validated the space.',
      },
      top_manager: {
        summary: 'A $300B valuation for a company generating ~$5B ARR implies a 60x revenue multiple — the market is pricing in AI dominance across multiple industries. This changes competitive calculus for every sector using knowledge work.',
        keyPoints: [
          '60x revenue multiple reflects expected total addressable market capture, not current revenue',
          'Microsoft\'s 49% stake makes this effectively a bet on Azure AI platform dominance',
          'Signals to all industry verticals: AI transformation spend is a strategic imperative, not optional',
          'Funding arms race means capability improvements will accelerate for 2-3 more years',
          'Every non-AI-native competitor in knowledge work faces an existential question now',
        ],
        callToAction: 'Schedule a board briefing on AI competitive exposure — the window for "wait and see" strategies has definitively closed.',
      },
    },
  },
  {
    id: 'week-2',
    headline: 'Meta releases Llama 4 Scout: 17B active parameter MoE model that beats Llama 3 70B with 10x less compute',
    sourceName: 'Meta AI',
    sourceUrl: 'https://ai.meta.com',
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    topic: 'open_source',
    perspectives: {
      developer: {
        summary: 'Llama 4 Scout uses a Mixture-of-Experts architecture: 109B total parameters but only 17B active per token. The result is Llama 3 70B quality at ~10x lower inference cost. It runs on 2x RTX 4090s at 30 tok/s.',
        keyPoints: [
          'MoE: 109B total, 17B active — quality scales with total params, cost scales with active params',
          'Beats Llama 3 70B on MMLU, HumanEval, and GSM8K benchmarks',
          'Quantized to 4-bit: fits on 2x 24GB VRAM cards (~50 tok/s)',
          '128K context window native',
          'Available on HuggingFace under Llama 4 Community License (commercial use OK)',
        ],
        callToAction: 'If you\'re running Llama 3 70B in production, benchmark Llama 4 Scout — you\'ll likely get better quality at 1/10th the inference cost.',
      },
      product_manager: {
        summary: 'Llama 4 Scout collapses the cost curve for on-premise AI. Products that were economically impractical at 70B inference costs can now be built on hardware most companies already own. This is a step-change for AI product economics.',
        keyPoints: [
          'Enables AI features in products where per-query cost was previously prohibitive',
          'On-premise deployment becomes accessible to mid-market companies, not just hyperscalers',
          'Community fine-tuning ecosystem will generate specialized variants rapidly',
          'Meta\'s open strategy continues to commoditize the model layer — value shifts to applications',
          'Reduces vendor lock-in risk for any product currently dependent on a single closed API',
        ],
        callToAction: 'Identify your highest-volume, lowest-complexity AI calls — these are candidates to migrate to self-hosted Llama 4 Scout to dramatically cut inference costs.',
      },
      top_manager: {
        summary: 'Meta\'s continued open-weight releases are a deliberate platform strategy to commoditize the AI model layer and shift value to Meta\'s advertising and social infrastructure. For enterprises, open models provide negotiating leverage against closed API vendors.',
        keyPoints: [
          'Meta benefits indirectly — AI adoption grows their data ecosystem and advertising platform',
          'Every Llama release compresses the value of OpenAI/Google API subscriptions',
          'Strategic implication: the model layer is becoming infrastructure, like cloud compute',
          'Enterprises with sufficient compute should establish an open-model capability',
          'Reduces AI cost risk in strategic financial models — open-weight inference cost floors near zero',
        ],
        callToAction: 'Factor open-model alternatives into your AI vendor negotiation strategy — Meta\'s releases give you a credible walk-away option.',
      },
    },
  },
  {
    id: 'week-3',
    headline: 'Stanford HAI report: AI is now automating 25% of tasks in 60% of occupations — largest study to date',
    sourceName: 'Stanford HAI',
    sourceUrl: 'https://hai.stanford.edu',
    publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    topic: 'research',
    perspectives: {
      developer: {
        summary: 'The Stanford study maps task-level automation rates across 1,000 occupations. Software development sees 35% task automation rate — highest among knowledge work. Code review, documentation, and test generation are the most-automated tasks.',
        keyPoints: [
          'Developers experience 35% task automation — above the 25% average across occupations',
          'Highest-automated dev tasks: unit test generation (78%), code documentation (71%), bug triage (64%)',
          'Teams using AI coding tools report 40% productivity increase on automated tasks',
          'Demand for AI-augmented developers is growing faster than traditional developer demand',
          'New high-value skills: prompt engineering, AI output validation, system design for AI-human workflows',
        ],
        callToAction: 'Audit which of your team\'s tasks fall in the high-automation categories — redirect that capacity toward architecture and product decisions where human judgment is irreplaceable.',
      },
      product_manager: {
        summary: 'The study\'s task-level granularity reveals where AI product opportunities exist. Industries with high task-automation potential but low current AI adoption are the highest-value targets for AI product investment.',
        keyPoints: [
          'Legal, finance, and healthcare have 30%+ task automation potential but low current adoption',
          'User research and competitive analysis rank as high-automation PM tasks (72% and 68%)',
          'Products that surface AI automation for end-users (not just internal tools) are the growth opportunity',
          'Study methodology is now a benchmark tool for evaluating AI product-market fit',
          '60% of occupations means AI productivity tools have near-universal addressable market',
        ],
        callToAction: 'Run a task audit for your target users using the HAI framework — identify which tasks in their workflow have high automation potential but no current AI tool addressing them.',
      },
      top_manager: {
        summary: 'The scale of AI task automation is now empirically documented: 25% across 60% of occupations. This is the first research to give executives a reliable framework for workforce planning and AI investment prioritization.',
        keyPoints: [
          'Economic impact: 25% task automation across knowledge work represents trillions in productivity potential',
          'First-mover advantage in AI-augmented workforce is measurable — 40% productivity delta is significant',
          'Workforce planning must account for task-level automation, not job-level displacement',
          'Regulatory and HR implications: task automation requires reskilling investment, not just headcount reduction',
          'Companies that automate and redeploy talent to higher-value work will outperform those that cut headcount',
        ],
        callToAction: 'Commission a task-level automation audit of your top 3 cost centers using the Stanford HAI methodology — use it to prioritize AI investment by ROI.',
      },
    },
  },
  {
    id: 'week-4',
    headline: 'Cursor raises $105M Series B, hits $200M ARR — AI code editor becomes fastest-growing dev tool in history',
    sourceName: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    topic: 'tools',
    perspectives: {
      developer: {
        summary: 'Cursor hit $200M ARR in 18 months by deeply integrating model context with the IDE — not just autocomplete. The raise will fund custom model training on code data and deeper debugger/runtime integration. Expect a much smarter Cursor by end of year.',
        keyPoints: [
          '$200M ARR in 18 months — fastest developer tool to reach this milestone',
          'Custom model training on Cursor user data is the planned differentiator',
          'Roadmap: debugger integration, runtime error context, multi-repo codebase understanding',
          'GitHub Copilot Enterprise is the primary competitor — Cursor currently leads on model quality',
          'VS Code extension architecture means low switching cost if a competitor emerges',
        ],
        callToAction: 'If your team hasn\'t evaluated Cursor against Copilot in the last 6 months, run a two-week trial — the quality gap has widened significantly.',
      },
      product_manager: {
        summary: 'Cursor\'s growth proves that AI-native UX beats AI-bolted-on-UX. They won by redesigning the IDE around AI, not by adding a chat sidebar. This is a template for AI product strategy across every developer tool vertical.',
        keyPoints: [
          'Key insight: AI-native redesign outperforms AI feature addition in developer tools',
          'Tab-to-accept, multi-file edit, and codebase Q&A are the three features driving retention',
          'Pricing at $20/user/month with unlimited AI usage is the model GitHub Copilot is now forced to match',
          'Developer tools are a wedge into engineering-led enterprise buying — $105M gives runway for enterprise sales',
          'Network effects from team features (shared context, code conventions) increase switching cost',
        ],
        callToAction: 'Evaluate whether your product has an "AI-native redesign" opportunity vs. an "AI feature addition" — Cursor\'s success suggests the former wins.',
      },
      top_manager: {
        summary: 'Cursor\'s $200M ARR validates that AI-native developer tools command premium pricing and grow faster than traditional SaaS. For any company with a software-engineering-heavy cost center, this is now a procurement decision worth evaluating.',
        keyPoints: [
          'Developer productivity tools with demonstrated ROI justify $20-40/user/month easily',
          'Cursor\'s growth displacing Copilot signals that Microsoft\'s Azure-bundling strategy has limits',
          'Engineering team productivity is now a competitive differentiator, not just a cost center',
          'AI developer tool market is still early — consolidation will accelerate with this funding',
          'Vendor evaluation criteria have shifted: model quality and IDE integration depth matter more than brand',
        ],
        callToAction: 'Include AI developer tools in next quarter\'s IT budget review — the productivity ROI at $20/developer/month is among the highest in the software stack.',
      },
    },
  },
  {
    id: 'week-5',
    headline: 'Apple Intelligence expands to 40 languages, integrates ChatGPT into Siri — 1.2B device deployment',
    sourceName: 'Apple Newsroom',
    sourceUrl: 'https://apple.com/newsroom',
    publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    topic: 'industry',
    perspectives: {
      developer: {
        summary: 'Apple Intelligence APIs are now available to third-party apps in 40 languages. Key additions: Writing Tools API, Image Playground API, and App Intents for Siri integration. On-device models are fast and private but limited to Apple Silicon.',
        keyPoints: [
          'Writing Tools API: summarize, rewrite, proofread any text field in your app — 2 lines of code',
          'Image Playground API: generate images from text prompts, Apple-hosted, no moderation burden',
          'App Intents + Siri: your app actions can be triggered by natural language voice commands',
          'On-device model: runs locally, no data leaves device, instant response, requires A17 Pro or M-series',
          'ChatGPT fallback for complex queries is opt-in per-user, privacy preserved',
        ],
        callToAction: 'Add Writing Tools API support this sprint — it\'s 2 lines and immediately adds AI summarization to every text view in your iOS app.',
      },
      product_manager: {
        summary: 'Apple Intelligence reaching 1.2B devices is the largest AI distribution event in history. Features built on Writing Tools and Siri integration have instant reach to the entire iOS user base with no additional marketing spend.',
        keyPoints: [
          '1.2B device reach means AI features have near-universal distribution on Apple platform',
          'Privacy-first positioning removes the main enterprise objection to AI features on mobile',
          'Siri integration is a new acquisition channel — voice-triggered app actions drive discovery',
          'Writing Tools reduces the ROI bar for AI text features — marginal implementation cost is minimal',
          '40 language support removes localization as a barrier to global AI feature launches',
        ],
        callToAction: 'Prioritize Writing Tools and App Intents in your next iOS release — these are table-stakes features for App Store ranking in the AI era.',
      },
      top_manager: {
        summary: 'Apple\'s 1.2B device deployment of AI features is a forcing function for every company with a mobile product. AI capabilities are becoming baseline expectations for iOS apps, and the competitive bar just moved significantly.',
        keyPoints: [
          '1.2B AI-capable devices shifts user expectations for app intelligence permanently',
          'Apple\'s privacy positioning creates a market advantage for on-device AI features in regulated industries',
          'Companies without AI features in iOS apps will face App Store visibility disadvantages',
          'ChatGPT integration signals Apple\'s willingness to partner rather than build everything — signals for enterprise deals',
          'Enterprise mobile deployment unlocked: on-device processing meets corporate data security requirements',
        ],
        callToAction: 'Review your iOS mobile product roadmap for Apple Intelligence integration opportunities — this is now a competitive requirement, not a nice-to-have.',
      },
    },
  },
  {
    id: 'week-6',
    headline: 'Perplexity AI launches Comet: an AI-native browser that replaces search with conversational research',
    sourceName: 'The Verge',
    sourceUrl: 'https://theverge.com',
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    topic: 'tools',
    perspectives: {
      developer: {
        summary: 'Comet is Chromium-based with Perplexity\'s AI deeply integrated at the browser level — not as an extension. It intercepts navigation intent, searches and synthesizes before loading pages, and maintains a context window across your browsing session.',
        keyPoints: [
          'Built on Chromium — full Chrome extension compatibility, no developer ecosystem disruption',
          'Session memory: the browser maintains context of your research across tabs and days',
          'API access: Comet exposes a local API for querying your browsing session context',
          'Custom model routing: switches between Perplexity, GPT-4.1, and Claude based on query type',
          'Open Beta available now on Mac — Windows Q3 2025',
        ],
        callToAction: 'Install Comet beta for your research workflows — the session memory across tabs is genuinely useful for multi-step technical investigations.',
      },
      product_manager: {
        summary: 'Comet is a category-creating move: AI-native browsing replaces the search-click-read loop. If it achieves even 5% browser market share, it fundamentally changes web traffic patterns and disrupts the assumption that users will arrive via search.',
        keyPoints: [
          'AI synthesis before page load means users may never visit source pages — direct traffic implications',
          'Perplexity is building a platform: Comet is the distribution layer for their AI model business',
          'Research-intensive workflows (B2B, healthcare, legal) are the initial target segment',
          'SEO and content strategy assumptions break if AI intermediation becomes mainstream',
          'Competitive response from Google Chrome and Safari is now a certainty — timeline TBD',
        ],
        callToAction: 'Audit your product\'s dependence on organic search traffic — model the impact of 10% AI-browser adoption on your top acquisition channels.',
      },
      top_manager: {
        summary: 'Comet represents a direct challenge to Google\'s core business model. If successful, it shifts the web\'s information distribution layer from search ranking to AI synthesis quality. This is a structural threat to ad-based web economics.',
        keyPoints: [
          'Google generates 80%+ of revenue from search advertising — AI intermediation is an existential threat',
          'Publishers and media companies face traffic collapse if AI summarizes before users arrive',
          'Enterprise research workflows have high willingness to pay — Perplexity\'s clear initial monetization target',
          'Browser market share is sticky — if Comet wins enterprise, it has decades of installed base',
          'This is the clearest signal yet that the AI-browser wave is coming — no browser vendor can ignore it',
        ],
        callToAction: 'If your business model depends on web traffic from search, convene a strategic review of AI-intermediation risk within the next 90 days.',
      },
    },
  },
]
