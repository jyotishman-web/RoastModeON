function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function analyzeInput(text) {
  const len = text.length;
  const vowels = (text.match(/[aeiou]/gi) || []).length;
  if (len <= 3) return "short";
  if (vowels <= 2) return "dry";
  if (len >= 9) return "dramatic";
  return "normal";
}

function getMemory() {
  return JSON.parse(localStorage.getItem("roastMemory") || "[]");
}

function saveMemory(r) {
  const m = getMemory();
  m.push(r);
  localStorage.setItem("roastMemory", JSON.stringify(m.slice(-60)));
}

function generateRoast() {
  const input = document.getElementById("nameInput").value.trim();
  const mode = document.getElementById("mode").value;
  const output = document.getElementById("output");

  if (!input) {
    output.innerText =
      "Khaali chhod diya? Makes sense. Preparation bhi waise hi lag rahi hai.";
    return;
  }

  const profile = analyzeInput(input);
  const used = getMemory();

  // 🎭 Fake respect (very Carry-style)
  const intros = [
    "Bhai respect hai, lekin",
    "No hate, bas sach bol raha hoon:",
    "Galat mat samajhna, par",
    "Dil pe mat lena, par",
    "Personally kuch nahi, lekin"
  ];

  // 🧠 Core ego attack (name-aware)
  const cores = {
    short: [
      `${input} ka confidence size mein chhota, volume mein full.`,
      `${input} bolta aise hai jaise plan ready ho — execution optional.`
    ],
    dry: [
      `${input} effort daalta hai, direction bhool jaata hai.`,
      `${input} motion ko progress samajh leta hai.`
    ],
    dramatic: [
      `${input} ambition ko personality bana ke ghoom raha hai.`,
      `${input} future success pe zyada depend karta hai, present effort pe kam.`
    ],
    normal: [
      `${input} expectations high rakhta hai, standards flexible.`,
      `${input} confidence dikhata hai, consistency nahi.`
    ]
  };

  // 🔥 Carry-level exaggeration
  const exaggerations = [
    "Confidence itna hai jaise duniya hi galat ho.",
    "Self-belief unlimited, self-improvement optional.",
    "Energy full hai, planning half.",
    "Sapne HD mein hain, skills abhi buffering pe."
  ];

  // 💣 Reality slap (this is where it HITS)
  const carryFinishers = [
    "Talent aayega, bas schedule thoda unclear hai.",
    "Reality check free tha, isliye de diya.",
    "Mehnat shuru hote hi excuses line mein lag jaate hain.",
    "Potential pe zinda rehna band kar, result dikha.",
    "Bhai vibe strong hai, bas output weak hai."
  ];

  let roast;
  let tries = 0;

  do {
    roast = [
      pick(intros),
      pick(cores[profile]),
      pick(exaggerations),
      mode === "carry" ? pick(carryFinishers) : ""
    ].join(" ");
    tries++;
  } while (used.includes(roast) && tries < 10);

  saveMemory(roast);

  output.innerHTML = `
    <div class="roast-card">
      <h3>🔥 RoastModeON</h3>
      <p>${roast}</p>
    </div>
  `;
}
