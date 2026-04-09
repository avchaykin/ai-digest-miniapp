import type { DigestItem } from '../types/digest'

export const mockToday: DigestItem[] = [
  {
    id: 'today-1',
    headline: 'OpenAI releases GPT-4.1 with 1M token context window and improved instruction following',
    sourceName: 'OpenAI Blog',
    sourceUrl: 'https://openai.com/blog',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    topic: 'models',
    perspectives: {
      developer: {
        summary: 'GPT-4.1 ships with a 1M token context window, substantially improved instruction following, and new structured output guarantees. The API is backward-compatible with GPT-4o endpoints — swap the model ID and you\'re done.',
        keyPoints: [
          'Context window: 1M tokens (~750k words), priced at $2/1M input tokens',
          'New `strict` mode enforces JSON Schema compliance with zero hallucinated fields',
          'System prompt adherence improved — tested to follow multi-step constraints reliably',
          'Latency on short prompts is 15% faster than GPT-4o due to speculative decoding',
          'Fine-tuning API support available from day one',
        ],
        callToAction: 'Update model ID to gpt-4.1 and run your eval suite — most teams see quality gains with zero prompt changes.',
      },
      product_manager: {
        summary: 'GPT-4.1 closes the gap on Anthropic\'s Claude 3.7 in instruction following benchmarks and offers a dramatically larger context window, which unlocks document-heavy use cases previously impractical. Pricing is competitive.',
        keyPoints: [
          '1M token context enables full codebase, legal doc, or transcript analysis in one call',
          'Instruction following improvements reduce need for expensive prompt engineering iterations',
          'Strict JSON mode removes a common customer complaint about unreliable outputs',
          'Available in Tier 1 — no waitlist, immediate access for all paying customers',
          'Competitive pricing undercuts Claude 3.7 Sonnet for high-volume workloads',
        ],
        callToAction: 'Identify 2-3 user pain points that were blocked by context limits — those features just became shippable.',
      },
      top_manager: {
        summary: 'OpenAI has closed a meaningful capability gap with Anthropic and maintained price parity. For enterprise buyers, GPT-4.1 reduces switching pressure to Claude. The 1M context window unlocks new workflow automation contracts.',
        keyPoints: [
          'Removes the main technical objection for enterprise document-processing deals',
          'Microsoft/Azure integration means GPT-4.1 is immediately available in existing enterprise agreements',
          'Reduces risk of customer churn to Anthropic for instruction-following-sensitive workloads',
          'Signals OpenAI\'s intention to compete on reliability, not just raw capability',
          'Fine-tuning availability accelerates proprietary model strategies for key accounts',
        ],
        callToAction: 'Review pipeline deals stalled on context or reliability concerns — re-engage with updated technical specs.',
      },
    },
  },
  {
    id: 'today-2',
    headline: 'Google DeepMind\'s Gemini 2.5 tops coding benchmarks, outperforming all frontier models on SWE-Bench',
    sourceName: 'Google DeepMind',
    sourceUrl: 'https://deepmind.google',
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    topic: 'models',
    perspectives: {
      developer: {
        summary: 'Gemini 2.5 Pro scores 72.4% on SWE-Bench Verified, a new high-water mark. It also ships a native code execution sandbox and improved multi-file diff generation. The Gemini API already has it in preview.',
        keyPoints: [
          'SWE-Bench Verified score: 72.4% (vs 65.3% GPT-4.1, 64.1% Claude 3.7)',
          'Native code execution sandbox eliminates the eval-print-fix loop in agentic workflows',
          'Multi-file diff output is now coherent — it understands imports and naming across files',
          'Available via `gemini-2.5-pro-preview` model ID in Vertex AI and AI Studio',
          'Context: 1M tokens, same as GPT-4.1',
        ],
        callToAction: 'Run your coding agent benchmarks against gemini-2.5-pro-preview — the SWE-Bench lead is substantial enough to warrant a test.',
      },
      product_manager: {
        summary: 'A new coding benchmark leader strengthens Google\'s pitch for developer-facing AI products. For teams building on Gemini, this is a meaningful quality lift for code-generation features without a price increase.',
        keyPoints: [
          'Strongest case yet for Gemini in IDE copilot and code review products',
          'Native sandbox reduces infrastructure complexity for code-execution features',
          'Google is bundling this into Workspace AI — potential for large B2B deals',
          'Still in preview — GA timeline TBD, which is a risk for production commitments',
          'Multi-file awareness directly addresses the #1 developer complaint about AI coding tools',
        ],
        callToAction: 'If your roadmap includes a coding assistant feature, move Gemini 2.5 to the top of your model evaluation list.',
      },
      top_manager: {
        summary: 'Google has taken the coding benchmark crown from OpenAI and Anthropic simultaneously. Combined with deep Workspace integration, this positions Google as the default AI platform for software-driven enterprises.',
        keyPoints: [
          'First time Google holds the top coding AI position — significant brand signal',
          'Workspace bundling means zero marginal CAC for millions of existing enterprise customers',
          'Strengthens Google\'s negotiating position in cloud-AI bundling deals',
          'Preview status limits immediate revenue recognition but sets up Q3 GA announcement',
          'Microsoft/GitHub Copilot now faces direct competitive pressure in its core market',
        ],
        callToAction: 'If you have a Google Cloud relationship, request a briefing on Gemini 2.5 enterprise terms before the GA announcement changes pricing leverage.',
      },
    },
  },
  {
    id: 'today-3',
    headline: 'EU AI Act enforcement begins: first fines issued to three companies for non-compliant high-risk AI systems',
    sourceName: 'Reuters',
    sourceUrl: 'https://reuters.com',
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    topic: 'regulation',
    perspectives: {
      developer: {
        summary: 'The EU AI Act enforcement is now real: three companies received fines for deploying high-risk AI systems without conformity assessments or proper logging. If you\'re shipping AI in the EU, understanding the technical obligations is now urgent.',
        keyPoints: [
          'High-risk systems require: audit logs retained for 5 years, human oversight mechanisms, and accuracy documentation',
          'Fines scale up to €35M or 7% of global annual turnover — whichever is higher',
          'Automated hiring, credit scoring, biometric, and safety-critical AI are all "high-risk" categories',
          'Technical standard EN ISO/IEC 42001 is the reference for conformity assessments',
          'Open-source models used in commercial high-risk applications are not exempt',
        ],
        callToAction: 'Check if any of your EU-deployed AI features fall under high-risk categories — start with hiring, credit, and biometric use cases.',
      },
      product_manager: {
        summary: 'Real fines mean AI compliance is now a product requirement, not a legal department problem. Products touching EU users in high-risk categories need conformity documentation, transparency features, and human override capabilities.',
        keyPoints: [
          'Transparency requirement: users must be informed when interacting with AI in high-risk contexts',
          'Human oversight is mandatory — "override" and "appeal" flows are now table-stakes features',
          'Documentation burden is significant — expect 2-4 sprints of compliance work per high-risk product',
          'Non-EU companies with EU users are fully in scope',
          'B2B products may have obligations passed down through contracts with EU customers',
        ],
        callToAction: 'Audit your product\'s EU user base and map which features touch high-risk categories — create a compliance backlog before your legal team asks.',
      },
      top_manager: {
        summary: 'EU AI Act fines landing makes AI regulatory compliance a board-level risk item. Companies with EU market exposure need a compliance program now — the cost of non-compliance exceeds most compliance program budgets.',
        keyPoints: [
          'Fines up to 7% global revenue dwarf typical compliance investment costs',
          'Three fines in enforcement week signals regulators are acting quickly — this is not a soft launch',
          'EU is the global pace-setter; similar frameworks are advancing in UK, Canada, and Brazil',
          'Compliance programs built for EU AI Act will likely satisfy 70%+ of emerging global requirements',
          'Proactive compliance can be positioned as a trust signal in enterprise sales',
        ],
        callToAction: 'Commission an AI risk audit for EU-facing products this quarter — the ROI on compliance now exceeds the cost of a single fine.',
      },
    },
  },
  {
    id: 'today-4',
    headline: 'Mistral releases Codestral 2.0: 32B open-weight coding model that rivals closed frontier models',
    sourceName: 'Mistral AI',
    sourceUrl: 'https://mistral.ai',
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    topic: 'open_source',
    perspectives: {
      developer: {
        summary: 'Codestral 2.0 is a 32B parameter open-weight model that scores 67% on SWE-Bench and beats GPT-4o on HumanEval. It runs on a single A100 80GB or two 48GB consumer GPUs. Apache 2.0 license for commercial use.',
        keyPoints: [
          'SWE-Bench: 67% — competitive with frontier closed models at near-zero inference cost',
          'Fits on 1x A100 80GB (bf16) or 2x RTX 4090 with quantization',
          'Fill-in-the-middle (FIM) support for autocomplete use cases',
          'Supports 128K context window',
          'Available on HuggingFace, Ollama, and llama.cpp immediately',
        ],
        callToAction: 'Pull codestral-2.0 in Ollama and run it against your IDE integration — self-hosted coding assistant just became viable for most teams.',
      },
      product_manager: {
        summary: 'An open-weight model competitive with GPT-4o on coding eliminates the API cost barrier for code-generation features. This opens a new design space: offline-capable, privacy-preserving, and cost-capped coding products.',
        keyPoints: [
          'Zero per-token cost unlocks unlimited usage pricing models for coding products',
          'On-premise deployment removes data residency blockers for enterprise customers in regulated industries',
          'Community and ecosystem will drive rapid improvement through fine-tuning',
          'Competing products built on closed APIs are now at a structural cost disadvantage',
          'Apache 2.0 means you can fine-tune and redistribute without Mistral dependency',
        ],
        callToAction: 'Model the unit economics of switching your coding feature to self-hosted Codestral 2.0 — the break-even is likely under 6 months of API spend.',
      },
      top_manager: {
        summary: 'Mistral has shipped an open-weight model that meaningfully compresses the value of closed frontier model subscriptions for coding use cases. This accelerates commoditization pressure on OpenAI and Google\'s developer products.',
        keyPoints: [
          'First open-weight model to credibly challenge closed APIs on coding benchmarks',
          'Reduces enterprises\' dependency on single-vendor AI APIs — significant strategic leverage',
          'European origin aligns with EU data sovereignty requirements',
          'Mistral is building a moat through open ecosystem while monetizing on cloud/enterprise',
          'Signals that the "open vs closed" AI debate is shifting toward open in the coding vertical',
        ],
        callToAction: 'Review your AI vendor concentration risk — Codestral 2.0 provides a credible fallback that reduces lock-in with any single closed provider.',
      },
    },
  },
  {
    id: 'today-5',
    headline: 'Anthropic launches Claude\'s computer use API for enterprise: automates multi-step desktop workflows',
    sourceName: 'Anthropic',
    sourceUrl: 'https://anthropic.com',
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    topic: 'tools',
    perspectives: {
      developer: {
        summary: 'Claude\'s Computer Use API is now GA for enterprise. It takes screenshots and emits mouse/keyboard actions to automate arbitrary desktop applications. The API is surprisingly reliable on structured UI tasks but still struggles with dynamic layouts.',
        keyPoints: [
          'Input: screenshot (base64) + task description. Output: action sequence (click/type/scroll)',
          'Loops autonomously until task completion or max_steps limit',
          'Sandbox mode available for testing — runs in an isolated VM, no real system access',
          'Pricing: $15/1000 actions (each screenshot+action cycle = 1 action)',
          'Works best with: data entry, form filling, legacy system automation, UI testing',
        ],
        callToAction: 'Identify one high-volume, repetitive internal workflow and prototype with the sandbox API this week — approval workflows and data entry are the best starting points.',
      },
      product_manager: {
        summary: 'Computer Use GA is a new category: AI that operates software on behalf of users. This enables automation of any workflow, not just those with an API. The enterprise pricing suggests Anthropic is targeting RPA replacement.',
        keyPoints: [
          'Directly competes with UiPath, Automation Anywhere, and other RPA platforms',
          'No API required in the target application — works on any desktop software',
          'Reduces integration cost for legacy system automation to near zero',
          'User trust and oversight are critical design concerns — needs clear handoff patterns',
          'Compliance and audit log requirements will be demanding for regulated industries',
        ],
        callToAction: 'Map the top 5 manual workflows your support or ops team does in tools without APIs — each is a Computer Use automation candidate.',
      },
      top_manager: {
        summary: 'Computer Use GA signals AI\'s expansion from knowledge work augmentation to process automation. This directly threatens the $15B+ RPA software market and creates new efficiency opportunities for back-office operations.',
        keyPoints: [
          'RPA market (UiPath, Automation Anywhere) faces existential disruption — AI automation requires no flowchart programming',
          'Operations teams can automate legacy software without IT involvement or integration projects',
          'Potential for 40-60% reduction in manual process cost for admin-heavy business units',
          'Risk: autonomous AI acting on live systems requires governance frameworks that don\'t yet exist in most orgs',
          'Early adopters in insurance, banking, and healthcare back-office have highest ROI potential',
        ],
        callToAction: 'Commission a back-office automation audit — identify processes currently run on legacy software with no API, and quantify the FTE cost.',
      },
    },
  },
]
