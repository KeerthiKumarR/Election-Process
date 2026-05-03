/* ══════════════════════════════════════════════
   ELECTION PROCESS EDUCATION — script.js
   ══════════════════════════════════════════════ */

/* ── DATA ─────────────────────────────────────────────────────── */

const TIMELINE_DATA = [
  {
    step: "Step 1",
    title: "Candidate Announcement",
    desc: "Candidates formally declare their intention to run for office.",
    detail: "Candidates file paperwork with the election authority, pay a filing fee, or gather nomination signatures. Major parties often hold internal vetting processes. This marks the official start of a candidacy and sets campaign finance tracking in motion.",
    dot: "done"
  },
  {
    step: "Step 2",
    title: "Voter Registration",
    desc: "Eligible citizens register to vote before the official deadline.",
    detail: "Requirements vary by country and state. Common criteria include citizenship, minimum age (usually 18), and residency in the voting district. Deadlines range from election day itself to several weeks prior. Some countries use automatic registration for all citizens.",
    dot: ""
  },
  {
    step: "Step 3",
    title: "Primary / Nomination",
    desc: "Political parties select their official candidates through primaries or caucuses.",
    detail: "Primaries are state-run elections where party members vote for their preferred candidate. Caucuses are party-run meetings where supporters openly discuss and vote. Results determine who represents each party in the general election. Independent candidates typically gather petition signatures instead.",
    dot: ""
  },
  {
    step: "Step 4",
    title: "Campaign Period",
    desc: "Candidates campaign, debate, and fundraise to win voter support.",
    detail: "Campaigns involve rallies, TV and digital advertisements, debates, door-to-door canvassing, and social media outreach. Campaign finance rules limit and mandate disclosure of spending. Debates allow voters to compare candidates directly on policy positions and character.",
    dot: ""
  },
  {
    step: "Step 5",
    title: "Early & Absentee Voting",
    desc: "Many jurisdictions allow voting before Election Day via mail or early polling.",
    detail: "Mail-in and absentee ballots let voters cast their vote from home or while traveling. Early voting opens physical polling places days or weeks before Election Day. Some jurisdictions require a valid reason; others allow 'no-excuse' early voting for any registered voter.",
    dot: "warn"
  },
  {
    step: "Step 6",
    title: "Election Day",
    desc: "Polling stations open across the country and citizens cast their votes.",
    detail: "Polls typically run from early morning (e.g. 7 AM) until evening (7–8 PM). Voters verify their identity, receive a ballot, mark their choices privately in a voting booth, and submit. Poll workers and independent observers ensure the process is fair and secure.",
    dot: ""
  },
  {
    step: "Step 7",
    title: "Vote Counting & Results",
    desc: "Ballots are tallied, audited, and results are certified by election officials.",
    detail: "Counting can be manual, machine-assisted, or a combination. Preliminary results are often reported on election night, but official certified results may take days or weeks. Close races may trigger automatic recounts. Results are formally certified by election boards before taking effect.",
    dot: ""
  },
  {
    step: "Step 8",
    title: "Inauguration / Taking Office",
    desc: "The winner is formally sworn in and begins their term of service.",
    detail: "The inauguration ceremony marks the official transfer of power. The elected official takes an oath to uphold the constitution and their duties. In the US, presidential inaugurations occur on January 20. The peaceful transfer of power is considered a hallmark of healthy democracy.",
    dot: ""
  }
];

const VOTING_CARDS = [
  { icon: "🏛️", title: "Types of Elections", text: "Presidential, congressional, local, and referendum votes each serve different purposes in shaping democratic governance." },
  { icon: "✅", title: "Eligibility to Vote", text: "Most democracies require citizenship, a minimum age (typically 18), and residency in the district you're voting in." },
  { icon: "🗳️", title: "The Secret Ballot", text: "Your vote is completely private. Secret ballots prevent coercion and intimidation — a cornerstone of free and fair elections." },
  { icon: "📊", title: "Counting Votes", text: "Votes may be counted by hand, optical scanners, or electronic systems. Audits and recounts help verify accuracy." },
  { icon: "🏠", title: "Electoral Districts", text: "Geographic areas divided for representation. Drawing district boundaries (redistricting/gerrymandering) is closely watched by courts and watchdogs." },
  { icon: "⚖️", title: "Election Oversight", text: "Independent commissions, domestic and international observers, and post-election audits ensure elections are conducted fairly." }
];

