function generateRoast() {
  const name = document.getElementById("nameInput").value.trim();
  const level = document.getElementById("roastLevel").value;
  const output = document.getElementById("output");

  if (name === "") {
    output.innerText = "Please enter something to roast 😄";
    return;
  }

  const mildRoasts = [
    `${name}, you’re not lazy — you’re just on energy-saving mode.`,
    `${name}, you have a talent for making simple things look difficult.`,
    `${name}, you’re proof that perfection takes practice… lots of it.`
  ];

  const smartRoasts = [
    `${name}, your brain is powerful, but it prefers running in demo mode.`,
    `${name}, if overthinking burned calories, you’d be a fitness icon.`,
    `${name}, you don’t need Google — confusion follows you naturally.`
  ];

  const roast =
    level === "mild"
      ? mildRoasts[Math.floor(Math.random() * mildRoasts.length)]
      : smartRoasts[Math.floor(Math.random() * smartRoasts.length)];

  output.innerText = roast;
}
