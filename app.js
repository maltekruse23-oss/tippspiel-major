const players = ["Spieler 1", "Spieler 2", "Spieler 3", "Spieler 4", "Spieler 5"];
const resultOptions = ["", "1:0", "0:1", "2:0", "2:1", "1:2", "0:2", "3:0", "3:1", "3:2", "2:3", "1:3", "0:3"];

const stage1Teams = [
  "GamerLegion", "B8", "HEROIC", "BetBoom Team", "BIG", "M80", "MIBR", "SINNERS Esports",
  "NRG", "TYLOO", "Sharks Esports", "Gaimin Gladiators", "Team Liquid", "Lynn Vision Gaming",
  "THUNDERdOWNUNDER", "FlyQuest",
];
const stage2Teams = [
  "FUT Esports", "Team Spirit", "Astralis", "G2 Esports", "Legacy", "paiN Gaming", "Monte", "9z Team",
  "TBD Stage 1 #1", "TBD Stage 1 #2", "TBD Stage 1 #3", "TBD Stage 1 #4",
  "TBD Stage 1 #5", "TBD Stage 1 #6", "TBD Stage 1 #7", "TBD Stage 1 #8",
];
const stage3Teams = [
  "Team Vitality", "Natus Vincere", "Team Falcons", "The MongolZ", "PARIVISION", "Aurora Gaming", "FURIA", "MOUZ",
  "TBD Stage 2 #1", "TBD Stage 2 #2", "TBD Stage 2 #3", "TBD Stage 2 #4",
  "TBD Stage 2 #5", "TBD Stage 2 #6", "TBD Stage 2 #7", "TBD Stage 2 #8",
];

const roundPools = [
  { key: "0:0", round: 1, date: "02/6", bo: "BO1", matches: 8 },
  { key: "1:0", round: 2, date: "02/6", bo: "BO1", matches: 4 },
  { key: "0:1", round: 2, date: "02/6", bo: "BO1", matches: 4 },
  { key: "2:0", round: 3, date: "03/6", bo: "BO3", status: "ADVANCING", matches: 2 },
  { key: "1:1", round: 3, date: "03/6", bo: "BO1", matches: 4 },
  { key: "0:2", round: 3, date: "03/6", bo: "BO3", status: "ELIMINATED", matches: 2 },
  { key: "2:1", round: 4, date: "04/6", bo: "BO3", status: "ADVANCING", matches: 3 },
  { key: "1:2", round: 4, date: "04/6", bo: "BO3", status: "ELIMINATED", matches: 3 },
  { key: "2:2", round: 5, date: "05/6", bo: "BO3", status: "ADVANCING", secondStatus: "ELIMINATED", matches: 3 },
];

const stageDefs = {
  stage1: {
    title: "Stage 1",
    subtitle: "02.06.-05.06.2026 | 16 Team Swiss",
    teams: stage1Teams,
    opening: [
      ["GamerLegion", "NRG"], ["B8", "TYLOO"], ["HEROIC", "Sharks Esports"],
      ["BetBoom Team", "Gaimin Gladiators"], ["BIG", "Team Liquid"], ["M80", "Lynn Vision Gaming"],
      ["MIBR", "THUNDERdOWNUNDER"], ["SINNERS Esports", "FlyQuest"],
    ],
  },
  stage2: {
    title: "Stage 2",
    subtitle: "06.06.-09.06.2026 | 8 Invites + 8 Qualifier",
    teams: stage2Teams,
    opening: Array.from({ length: 8 }, (_, i) => [stage2Teams[i], stage2Teams[i + 8]]),
  },
  stage3: {
    title: "Stage 3",
    subtitle: "11.06.-15.06.2026 | alle Matches BO3",
    teams: stage3Teams,
    opening: Array.from({ length: 8 }, (_, i) => [stage3Teams[i], stage3Teams[i + 8]]),
  },
};

