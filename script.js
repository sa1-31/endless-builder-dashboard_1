const container = document.getElementById("builders");
const maxContrib = Math.max(...builders.map(b => b.contributions));

builders.forEach((b, i) => {
  const div = document.createElement("div");
  div.className = "card";

  if (b.contributions === maxContrib) {
    div.classList.add("top-builder");
  }

  div.innerHTML = `
    ${b.contributions === maxContrib ? `<span class="top-badge">🏆 Top Builder</span>` : ""}
    <span class="rank">#${i + 1}</span>
    <h3>${b.name}</h3>
    <span class="level ${b.level.toLowerCase()}">${b.level} Level</span>
    <p><strong>${b.contributions}</strong> contributions</p>
    <div class="badges">
      ${b.types.map(t => {
        const icon =
          t === "Code" ? "💻" :
          t === "Docs" ? "📚" :
          t === "Tools" ? "🛠️" :
          "🧪";
        return `<span>${icon} ${t}</span>`;
      }).join("")}
    </div>
  `;

  container.appendChild(div);
});

/* NAV */
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".nav-btn,.page")
      .forEach(el => el.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  };
});

/* SUBMIT */
document.getElementById("submitForm").onsubmit = e => {
  e.preventDefault();
  alert("Submission sent!");
  e.target.reset();
};