const SYSTEMS_DATA = [
  { name: "First-Past-the-Post (FPTP)", tag: "Plurality", desc: "The candidate with the most votes wins — even without a majority. Simple but can produce unrepresentative outcomes.", example: "Used in: USA, UK, Canada, India" },
  { name: "Proportional Representation", tag: "PR", desc: "Parties receive seats in proportion to their share of votes. More representative but can lead to fragmented parliaments.", example: "Used in: Germany, Netherlands, Sweden" },
  { name: "Ranked-Choice Voting", tag: "Instant Runoff", desc: "Voters rank candidates. If no majority, the last-place candidate is eliminated and their votes redistributed.", example: "Used in: Australia, Ireland, some US cities" },
  { name: "Two-Round System", tag: "Runoff", desc: "If no candidate wins a majority in round one, the top two face a run-off election to determine the winner.", example: "Used in: France, Brazil, many African nations" }
];

const QUIZ_DATA = [
  {
    q: "What is the primary purpose of voter registration?",
    opts: ["To collect taxes from citizens", "To verify eligibility and maintain accurate voter rolls", "To determine which political party you support", "To assign you to a specific polling location only"],
    ans: 1,
    exp: "Registration ensures only eligible citizens vote and helps authorities organise polling stations, mail ballots, and voter rolls accurately."
  },
  {
    q: "What is the key difference between a primary election and a general election?",
    opts: ["They are exactly the same thing", "A primary selects a party's candidate; the general election picks the winner among all parties", "Primaries are only ever held for presidential races", "General elections are held once every decade"],
    ans: 1,
    exp: "Primaries narrow the field within a single party. The general election then pits the chosen candidates from different parties — and independents — against each other."
  },
  {
    q: "What does 'first-past-the-post' mean in an election?",
    opts: ["The candidate with over 50% of votes wins", "Whoever gets the most votes wins, even without a majority", "Votes are redistributed across multiple rounds", "Winners are randomly selected from top candidates"],
    ans: 1,
    exp: "In FPTP, the candidate with the most votes wins — even if it's far less than 50%. This can lead to scenarios where the majority of voters preferred other candidates."
  },
  {
    q: "What is an absentee or mail-in ballot?",
    opts: ["A ballot cast by a candidate for themselves", "A ballot discarded as invalid by election officials", "A ballot submitted in advance by those unable to vote in person", "A provisional ballot held pending identity verification"],
    ans: 2,
    exp: "Absentee (mail-in) ballots allow voters to cast their vote before Election Day or from a remote location — often for reasons such as illness, disability, or travel."
  },
  {
    q: "What is gerrymandering?",
    opts: ["A type of voting machine calibration error", "Manipulating electoral district boundaries to favour a political party", "Fraudulent double-counting of ballots", "A voting system where candidates are ranked by preference"],
    ans: 1,
    exp: "Gerrymandering involves drawing district lines to pack opponents into a few districts or spread their votes thinly across many, reducing their overall political influence."
  },
  {
    q: "What is the main role of an independent electoral commission?",
    opts: ["To campaign on behalf of all registered candidates", "To write new legislation after elections conclude", "To oversee, administer, and ensure the integrity of elections", "To announce which candidates are legally permitted to stand"],
    ans: 2,
    exp: "Independent electoral commissions manage voter rolls, organise polling, count and certify ballots, handle complaints, and issue official results — all impartially."
  },
  {
    q: "What does 'proportional representation' mean?",
    opts: ["Each individual vote counts for a fraction of a ballot", "A party's share of seats in parliament matches its share of the popular vote", "Candidates must win a majority of geographic districts", "Citizens vote in proportion to their income or tax bracket"],
    ans: 1,
    exp: "Under proportional representation, if a party wins 30% of the vote, it receives roughly 30% of seats — unlike FPTP where winner-takes-all in each district can produce very uneven outcomes."
  }
];