const teamOptions = [...new Set([...stage1Teams, ...stage2Teams, ...stage3Teams])];
const teamLogos = {
  "GamerLegion": "https://liquipedia.net/commons/images/thumb/2/21/GamerLegion_2026_allmode.png/49px-GamerLegion_2026_allmode.png",
  "B8": "https://liquipedia.net/commons/images/thumb/a/a6/B8_darkmode.png/42px-B8_darkmode.png",
  "HEROIC": "https://liquipedia.net/commons/images/thumb/0/0d/HEROIC_2024_allmode.png/57px-HEROIC_2024_allmode.png",
  "BetBoom Team": "https://liquipedia.net/commons/images/thumb/5/5b/BetBoom_Team_2024_allmode.png/56px-BetBoom_Team_2024_allmode.png",
  "BIG": "https://liquipedia.net/commons/images/thumb/6/69/BIG_2020_darkmode.png/35px-BIG_2020_darkmode.png",
  "M80": "https://liquipedia.net/commons/images/thumb/5/55/M80_2023_allmode.png/44px-M80_2023_allmode.png",
  "MIBR": "https://liquipedia.net/commons/images/thumb/7/72/MIBR_2018_darkmode.png/100px-MIBR_2018_darkmode.png",
  "SINNERS Esports": "https://liquipedia.net/commons/images/thumb/4/4f/SINNERS_Esports_allmode.png/39px-SINNERS_Esports_allmode.png",
  "NRG": "https://liquipedia.net/commons/images/thumb/1/16/NRG_2024_allmode.png/100px-NRG_2024_allmode.png",
  "TYLOO": "https://liquipedia.net/commons/images/thumb/5/5f/TyLoo_2016_allmode.png/56px-TyLoo_2016_allmode.png",
  "Sharks Esports": "https://liquipedia.net/commons/images/thumb/b/b4/Sharks_Esports_2026_allmode.png/100px-Sharks_Esports_2026_allmode.png",
  "Gaimin Gladiators": "https://liquipedia.net/commons/images/thumb/7/78/Gladiators_2022_allmode.png/30px-Gladiators_2022_allmode.png",
  "Team Liquid": "https://liquipedia.net/commons/images/thumb/5/59/Team_Liquid_2024_darkmode.png/44px-Team_Liquid_2024_darkmode.png",
  "Lynn Vision Gaming": "https://liquipedia.net/commons/images/thumb/e/e7/Lynn_Vision_Gaming_2024_allmode.png/74px-Lynn_Vision_Gaming_2024_allmode.png",
  "THUNDERdOWNUNDER": "https://liquipedia.net/commons/images/thumb/0/05/THUNDERdOWNUNDER_2026_allmode.png/50px-THUNDERdOWNUNDER_2026_allmode.png",
  "FlyQuest": "https://liquipedia.net/commons/images/thumb/b/b2/FlyQuest_2021_allmode.png/51px-FlyQuest_2021_allmode.png",
  "FUT Esports": "https://liquipedia.net/commons/images/thumb/0/08/Futbolist_2021_darkmode.png/26px-Futbolist_2021_darkmode.png",
  "Team Spirit": "https://liquipedia.net/commons/images/thumb/8/80/Team_Spirit_2022_darkmode.png/43px-Team_Spirit_2022_darkmode.png",
  "Astralis": "https://liquipedia.net/commons/images/thumb/3/3d/Astralis_2020_allmode.png/41px-Astralis_2020_allmode.png",
  "G2 Esports": "https://liquipedia.net/commons/images/thumb/c/cd/G2_Esports_2019_darkmode.png/44px-G2_Esports_2019_darkmode.png",
  "Legacy": "https://liquipedia.net/commons/images/thumb/3/34/Legacy_allmode.png/49px-Legacy_allmode.png",
  "paiN Gaming": "https://liquipedia.net/commons/images/thumb/d/d3/PaiN_Gaming_2023_darkmode.png/75px-PaiN_Gaming_2023_darkmode.png",
  "Monte": "https://liquipedia.net/commons/images/thumb/2/22/Monte_2022_allmode.png/35px-Monte_2022_allmode.png",
  "9z Team": "https://liquipedia.net/commons/images/thumb/9/9b/9z_Team_2024_darkmode.png/60px-9z_Team_2024_darkmode.png",
  "Team Vitality": "https://liquipedia.net/commons/images/thumb/9/96/Team_Vitality_2023_darkmode.png/41px-Team_Vitality_2023_darkmode.png",
  "Natus Vincere": "https://liquipedia.net/commons/images/thumb/9/95/Natus_Vincere_2021_allmode.png/57px-Natus_Vincere_2021_allmode.png",
  "Team Falcons": "https://liquipedia.net/commons/images/thumb/8/83/Team_Falcons_2022_allmode.png/41px-Team_Falcons_2022_allmode.png",
  "The MongolZ": "https://liquipedia.net/commons/images/thumb/2/2b/The_MongolZ_2024_03_allmode.png/39px-The_MongolZ_2024_03_allmode.png",
  "PARIVISION": "https://liquipedia.net/commons/images/thumb/9/9d/PARIVISION_allmode.png/56px-PARIVISION_allmode.png",
  "Aurora Gaming": "https://liquipedia.net/commons/images/thumb/1/1c/Aurora_Gaming_2025_allmode.png/50px-Aurora_Gaming_2025_allmode.png",
  "FURIA": "https://liquipedia.net/commons/images/thumb/a/aa/FURIA_Esports_allmode.png/51px-FURIA_Esports_allmode.png",
  "MOUZ": "https://liquipedia.net/commons/images/thumb/c/c2/MOUZ_2021_allmode.png/47px-MOUZ_2021_allmode.png",
};

