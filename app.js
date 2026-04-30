/* ============================================================
   KYSGBS – Gestion des Absences
   app.js (Version Optimisée avec Sélection Rapide)
   ============================================================ */

// ── STATE ──────────────────────────────────────────────────────
const dateJour   = new Date().toISOString().split('T')[0];
let elevesData   = [];
let classeActive = '';

// ── STORAGE HELPERS ────────────────────────────────────────────
function storageKey(classe)          { return `appel_${dateJour}_${classe}`; }
function loadEtats(classe)           { return JSON.parse(localStorage.getItem(storageKey(classe))) || {}; }
function saveEtats(classe, etats)    { localStorage.setItem(storageKey(classe), JSON.stringify(etats)); }

// ── DATE DISPLAY ───────────────────────────────────────────────
document.getElementById('date-display').innerText =
  new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day:     'numeric',
    month:   'long',
    year:    'numeric'
  });

// ── NETTOYAGE DES LOGS > 30 JOURS ──────────────────────────────
function cleanOldLogs() {
  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith('appel_')) return;
    const dateStr = key.split('_')[1];
    const diff    = (new Date() - new Date(dateStr)) / 86400000;
    if (diff > 30) localStorage.removeItem(key);
  });
}

// ── INIT ───────────────────────────────────────────────────────
async function init() {
  cleanOldLogs();
  try {
    const res  = await fetch('eleves.json');
    elevesData = await res.json();
    populateClasseSelect();
    render();
  } catch (e) {
    document.getElementById('liste-eleves').innerHTML =
      '<div class="empty"><span>⚠️</span>Impossible de charger les élèves.</div>';
  }
}

// ── SÉLECTEUR DE CLASSE ────────────────────────────────────────
function populateClasseSelect() {
  const classes = [...new Set(elevesData.map(e => e.classe))].sort();
  classeActive  = classes[0] || '';

  const sel    = document.getElementById('classe-select');
  sel.innerHTML = classes.map(c => `<option value="${c}">${c}</option>`).join('');
  sel.value     = classeActive;

  sel.addEventListener('change', () => {
    classeActive = sel.value;
    render();
  });
}

// ── FONCTIONS D'ACTION ─────────────────────────────────────────
function setStatut(id, statut) {
  const etats = loadEtats(classeActive);
  etats[id]   = statut;
  saveEtats(classeActive, etats);
  render();
}

// NOUVEAU : Marquer toute la classe présente d'un coup
function toutPresent() {
  const etats = loadEtats(classeActive);
  const elevesFiltres = elevesData.filter(e => e.classe === classeActive);
  
  elevesFiltres.forEach(eleve => {
    etats[eleve.id] = 'p';
  });
  
  saveEtats(classeActive, etats);
  render();
  showToast('Toute la classe est marquée Présente ✓');
}

// ── RENDU DE LA LISTE ──────────────────────────────────────────
function render() {
  const container     = document.getElementById('liste-eleves');
  const elevesFiltres = elevesData.filter(e => e.classe === classeActive);
  const etats         = loadEtats(classeActive);
  const counts        = { p: 0, r: 0, a: 0 };

  if (elevesFiltres.length === 0) {
    container.innerHTML = '<div class="empty"><span>🏫</span>Aucun élève dans cette classe.</div>';
    updateCounts(0, 0, 0, 0);
    return;
  }

  // Ajout du bouton "Tout Présent" en haut de la liste
  container.innerHTML = `
    <div style="margin-bottom: 15px;">
      <button onclick="toutPresent()" class="btn-reset" style="color: #4CAF25; border: 1px solid #4CAF25; padding: 10px; border-radius: 12px; width: 100%; font-weight: 800; background: #E8F5E2;">
        ✅ Marquer toute la classe Présente
      </button>
    </div>
  `;

  elevesFiltres.forEach((eleve, idx) => {
    const statut = etats[eleve.id] || 'p';
    counts[statut]++;

    const card        = document.createElement('div');
    card.className    = `eleve-card statut-${statut}`;
    card.innerHTML    = `
      <div class="eleve-info">
        <span class="eleve-num">${String(idx + 1).padStart(2, '0')}</span>
        <span class="eleve-nom">${eleve.nom}</span>
      </div>
      <div class="btn-group">
        <button class="btn-statut btn-p ${statut === 'p' ? 'active' : ''}"
                onclick="setStatut(${eleve.id}, 'p')" title="Présent">P</button>
        <button class="btn-statut btn-r ${statut === 'r' ? 'active' : ''}"
                onclick="setStatut(${eleve.id}, 'r')" title="Retard">R</button>
        <button class="btn-statut btn-a ${statut === 'a' ? 'active' : ''}"
                onclick="setStatut(${eleve.id}, 'a')" title="Absent">A</button>
      </div>
    `;
    container.appendChild(card);
  });

  updateCounts(elevesFiltres.length, counts.p, counts.r, counts.a);
}

// ── MISE À JOUR DES COMPTEURS ──────────────────────────────────
function updateCounts(total, p, r, a) {
  document.getElementById('count-total').innerText = total;
  document.getElementById('count-p').innerText     = p;
  document.getElementById('count-r').innerText     = r;
  document.getElementById('count-a').innerText     = a;
}

// ── RAPPORT WHATSAPP OPTIMISÉ ──────────────────────────────────
function genererRapport() {
  const etats    = loadEtats(classeActive);
  const filtres  = elevesData.filter(e => e.classe === classeActive);
  const absents  = filtres.filter(e => etats[e.id] === 'a').map(e => `• ${e.nom}`);
  const retards  = filtres.filter(e => etats[e.id] === 'r').map(e => `• ${e.nom}`);
  const presents = filtres.filter(e => (etats[e.id] || 'p') === 'p').length;

  const dateStr = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day:     'numeric',
    month:   'long',
    year:    'numeric'
  });

  const message =
    `📊 *RAPPORT D'APPEL — KYSGBS*\n` +
    `🏫 Classe : *${classeActive}*\n` +
    `📅 ${dateStr}\n\n` +
    `✅ Présents : *${presents}/${filtres.length}*\n` +
    `⏳ Retards  : *${retards.length}*${retards.length ? '\n' + retards.join('\n') : ''}\n` +
    `❌ Absents  : *${absents.length}*${absents.length ? '\n' + absents.join('\n') : ''}\n\n` +
    `_Rapport généré via KYSGBS App_`;

  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  showToast('Rapport prêt pour WhatsApp ✓');
}

// ── RÉINITIALISATION ───────────────────────────────────────────
function reinitialiserAppel() {
  if (confirm(`Réinitialiser l'appel de la classe ${classeActive} pour aujourd'hui ?`)) {
    localStorage.removeItem(storageKey(classeActive));
    render();
    showToast('Appel réinitialisé');
  }
}

// ── TOAST ──────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── DÉMARRAGE ──────────────────────────────────────────────────
init();