const GLOSSARY_DATA = [
  { term: "Ballot", def: "The official document — paper or electronic — on which a voter marks their choices during an election." },
  { term: "By-election", def: "A special election held to fill a vacant seat between regular general elections, usually caused by death, resignation, or disqualification of the sitting member." },
  { term: "Caucus", def: "A meeting of party members who openly discuss and vote to select candidates or delegates, as opposed to a secret-ballot primary election." },
  { term: "Constituency / District", def: "A geographic area whose residents collectively elect a representative to a legislative body such as parliament or congress." },
  { term: "Electoral College", def: "In the US, a body of electors chosen by each state to formally elect the President and Vice President, based on the popular vote outcome in each state." },
  { term: "Franchise / Suffrage", def: "The legal right to vote in public elections. Universal suffrage means all adult citizens have the right to vote regardless of gender, race, or class." },
  { term: "Gerrymandering", def: "Drawing electoral district boundaries in a way intentionally designed to favour one political party or demographic group over another." },
  { term: "Incumbent", def: "The current holder of a political office who is seeking re-election to that same position." },
  { term: "Mandate", def: "The authority granted to an elected government or official by voters to carry out a specific policy agenda or programme." },
  { term: "Polling Station", def: "A designated physical location where registered voters go to cast their ballots on Election Day." },
  { term: "Primary Election", def: "A preliminary election in which voters within a party select their preferred candidate who will then represent the party in the general election." },
  { term: "Proportional Representation", def: "An electoral system designed so that parties gain seats in a legislature in direct proportion to the percentage of votes they receive nationwide." },
  { term: "Referendum", def: "A direct vote by the entire electorate on a specific question or proposal, such as a constitutional amendment, policy change, or independence." },
  { term: "Run-off Election", def: "A second election held when no candidate achieves the required threshold (usually a majority) in the first round of voting." },
  { term: "Term Limit", def: "A legal restriction on the number of terms or years an elected official may serve consecutively in a particular public office." },
  { term: "Voter Turnout", def: "The percentage of eligible registered voters who actually cast a ballot in a given election. High turnout is generally seen as a sign of civic engagement." }
];

const QUICK_QUESTIONS = [
  "What is the Electoral College?",
  "How does mail-in voting work?",
  "What is voter suppression?",
  "What makes an election free and fair?",
  "How are votes counted accurately?"
];

/* ── TAB SWITCHING ────────────────────────────────────────────── */

function switchTab(name, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (btn) btn.classList.add('active');
}

/* ── TIMELINE ─────────────────────────────────────────────────── */

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = TIMELINE_DATA.map((item, i) => `
    <div class="tl-item" onclick="toggleDetail(${i})" id="tl-item-${i}">
      <div class="tl-dot ${item.dot}"></div>
      <div class="tl-card">
        <div class="tl-step">${item.step}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-desc">${item.desc}</div>
        <div class="tl-expand-hint" id="hint-${i}">▼ Tap to learn more</div>
        <div class="tl-detail" id="detail-${i}">${item.detail}</div>
      </div>
    </div>
  `).join('');
}

function toggleDetail(i) {
  const detail = document.getElementById('detail-' + i);
  const hint   = document.getElementById('hint-' + i);
  const isOpen = detail.classList.contains('open');
  detail.classList.toggle('open');
  hint.textContent = isOpen ? '▼ Tap to learn more' : '▲ Tap to collapse';
}

/* ── VOTING CARDS & SYSTEMS ───────────────────────────────────── */