const defaults = {
  activeStage: "stage1",
  mode: "player",
  currentPlayer: players[0],
  players,
  points: {
    swissWinner: 1,
    swissExact: 1,
    playoffWinner: 2,
    playoffExact: 2,
    finalWinner: 3,
    finalExact: 3,
    recordBonus: 1,
  },
  stages: Object.fromEntries(Object.entries(stageDefs).map(([stageId, stage]) => [stageId, createStageState(stageId, stage)])),
};

let state = loadState();

function createStageState(stageId, stage) {
  const matches = {};
  let globalIndex = 0;
  roundPools.forEach((pool) => {
    for (let i = 0; i < pool.matches; i += 1) {
      const opening = pool.key === "0:0" ? stage.opening[i] : null;
      const id = `${stageId}-${pool.key}-${i}`;
      matches[id] = {
        id,
        pool: pool.key,
        round: pool.round,
        date: pool.date,
        bo: stageId === "stage3" ? "BO3" : pool.bo,
        teamA: opening?.[0] ?? `TBD R${pool.round} A${i + 1}`,
        teamB: opening?.[1] ?? `TBD R${pool.round} B${i + 1}`,
        winner: "",
        result: "",
        tips: Object.fromEntries(players.map((player) => [player, { winner: "", result: "" }])),
        index: globalIndex,
      };
      globalIndex += 1;
    }
  });

  return {
    matches,
    bonus: {
      admin30: ["", ""],
      admin03: ["", ""],
      picks: Object.fromEntries(players.map((player) => [player, { pick30: ["", ""], pick03: ["", ""] }])),
    },
  };
}

function loadState() {
  const raw = localStorage.getItem("cs-major-tippspiel");
  if (!raw) return structuredClone(defaults);
  try {
    const parsed = JSON.parse(raw);
    return mergeState(structuredClone(defaults), parsed);
  } catch {
    return structuredClone(defaults);
  }
}

function mergeState(base, saved) {
  return {
    ...base,
    ...saved,
    points: { ...base.points, ...(saved.points ?? {}) },
    stages: Object.fromEntries(Object.keys(base.stages).map((key) => [
      key,
      {
        ...base.stages[key],
        ...(saved.stages?.[key] ?? {}),
        matches: { ...base.stages[key].matches, ...(saved.stages?.[key]?.matches ?? {}) },
        bonus: {
          ...base.stages[key].bonus,
          ...(saved.stages?.[key]?.bonus ?? {}),
          picks: { ...base.stages[key].bonus.picks, ...(saved.stages?.[key]?.bonus?.picks ?? {}) },
        },
      },
    ])),
  };
}

function save() {
  localStorage.setItem("cs-major-tippspiel", JSON.stringify(state));
}

function setState(mutator) {
  mutator(state);
  save();
  render();
}

function el(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
}

function select(value, options, onChange, className = "") {
  const field = el("select", className);
  options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option;
    item.textContent = option || "-";
    field.append(item);
  });
  field.value = value ?? "";
  field.addEventListener("change", (event) => onChange(event.target.value));
  return field;
}

