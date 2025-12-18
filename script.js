function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRoast() {
  const input = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.innerText =
      "Leaving it blank somehow says more than typing ever could.";
    return;
  }

  // 🧨 LAYER 1 — Openings
  const openings = [
    "Let’s not sugarcoat it:",
    "Respectfully speaking,",
    "No personal attack here, but",
    "Objectively evaluated,",
    "With full honesty,",
    "This is constructive criticism:",
    "Purely observationally,",
    "Not trying to be rude, however,"
  ];

  // 🎯 LAYER 2 — Target framing
  const frames = [
    `${input} has the confidence of a keynote speaker`,
    `${input} moves like someone who read half the instructions`,
    `${input} gives strong “future success” energy`,
    `${input} operates like effort guarantees results`,
    `${input} behaves like preparation is optional`,
    `${input} approaches life with impressive optimism`,
    `${input} shows up mentally, just not strategically`,
    `${input} believes potential should be enough`
  ];

  // 🔥 LAYER 3 — Core savage burns
  const cores = [
    "but execution keeps missing the deadline",
    "while reality keeps correcting the expectations",
    "and consistency refuses to cooperate",
    "yet discipline never fully committed",
    "but follow-through quietly disappeared",
    "while progress took a different route",
    "but results didn’t get invited",
    "and accountability chose not to attend",
    "while effort peaked emotionally, not practically",
    "but planning stopped at motivation"
  ];

  // 🧠 LAYER 4 — Psychological twists
  const twists = [
    "Confidence is doing most of the work here.",
    "Self-awareness is clearly optional.",
    "Ambition arrived early; skills are still buffering.",
    "The mindset is elite, the habits are not.",
    "Motivation showed up, structure did not.",
    "The vision is strong, the system is weak.",
    "Energy is high, direction is negotiable.",
    "The idea is premium, execution is trial version.",
    "Potential detected, consistency pending.",
    "Growth wants commitment, not enthusiasm."
  ];

  // 💀 LAYER 5 — Finishers (the kill shot, still safe)
  const finishers = [
    "It’s bold. Not effective, but bold.",
    "Impressive confidence, questionable results.",
    "The effort is emotional, not strategic.",
    "Progress will require a firmware update.",
    "It’s a journey — just not a fast one.",
    "Results are still under construction.",
    "The vibes are strong, outcomes are average.",
    "Reality remains unconvinced.",
    "Consistency has left the building.",
    "Execution is currently on backorder."
  ];

  // 🎲 FINAL ROAST
  const roast = [
    pick(openings),
    pick(frames),
    pick(cores) + ".",
    pick(twists),
    pick(finishers)
  ].join(" ");

  output.innerText = roast;
}