function renderVotingCards() {
  const grid = document.getElementById('voting-cards-container');
  grid.innerHTML = VOTING_CARDS.map(v => `
    <div class="info-card">
      <div class="info-card-icon-wrap">${v.icon}</div>
      <h3>${v.title}</h3>
      <p>${v.text}</p>
    </div>
  `).join('');

  const systems = document.getElementById('systems-container');
  systems.innerHTML = SYSTEMS_DATA.map(s => `
    <div class="system-card">
      <div class="system-card-name">${s.name}</div>
      <span class="system-card-tag">${s.tag}</span>
      <p>${s.desc}</p>
      <div class="system-card-example">${s.example}</div>
    </div>
  `).join('');
}

/* ── GLOSSARY ─────────────────────────────────────────────────── */

function renderGlossary(filter = '') {
  const f        = filter.toLowerCase().trim();
  const filtered = GLOSSARY_DATA.filter(g =>
    g.term.toLowerCase().includes(f) || g.def.toLowerCase().includes(f)
  );

  const countEl = document.getElementById('search-count');
  if (countEl) countEl.textContent = `${filtered.length} term${filtered.length !== 1 ? 's' : ''}`;

  const list = document.getElementById('glossary-list');
  if (filtered.length === 0) {
    list.innerHTML = `<div class="no-results">No terms found for "<strong>${filter}</strong>"</div>`;
    return;
  }

  list.innerHTML = filtered.map(g => `
    <div class="glossary-item" onclick="toggleGloss(this)">
      <div class="glossary-term">
        ${g.term}
        <span class="glossary-toggle">▼</span>
      </div>
      <div class="glossary-def">${g.def}</div>
    </div>
  `).join('');
}

function filterGlossary(value) {
  renderGlossary(value);
}

function toggleGloss(el) {
  const def    = el.querySelector('.glossary-def');
  const toggle = el.querySelector('.glossary-toggle');
  const isOpen = def.classList.contains('open');
  def.classList.toggle('open');
  el.classList.toggle('open');
  toggle.textContent = isOpen ? '▼' : '▲';
}

/* ── QUIZ ─────────────────────────────────────────────────────── */

let quizIndex  = 0;
let score      = 0;
let answered   = false;