function teamBadge(name, small = false) {
  const badge = el("span", small ? "team-badge small" : "team-badge");
  const logoUrl = teamLogos[name];
  const logo = logoUrl ? document.createElement("img") : el("span", "team-logo fallback", initials(name));
  if (logoUrl) {
    logo.className = "team-logo";
    logo.src = logoUrl;
    logo.alt = `${name} Logo`;
    logo.loading = "lazy";
    logo.referrerPolicy = "no-referrer";
    logo.addEventListener("error", () => {
      const fallback = el("span", "team-logo fallback", initials(name));
      logo.replaceWith(fallback);
    });
  }
  const label = el("span", "team-name", name || "?");
  badge.append(logo, label);
  return badge;
}

function initials(name) {
  if (!name || name.startsWith("TBD")) return "?";
  return name.split(/\s+/).map((part) => part[0]).join("").slice(0, 3).toUpperCase();
}

function getMatches(stageId, poolKey) {
  return Object.values(state.stages[stageId].matches)
    .filter((match) => match.pool === poolKey)
    .sort((a, b) => a.index - b.index);
}

function calculateMatchPoints(match, player) {
  const tip = match.tips[player] ?? {};
  if (!match.winner || !tip.winner) return 0;
  const winnerPoints = tip.winner === match.winner ? state.points.swissWinner : 0;
  const exactPoints = tip.result && tip.result === match.result ? state.points.swissExact : 0;
  return winnerPoints + exactPoints;
}

function countBonus(stageId, player, type) {
  const bonus = state.stages[stageId].bonus;
  const admin = type === "30" ? bonus.admin30 : bonus.admin03;
  const picks = type === "30" ? bonus.picks[player]?.pick30 ?? [] : bonus.picks[player]?.pick03 ?? [];
  const uniquePicks = [...new Set(picks.filter(Boolean))];
  return uniquePicks.filter((pick) => admin.includes(pick)).length * state.points.recordBonus;
}

function stageScore(stageId, player) {
  const matchPoints = Object.values(state.stages[stageId].matches).reduce((sum, match) => sum + calculateMatchPoints(match, player), 0);
  return matchPoints + countBonus(stageId, player, "30") + countBonus(stageId, player, "03");
}

function playerTotals(player) {
  const stage1 = stageScore("stage1", player);
  const stage2 = stageScore("stage2", player);
  const stage3 = stageScore("stage3", player);
  return { player, stage1, stage2, stage3, total: stage1 + stage2 + stage3 };
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.append(renderShell());
}

function renderShell() {
  const shell = el("div", "shell");
  shell.append(renderSidebar(), renderMain(), renderSecretAdminToggle());
  return shell;
}

function renderSidebar() {
  const side = el("aside", "sidebar");
  side.append(el("div", "brand-kicker", "CS2 Major"));
  side.append(el("h1", "brand-title", "Tippspiel"));
  side.append(el("p", "brand-copy", "Private Swiss-Picks fuer IEM Cologne Major 2026."));

  const playerBox = el("div", "panel compact");
  playerBox.append(el("label", "label", "Spieler"));
  playerBox.append(select(state.currentPlayer, state.players, (value) => setState((draft) => { draft.currentPlayer = value; }), "wide-select"));
  const modeHint = el("div", state.mode === "admin" ? "mode-hint admin" : "mode-hint", state.mode === "admin" ? "Admin-Modus aktiv" : "Spieler-Modus");
  playerBox.append(modeHint);
  side.append(playerBox);

  const leaderboard = el("div", "panel");
  leaderboard.append(el("h2", "", "Leaderboard"));
  const rows = state.players.map(playerTotals).sort((a, b) => b.total - a.total);
  rows.forEach((row, index) => {
    const item = el("div", index === 0 && row.total > 0 ? "leader-row winner" : "leader-row");
    item.append(el("span", "rank", `${index + 1}`), el("span", "", row.player), el("strong", "", `${row.total}`));
    leaderboard.append(item);
  });
  side.append(leaderboard);

  return side;
}

