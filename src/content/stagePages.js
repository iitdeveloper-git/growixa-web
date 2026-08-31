/**
 * Page content for the five engine stages. Kept as data so the pages share one
 * template and copy edits never touch a component.
 */
export const STAGE_PAGES = {
  find: {
    title: 'Describe who you sell to. Get a list you can actually email.',
    lede: 'No boolean syntax, no filter tree, no exporting a CSV of guesses. Say it in a sentence — Growixa finds the companies, the people inside them, and verifies every address before it counts.',
    cta: { label: 'Request beta access', to: '/pricing' },
    foot: 'Invite-only beta · Verified-only billing · Unused credits roll over',
    surface: {
      title: 'Your search',
      subtitle: '"Series A B2B SaaS in the UK, 20–200 people, hiring for marketing"',
      chip: '3,410 found',
      rows: [
        { badge: 'PR', label: 'Priya Raghavan', sub: 'VP Marketing · northwind.io', value: 'MX ok' },
        { badge: 'DO', label: 'Daniel Okoye', sub: 'Head of Growth · lumenlabs.com', value: 'MX ok' },
        { badge: 'JW', label: 'James Whitfield', sub: 'Marketing Lead · pinehurst.dev', value: 'Bounced — free' },
      ],
      footer: 'You are charged for 3,410 — not the 4,180 we looked at.',
    },
    stepsHead: { eyebrow: 'How it works', title: 'Three steps, no query language.', lede: 'The whole point of this stage is that you should not need to learn a search syntax to describe a customer you already know well.' },
    steps: [
      { title: 'Say who you want', body: 'A plain sentence. "Shopify agencies in Germany with more than ten staff." It reads intent, not keywords.' },
      { title: 'It finds and verifies', body: 'Companies first, then the people inside them, then a real SMTP check on every address before it lands in your list.' },
      { title: 'It hands off', body: 'Straight into Contacts, deduplicated against everyone you already know, ready for Qualify to score.' },
    ],
    featHead: { eyebrow: 'What you get', title: 'Built to keep your domain alive.', lede: 'Most list tools optimise for volume. Bounces are what actually kill a sending domain, so this one optimises for the opposite.' },
    features: [
      { span: 'w6', title: 'Verified before it counts', body: 'Every address gets a real mailbox check. Anything that fails is removed and never billed — you pay for deliverable people, not rows.', chips: ['SMTP check', 'Catch-all detection', 'Role-address filter'] },
      { span: 'w6', title: 'Company facts, not just emails', body: 'Headcount, funding stage, tech stack and open roles come attached — exactly what Qualify needs to score and Create needs to write.', chips: ['Funding', 'Headcount', 'Open roles'] },
      { span: 'w4', title: 'Credits that do not expire', body: 'Unused credits roll over for as long as you are a customer. No use-it-or-lose-it month.' },
      { span: 'w4', title: 'Sourcing you can defend', body: 'Business contact data only, with provenance on every record and a one-click removal path.' },
      { span: 'w4', title: 'Runs on a schedule', body: 'Set a search once and it keeps finding new matches as companies enter your market.' },
    ],
  },

  qualify: {
    title: 'Most outreach fails on timing, not on wording.',
    lede: 'Qualify watches for the handful of signals that mean somebody just entered your market — and moves them to the top of today’s list. Everyone else waits until they are worth the email.',
    cta: { label: 'Join the waitlist', to: '/pricing' },
    foot: 'Not built yet — first signals land Q4 2026. Waitlist gets it first.',
    surface: {
      title: 'Priya Raghavan · northwind.io',
      subtitle: 'VP Marketing · 240 employees',
      chip: 'Ready now',
      rows: [
        { badge: '+38', label: 'Visited pricing 3× in 6 days', sub: 'Last seen 14 hours ago' },
        { badge: '+31', label: 'Hiring a Demand Gen Manager', sub: 'Posted 4 days ago' },
        { badge: '+23', label: 'Opened the last 5 emails', sub: 'Never replied' },
      ],
      footer: 'Intent score 92 — top 4% of your list this week.',
    },
    stepsHead: { eyebrow: 'No black box', title: 'A score that shows its working.', lede: 'Every number opens into the signals that produced it, with weights you set.' },
    steps: [
      { title: 'Signals you can verify', body: 'Pricing visits, job posts, funding, a competitor’s tool going dark. All checkable by hand.' },
      { title: 'Weights you control', body: 'Your market is not ours. Tune what counts and the whole list re-sorts.' },
      { title: 'The reason becomes the email', body: 'Whatever pushed someone to 92 is what Create opens the message with.' },
    ],
    featHead: { eyebrow: 'What is planned', title: 'The signals we are starting with.', lede: 'This stage does not exist yet. These are the first signals scheduled for the Q4 release.' },
    features: [
      { span: 'w6', title: 'Repeat pricing visits', body: 'The strongest single predictor we have found. Weighted highest by default, and adjustable.', chips: ['+38 default'] },
      { span: 'w6', title: 'Hiring for a relevant role', body: 'A job post for the function you sell into usually means budget was approved weeks earlier.', chips: ['+31 default'] },
      { span: 'w4', title: 'Opened without replying', body: 'Interest without a reply is a timing problem, not a fit problem.' },
      { span: 'w4', title: 'Funding announced', body: 'New capital, new tooling budget, ninety-day window.' },
      { span: 'w4', title: 'Anything you turn off', body: 'Every signal can be disabled. A weight of zero is a supported answer.' },
    ],
  },

  create: {
    title: 'Writes like someone who actually read their website.',
    lede: 'Generic AI copy is worse than no copy — it tells the reader you did not look. Create reads the company first, then writes an opening line only they could have received.',
    cta: { label: 'Try the composer', to: '/sandbox' },
    foot: 'Beta · Email and social live · Approval workflow coming',
    surface: {
      title: 'Written for Priya',
      subtitle: 'Angle: scaling before hiring',
      chip: 'On brand',
      rows: [
        { badge: '01', label: 'Read northwind.io', sub: 'Usage-based pricing, hiring GTM' },
        { badge: '02', label: 'Matched your brand voice', sub: 'Learned from 12 emails you sent' },
        { badge: '03', label: 'Wrote for email', sub: '94 words · reading level 6' },
      ],
      footer: '0 banned claims · nothing you would not have written.',
    },
    stepsHead: { eyebrow: 'How it works', title: 'Read, then write. In that order.', lede: 'The order is the whole trick. Tools that write first and personalise after produce the mail-merge copy everybody deletes.' },
    steps: [
      { title: 'It reads them', body: 'Their site, pricing page, open roles, recent posts — plus whatever Qualify flagged as the reason they are worth writing to.' },
      { title: 'It writes as you', body: 'Your brand voice is a profile, not a prompt: tone, words you never use, claims you are not allowed to make.' },
      { title: 'Per channel, not per word count', body: 'An email, a LinkedIn post and an SMS are three different pieces of writing — not one draft cut to three lengths.' },
    ],
    featHead: { eyebrow: 'Guardrails', title: 'Nothing goes out that you would not have written.', lede: 'The risk with AI copy is not that it is bad. It is that it is confidently wrong about your product in front of a customer.' },
    features: [
      { span: 'w8', title: 'Claims you have banned, it cannot make', body: 'List what you are not allowed to say — "guaranteed", "the only platform", a certification you do not hold — and it is blocked at generation, not caught in review.', chips: ['Banned claims', 'Required disclaimers', 'Tone lock'] },
      { span: 'w4', title: 'Approval before send', body: 'Optional queue where a human signs off on every first-touch message. Off by default for solo founders.' },
      { span: 'w4', title: 'Voice from your own writing', body: 'Paste three emails you have actually sent. It learns from those rather than a tone slider.' },
      { span: 'w4', title: 'Rewrites on reply', body: 'When somebody replies, the follow-up is written against what they actually said.' },
      { span: 'w4', title: 'Variants for testing', body: 'Three angles per message, so Send has something real to A/B rather than two subject lines.' },
    ],
  },

  send: {
    title: 'The part that already works. Properly.',
    lede: 'Campaigns, sequences, follow-ups and the unglamorous machinery underneath — warm-up, authentication, suppression, one-click unsubscribe. This is the stage Growixa shipped first, because it is the one that has to be boring and reliable.',
    cta: { label: 'Start free', to: '/pricing' },
    foot: 'Live today · Free up to your first 1,000 contacts · No credit card',
    surface: {
      title: 'Series A outreach · Week 3',
      subtitle: 'Sequence · 4 steps · 1,204 contacts',
      chip: 'Sending',
      rows: [
        { badge: '1', label: 'Opening email', sub: 'Sent · day 0', value: '1,204 · 41% open' },
        { badge: '2', label: 'Follow-up, new angle', sub: 'Sent · day 3', value: '986 · 33% open' },
        { badge: '3', label: 'Case study', sub: 'Sending now · day 7', value: '412 queued' },
        { badge: '4', label: 'Break-up', sub: 'Scheduled · day 14', value: '—' },
      ],
      footer: '18 replied and were removed from the sequence · 0.2% bounce rate.',
    },
    stepsHead: { eyebrow: 'Why this one first', title: 'Sending is the stage you cannot fake.', lede: 'A lead finder that returns a bad row costs you a credit. A sending platform that gets your domain flagged costs you the domain.' },
    steps: [
      { title: 'Your domain, your reputation', body: 'Dedicated sending identity from day one. You are never pooled with a stranger’s cold list.' },
      { title: 'Bring your own SMTP', body: 'Already on Postmark, SES or Sendgrid? Keep it. Growixa runs the campaigns, they carry the mail.' },
      { title: 'Migration in an afternoon', body: 'Import lists, templates and suppression from Mailchimp, Klaviyo, Brevo or a CSV.' },
    ],
    featHead: { eyebrow: 'What is in it', title: 'Everything you would otherwise buy four tools for.', lede: 'Sequencer, ESP, warm-up service and deliverability monitor — one system, one set of settings, one place things go wrong.' },
    features: [
      { span: 'w6', title: 'Sequences that know when to stop', body: 'Multi-step follow-ups that pause the instant somebody replies, books, or unsubscribes — including on a different thread or from a colleague’s address.', chips: ['Reply detection', 'Send windows', 'Time zones'] },
      { span: 'w6', title: 'Deliverability, handled', body: 'SPF, DKIM and DMARC checked at setup. Gradual warm-up on new domains, per-domain throttling, and an alert the moment placement drops.', chips: ['SPF · DKIM · DMARC', 'Auto warm-up', 'Placement alerts'] },
      { span: 'w4', title: 'Reporting that answers one question', body: 'Not forty metrics. Who replied, what did they reply to, and what should you send next.' },
      { span: 'w4', title: 'Templates without the builder tax', body: 'Drag-and-drop when you want design, plain text when you want replies. Both render correctly in Outlook.' },
      { span: 'w4', title: 'Compliance built in', body: 'One-click unsubscribe headers, global suppression, consent records, and a footer you cannot accidentally delete.' },
    ],
  },

  manage: {
    title: 'One record per person. Everything writes to it.',
    lede: 'Not a CRM you have to feed — a memory the engine fills in by itself. Every search, score, draft and reply lands on the same contact, so the next run starts knowing what the last one learned.',
    cta: { label: 'Import your list', to: '/pricing' },
    foot: 'Live today · CSV, Mailchimp, Klaviyo, Brevo and HubSpot imports',
    surface: {
      title: 'Priya Raghavan',
      subtitle: 'VP Marketing · northwind.io',
      chip: 'Subscribed',
      rows: [
        { badge: '01', label: 'Found & verified', sub: 'Search: UK Series A SaaS · 12 Aug' },
        { badge: '02', label: 'Scored 92', sub: 'Pricing ×3, hiring, opened ×5 · 28 Aug' },
        { badge: '03', label: 'Draft written', sub: 'Angle: scaling before hiring · 29 Aug' },
        { badge: '04', label: 'Sent, opened twice', sub: 'Series A outreach, step 1 · 30 Aug' },
      ],
      footer: 'Consent: opted in via import, 12 Aug · source recorded · one-click unsubscribe active.',
    },
    stepsHead: { eyebrow: 'What it does', title: 'The boring parts, done without asking.', lede: 'Contact hygiene is where most small teams quietly lose a domain. None of this requires you to remember to do it.' },
    steps: [
      { title: 'Deduplicated on the way in', body: 'Import the same person from three sources and you get one record with three sources attached — not three contacts you will email three times.' },
      { title: 'Consent and suppression enforced', body: 'Unsubscribes, bounces and complaints go onto a global list every campaign checks before it sends.' },
      { title: 'Yours to take with you', body: 'Full export, any time, no support ticket. Your contacts were never hostage.' },
    ],
    featHead: { eyebrow: 'Also included', title: 'A contact record the whole engine writes to.', lede: 'Every other stage reads from and writes back to this one. That is what makes the next cycle smarter than the last.' },
    features: [
      { span: 'w6', title: 'Segments that stay current', body: 'Define a rule once. Membership updates as people’s scores, roles and behaviour change.', chips: ['Dynamic rules', 'Live membership'] },
      { span: 'w6', title: 'Import without a mapping ceremony', body: 'It reads your CSV headers and guesses correctly. You confirm; you do not configure.', chips: ['CSV', 'Mailchimp', 'Klaviyo', 'HubSpot'] },
      { span: 'w4', title: 'Custom fields', body: 'Anything your market needs on a contact, without waiting for us to add it.' },
      { span: 'w4', title: 'Full history', body: 'Every touch from every stage, in order, on one timeline.' },
      { span: 'w4', title: 'One-click export', body: 'Everything, any time, including after you cancel.' },
    ],
  },
};
