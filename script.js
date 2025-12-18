function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function analyze(text) {
  if (text.length <= 3) return "tiny";
  if (text.length >= 10) return "overconfident";
  return "average";
}

function memory() {
  return JSON.parse(localStorage.getItem("aggressiveMemory") || "[]");
}

function save(r) {
  const m = memory();
  m.push(r);
  localStorage.setItem("aggressiveMemory", JSON.stringify(m.slice(-80)));
}

function generateRoast() {
  const input = document.getElementById("nameInput").value.trim();
  const mode = document.getElementById("mode").value;
  const output = document.getElementById("output");

  if (!input) {
    output.innerText =
      "Blank input. Same energy you bring to execution.";
    return;
  }

  const profile = analyze(input);
  const used = memory();

  // 🎭 Fake politeness (very dangerous)
  const openings = [
    "No disrespect intended, but",
    "I’m saying this calmly:",
    "Take this constructively:",
    "Not attacking you, just stating facts:",
    "Let’s be brutally honest:"
  ];

  // 🔥 Aggressive ego exposure
  const cores = {
    tiny: [
      `${input} talks big for someone operating on minimal preparation.`,
      `${input} has loud confidence with quiet results.`
    ],
    overconfident: [
      `${input} treats ambition like a substitute for discipline.`,
      `${input} believes confidence alone should carry the outcome.`
    ],
    average: [
      `${input} moves like effort guarantees success.`,
      `${input} expects results without respecting the process.`
    ]
  };

  // 💣 Pressure escalation
  const escalations = [
    "Self-belief is high, self-awareness is missing.",
    "You confuse motion with progress.",
    "Energy is present, direction is not.",
    "You’re busy, not effective.",
    "Motivation shows up, consistency does not."
  ];

  // ☠️ Ruthless closers (this is the slap)
  const finishers = [
    "Reality keeps exposing the gap.",
    "Confidence isn’t covering the deficit anymore.",
    "Results are the only thing not impressed.",
    "Potential has expired.",
    "Excuses are working harder than you are.",
    "The illusion is strong. The output is weak."
  ];

  let roast;
  let attempts = 0;

  do {
    roast = [
      pick(openings),
      pick(cores[profile]),
      pick(escalations),
      mode === "aggressive" ? pick(finishers) : ""
    ].join(" ");
    attempts++;
  } while (used.includes(roast) && attempts < 12);

  save(roast);

  output.innerHTML = `
    <div class="roast-card">
      <h3>🔥 RoastModeON</h3>
      <p>${roast}</p>
    </div>
  `;
}