function renderSecretAdminToggle() {
  const button = el("button", state.mode === "admin" ? "secret-admin active" : "secret-admin", state.mode === "admin" ? "A" : "");
  button.title = state.mode === "admin" ? "Admin-Modus ausschalten" : "Admin-Modus";
  button.setAttribute("aria-label", state.mode === "admin" ? "Admin-Modus ausschalten" : "Admin-Modus einschalten");
  button.addEventListener("click", () => setState((draft) => {
    draft.mode = draft.mode === "admin" ? "player" : "admin";
  }));
  return button;
}

function renderMain() {
  const main = el("main", "main");
  main.append(renderTopbar(), renderStageTabs(), renderStageBoard(), renderBottomPanels());
  return main;
}

function renderTopbar() {
  const top = el("section", "topbar");
  const copy = el("div");
  copy.append(el("p", "eyebrow", "Intel Extreme Masters Cologne Major 2026"));
  copy.append(el("h2", "", "Swiss Pick'em Simulator"));
  copy.append(el("p", "subtle", "Tipps, Admin-Ergebnisse und Bonus-Picks in einer Web-App."));
  top.append(copy);

  const actions = el("div", "actions");
  const reset = el("button", "ghost", "Reset Demo");
  reset.addEventListener("click", () => {
    if (confirm("Demo-Daten wirklich zuruecksetzen?")) {
      localStorage.removeItem("cs-major-tippspiel");
      state = structuredClone(defaults);
      save();
      render();
    }
  });
  actions.append(reset);
  top.append(actions);
  return top;
}

function renderStageTabs() {
  const wrap = el("section", "stage-tabs");
  Object.entries(stageDefs).forEach(([stageId, stage]) => {
    const button = el("button", state.activeStage === stageId ? "stage-tab active" : "stage-tab");
    const label = el("span", "", stage.title);
    const sub = el("small", "", stage.subtitle);
    button.append(label, sub);
    button.addEventListener("click", () => setState((draft) => { draft.activeStage = stageId; }));
    wrap.append(button);
  });
  return wrap;
}

function renderStageBoard() {
  const stageId = state.activeStage;
  const stage = stageDefs[stageId];
  const board = el("section", "board-card");
  const heading = el("div", "board-heading");
  heading.append(el("h3", "", stage.title), el("span", "", stage.subtitle));
  board.append(heading);

  const grid = el("div", "swiss-grid");
  const columns = [
    ["0:0"],
    ["1:0", "0:1"],
    ["2:0", "1:1", "0:2"],
    ["2:1", "1:2"],
    ["2:2"],
  ];
  columns.forEach((columnPools, index) => {
    const column = el("div", `round-column r${index + 1}`);
    columnPools.forEach((poolKey) => {
      const pool = roundPools.find((item) => item.key === poolKey);
      column.append(renderPool(stageId, pool));
    });
    grid.append(column);
  });
  board.append(grid);
  return board;
}

function renderPool(stageId, pool) {
  const card = el("div", "pool-card");
  const header = el("div", "pool-header");
  const left = el("span", "date", pool.date);
  const score = el("strong", "score", pool.key);
  const right = el("span", "bo", stageId === "stage3" ? "BO3" : pool.bo);
  header.append(left, score, right);
  if (pool.status === "ADVANCING") card.append(el("div", "status advancing", "ADVANCING"));
  card.append(header);

  getMatches(stageId, pool.key).forEach((match) => {
    card.append(renderMatch(match, stageId));
  });

  if (pool.status === "ELIMINATED" || pool.secondStatus === "ELIMINATED") {
    card.append(el("div", "status eliminated", "ELIMINATED"));
  }
  return card;
}