function renderQuiz() {
  const area = document.getElementById('quiz-area');

  if (quizIndex >= QUIZ_DATA.length) {
    const pct = Math.round((score / QUIZ_DATA.length) * 100);
    let emoji, message;
    if (score >= 6) { emoji = '🎉'; message = 'Excellent! You have a strong grasp of the election process.'; }
    else if (score >= 4) { emoji = '📚'; message = 'Good effort! Review the timeline and glossary to strengthen your knowledge.'; }
    else { emoji = '🔍'; message = 'Keep exploring! Check the other sections and try again.'; }

    area.innerHTML = `
      <div class="quiz-card quiz-result">
        <div class="quiz-result-emoji">${emoji}</div>
        <h3>You scored ${score} out of ${QUIZ_DATA.length}</h3>
        <p>${message}</p>
        <button class="retry-btn" onclick="restartQuiz()">Try Again</button>
      </div>`;

    updateProgressBar(100);
    document.getElementById('score-display').textContent = `${score} / ${QUIZ_DATA.length}`;
    document.getElementById('q-progress').textContent = 'Complete!';
    return;
  }

  answered = false;
  const q = QUIZ_DATA[quizIndex];

  document.getElementById('q-progress').textContent = `Question ${quizIndex + 1} of ${QUIZ_DATA.length}`;
  document.getElementById('score-display').textContent = `${score} / ${quizIndex}`;
  updateProgressBar(Math.round((quizIndex / QUIZ_DATA.length) * 100));

  area.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-opt" onclick="answerQ(${i})">${opt}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="qfb"></div>
      <button class="next-btn" id="next-btn" onclick="nextQ()">Next question →</button>
    </div>`;
}

function answerQ(selectedIndex) {
  if (answered) return;
  answered = true;

  const q    = QUIZ_DATA[quizIndex];
  const opts = document.querySelectorAll('.quiz-opt');

  opts.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.ans) btn.classList.add('correct');
    else if (idx === selectedIndex && selectedIndex !== q.ans) btn.classList.add('wrong');
  });

  const fb = document.getElementById('qfb');
  fb.classList.add('show');

  if (selectedIndex === q.ans) {
    score++;
    fb.classList.add('good');
    fb.innerHTML = `<strong>✓ Correct!</strong> ${q.exp}`;
  } else {
    fb.classList.add('bad');
    fb.innerHTML = `<strong>✗ Not quite.</strong> ${q.exp}`;
  }

  document.getElementById('next-btn').classList.add('show');
}

function nextQ() {
  quizIndex++;
  renderQuiz();
}

function restartQuiz() {
  quizIndex = 0;
  score     = 0;
  renderQuiz();
}

function updateProgressBar(pct) {
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = pct + '%';
}

/* ── AI ASSISTANT ─────────────────────────────────────────────── */

let chatMessages = [];

function renderQuickQs() {
  const container = document.getElementById('quick-qs');
  container.innerHTML = QUICK_QUESTIONS.map(q => `
    <button class="qq-btn" onclick="fillQuestion('${q.replace(/'/g, "\\'")}')">${q}</button>
  `).join('');
}

function fillQuestion(text) {
  const input = document.getElementById('user-input');
  input.value = text;
  input.focus();
}

function addMessage(role, text) {
  chatMessages.push({ role, text });
  renderChatMessages();
}

function renderChatMessages() {
  const cw    = document.getElementById('chat-window');
  const empty = document.getElementById('chat-empty');

  if (chatMessages.length === 0) {
    if (empty) empty.style.display = 'flex';
    return;
  }

  if (empty) empty.style.display = 'none';

  const existing = cw.querySelectorAll('.msg');
  existing.forEach(el => el.remove());

  chatMessages.forEach(m => {
    const div = document.createElement('div');
    div.className = `msg ${m.role}`;
    div.innerHTML = `
      <div class="msg-avatar ${m.role}">${m.role === 'ai' ? 'AI' : 'You'}</div>
      <div class="msg-bubble">${m.text.replace(/\n/g, '<br>')}</div>
    `;
    cw.appendChild(div);
  });

  cw.scrollTop = cw.scrollHeight;
}

function showTypingIndicator() {
  const cw  = document.getElementById('chat-window');
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="msg-avatar ai">AI</div>
    <div class="msg-bubble">
      <div class="typing"><span></span><span></span><span></span></div>
    </div>`;
  cw.appendChild(div);
  cw.scrollTop = cw.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

async function sendQuestion() {
  const input  = document.getElementById('user-input');
  const btn    = document.getElementById('send-btn');
  const question = input.value.trim();
  if (!question) return;

  const empty = document.getElementById('chat-empty');
  if (empty) empty.style.display = 'none';

  addMessage('user', question);
  input.value  = '';
  btn.disabled = true;
  showTypingIndicator();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are an expert, friendly, and strictly nonpartisan election education assistant. Help users understand election processes, voting systems, democratic institutions, and civic participation worldwide. Be clear, factual, and impartial. Keep answers concise — 2 to 4 short paragraphs. Write in plain text without any markdown symbols, asterisks, or bullet point characters.`,
        messages: [{ role: 'user', content: question }]
      })
    });

    const data = await response.json();
    removeTypingIndicator();

    const reply = data.content?.find(b => b.type === 'text')?.text
      || 'Sorry, I could not retrieve an answer right now. Please try again.';

    addMessage('ai', reply);
  } catch (error) {
    removeTypingIndicator();
    addMessage('ai', 'Sorry, I could not connect to the AI assistant right now. Please check your connection and try again.');
    console.error('API error:', error);
  }

  btn.disabled = false;
}

/* ── KEYBOARD SHORTCUT (Enter to send) ───────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('user-input');
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendQuestion();
      }
    });
  }
});

/* ── INIT ─────────────────────────────────────────────────────── */

(function init() {
  renderTimeline();
  renderVotingCards();
  renderGlossary();
  renderQuickQs();
  renderQuiz();
  renderChatMessages();
})();