function renderMatch(match, stageId) {
  const row = el("div", "match-row");
  const player = state.currentPlayer;
  const tip = match.tips[player] ?? { winner: "", result: "" };

  const teamA = state.mode === "admin"
    ? select(match.teamA, teamOptions, (value) => setState((draft) => { draft.stages[stageId].matches[match.id].teamA = value; }), "team-select")
    : teamButton(match, stageId, "teamA", tip.winner === match.teamA);
  const versus = el("span", "versus", "VS");
  const teamB = state.mode === "admin"
    ? select(match.teamB, teamOptions, (value) => setState((draft) => { draft.stages[stageId].matches[match.id].teamB = value; }), "team-select")
    : teamButton(match, stageId, "teamB", tip.winner === match.teamB);

  row.append(teamA, versus, teamB);

  const controls = el("div", "match-controls");
  if (state.mode === "admin") {
    controls.append(select(match.winner, ["", match.teamA, match.teamB], (value) => setState((draft) => { draft.stages[stageId].matches[match.id].winner = value; }), "mini-select"));
    controls.append(select(match.result, resultOptions, (value) => setState((draft) => { draft.stages[stageId].matches[match.id].result = value; }), "mini-select"));
  } else {
    controls.append(select(tip.result, resultOptions, (value) => setState((draft) => { draft.stages[stageId].matches[match.id].tips[player].result = value; }), "mini-select"));
    controls.append(el("span", "points-pill", `${calculateMatchPoints(match, player)} P`));
  }
  row.append(controls);
  return row;
}

function teamButton(match, stageId, side, active) {
  const name = match[side];
  const button = el("button", active ? "team-button picked" : "team-button");
  button.append(teamBadge(name, true));
  button.addEventListener("click", () => setState((draft) => {
    draft.stages[stageId].matches[match.id].tips[state.currentPlayer].winner = name;
  }));
  return button;
}

function renderBottomPanels() {
  const wrap = el("section", "bottom-grid");
  wrap.append(renderBonusPanel(), renderPointsPanel(), renderAdminHelp());
  return wrap;
}

function renderBonusPanel() {
  const stageId = state.activeStage;
  const bonus = state.stages[stageId].bonus;
  const player = state.currentPlayer;
  const panel = el("div", "panel wide");
  panel.append(el("h2", "", "3:0 / 0:3 Bonus"));
  panel.append(el("p", "subtle", "Je Stage zwei Teams tippen. Ein Treffer gibt aktuell 1 Punkt."));

  [["3:0", "admin30", "pick30"], ["0:3", "admin03", "pick03"]].forEach(([label, adminKey, pickKey]) => {
    const row = el("div", "bonus-row");
    row.append(el("strong", "", label));
    if (state.mode === "admin") {
      row.append(select(bonus[adminKey][0], teamOptions, (value) => setState((draft) => { draft.stages[stageId].bonus[adminKey][0] = value; }), "wide-select"));
      row.append(select(bonus[adminKey][1], teamOptions, (value) => setState((draft) => { draft.stages[stageId].bonus[adminKey][1] = value; }), "wide-select"));
    } else {
      row.append(select(bonus.picks[player][pickKey][0], teamOptions, (value) => setState((draft) => { draft.stages[stageId].bonus.picks[player][pickKey][0] = value; }), "wide-select"));
      row.append(select(bonus.picks[player][pickKey][1], teamOptions, (value) => setState((draft) => { draft.stages[stageId].bonus.picks[player][pickKey][1] = value; }), "wide-select"));
      row.append(el("span", "points-pill", `${countBonus(stageId, player, label === "3:0" ? "30" : "03")} P`));
    }
    panel.append(row);
  });
  return panel;
}

function renderPointsPanel() {
  const panel = el("div", "panel");
  panel.append(el("h2", "", "Punktesystem"));
  const entries = [
    ["Swiss Sieger", state.points.swissWinner],
    ["Swiss Ergebnis", state.points.swissExact],
    ["3:0 / 0:3 Treffer", state.points.recordBonus],
    ["Playoff Sieger", state.points.playoffWinner],
    ["Final Sieger", state.points.finalWinner],
  ];
  entries.forEach(([label, value]) => {
    const row = el("div", "score-row");
    row.append(el("span", "", label), el("strong", "", `${value}`));
    panel.append(row);
  });
  return panel;
}

function renderAdminHelp() {
  const panel = el("div", "panel");
  panel.append(el("h2", "", "Admin"));
  panel.append(el("p", "subtle", "Im Admin-Modus Teams, Gewinner und Ergebnis setzen. Im Spieler-Modus tippt jeder nur fuer den ausgewaehlten Namen."));
  const total = playerTotals(state.currentPlayer);
  const stats = el("div", "stat-box");
  stats.append(el("span", "", "Deine Punkte"), el("strong", "", `${total.total}`));
  panel.append(stats);
  return panel;
}

render();
