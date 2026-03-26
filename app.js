/* === NAVIGATION === */
let lastScreen = 'screen-home';
function goScreen(id) {
    if(id !== 'screen-exercise-detail') lastScreen = id;
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.toggle('active', s.id === id);
        s.classList.toggle('hidden', s.id !== id);
    });
    if (id === 'screen-progress') updateProgressStats();
}
function goBack() { goScreen(lastScreen); }

function showApkInfo() {
    const msg = {
        es: "Para instalar en Android:\n1. Abre esta página en Chrome.\n2. Presiona el menú (⋮).\n3. Elige 'Instalar aplicación'.",
        en: "To install on Android:\n1. Open this page in Chrome.\n2. Press the menu (⋮).\n3. Choose 'Install app'.",
        fr: "Pour installer sur Android:\n1. Ouvrez cette page dans Chrome.\n2. Appuyez sur le menu (⋮).\n3. Choisissez 'Installer l'application'.",
        pt: "Para instalar no Android:\n1. Abra esta página no Chrome.\n2. Pressione o menu (⋮).\n3. Escolha 'Instalar aplicativo'."
    };
    alert(msg[localStorage.getItem('fitalpha_lang') || 'es']);
}

/* === LANGUAGE SYSTEM === */
const translations = {
    es: { 
        welcome_title: "Tu entrenamiento,<br><span>tu disciplina.</span>",
        calisthenics: "Calistenia", my_gym: "Mi Gimnasio", running: "Running", breathing: "Respiración", habits: "Hábitos", calculator: "Calculadora", packs: "Packs", settings: "Ajustes", apk: "APK", progress: "Progreso", exercise: "Ejercicio", desc: "Descripción", instructions: "Instrucciones", sets: "Series", rest_timer: "Descanso", start_rest: "Iniciar", lvl_beg: "Principiante", lvl_int: "Intermedio", lvl_adv: "Avanzado", lvl_elite: "Élite", ai_sub: "Fitness IA",
        search: "Buscar...", all: "Todos", push: "Empuje", pull: "Tracción", legs: "Piernas", core: "Core", cardio: "Cardio", settings_desc: "Cuenta y Opciones", packs_desc: "Rutinas express por zona"
    },
    en: { 
        welcome_title: "Your training,<br><span>your discipline.</span>",
        calisthenics: "Calisthenics", my_gym: "My Gym", running: "Running", breathing: "Breathing", habits: "Habits", calculator: "Calculator", packs: "Packs", settings: "Settings", apk: "APK", progress: "Progress", exercise: "Exercise", desc: "Description", instructions: "Instructions", sets: "Sets", rest_timer: "Rest", start_rest: "Start", lvl_beg: "Beginner", lvl_int: "Intermediate", lvl_adv: "Advanced", lvl_elite: "Elite", ai_sub: "Fitness AI",
        search: "Search...", all: "All", push: "Push", pull: "Pull", legs: "Legs", core: "Core", cardio: "Cardio", settings_desc: "Account and Options", packs_desc: "Express routines by zone"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('fitalpha_lang', lang);
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    renderExercises(); renderHabits(); renderGym();
    const s1 = document.getElementById('lang-select-set'); if(s1) s1.value = lang;
}

/* === EXERCISES === */
const exercises = [
    {name:"Flexiones Básicas",cat:"Empuje",level:"principiante",muscle:"Pecho",icon:"💪",desc:"Pecho y tríceps.",steps:["Cuerpo recto","Baja y sube"],sets:"3 x 12"},
    {name:"Sentadillas",cat:"Piernas",level:"principiante",muscle:"Piernas",icon:"🦵",desc:"Cuádriceps y glúteos.",steps:["Pies al ancho hombros","Baja cadera"],sets:"3 x 15"},
    {name:"Dominadas",cat:"Tracción",level:"intermedio",muscle:"Espalda",icon:"🆙",desc:"Dorsales y bíceps.",steps:["Sube mentón sobre barra","Baja lento"],sets:"4 x 8"}
];
// Filling 100 exercises
for(let i=1; i<=97; i++) {
    exercises.push({name:"Ejercicio Calistenia "+i,cat:"Híbrido",level:i<30?"principiante":i<70?"intermedio":"avanzado",muscle:"Cuerpo",icon:"🔥",desc:"Entrenamiento funcional.",steps:["Enfoque","Control"],sets:"3 x 10"});
}

let currentLevel = 'principiante';
let currentCat = 'Todos';
const allCats = ['Todos', 'Empuje', 'Tracción', 'Piernas', 'Core', 'Cardio'];

function renderCatFilter() {
    const el = document.getElementById('cat-filter');
    if(el) el.innerHTML = allCats.map(c => `<button class="cat-chip ${c===currentCat?'active':''}" onclick="filterCat(this,'${c}')">${c}</button>`).join('');
}
function filterLevel(btn) {
    document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.getAttribute('data-level');
    renderExercises();
}
function filterCat(btn, cat) {
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    currentCat = cat;
    renderExercises();
}

function renderExercises() {
    const list = document.getElementById('exercise-list');
    if(!list) return;
    const filtered = exercises.filter(e => e.level === currentLevel && (currentCat === 'Todos' || e.cat === currentCat));
    list.innerHTML = filtered.map(e => `
        <div class="exercise-item" onclick="showDetail(${exercises.indexOf(e)})">
            <div class="ex-icon">${e.icon}</div>
            <div class="ex-info"><strong>${e.name}</strong><span>${e.cat} • ${e.muscle}</span></div>
            <span class="ex-badge ${e.level}">${e.level.toUpperCase()}</span>
        </div>`).join('');
}

function showDetail(idx) {
    let e = exercises[idx];
    if(!e && typeof gymExercises !== 'undefined') e = gymExercises[idx];
    if(!e) return;
    document.getElementById('detail-name').textContent = e.name;
    document.getElementById('detail-desc').textContent = e.desc;
    document.getElementById('detail-steps').innerHTML = (e.steps || ["Control"]).map(s => `<li>${s}</li>`).join('');
    
    const img = document.getElementById('exercise-real-img');
    let imgId = "1534438327202-c02f247d1b11"; 
    if(e.cat === 'Empuje') imgId = "1571019613484-1b0a889b703e";
    if(img) img.src = `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&q=80&w=800`;
    
    goScreen('screen-exercise-detail');
}

/* === AURORA DRAGGABLE AI === */
let isDragging = false, startX, startY, initialX, initialY;
const bubble = document.getElementById('aurora-btn');
bubble.addEventListener('mousedown', dStart);
bubble.addEventListener('touchstart', dStart, {passive:false});

function dStart(e) {
    isDragging = false; const p = e.touches ? e.touches[0] : e;
    startX = p.clientX; startY = p.clientY;
    const r = bubble.getBoundingClientRect(); initialX = r.left; initialY = r.top;
    document.addEventListener('mousemove', dMove); document.addEventListener('touchmove', dMove, {passive:false});
    document.addEventListener('mouseup', dEnd); document.addEventListener('touchend', dEnd);
}
function dMove(e) {
    const p = e.touches ? e.touches[0] : e;
    const dx = p.clientX - startX, dy = p.clientY - startY;
    if(Math.abs(dx)>10 || Math.abs(dy)>10) {
        isDragging = true;
        bubble.style.left = (initialX + dx) + 'px'; bubble.style.top = (initialY + dy) + 'px';
        bubble.style.right = 'auto'; bubble.style.bottom = 'auto';
    }
}
function dEnd() {
    document.removeEventListener('mousemove', dMove); document.removeEventListener('touchmove', dMove);
    document.removeEventListener('mouseup', dEnd); document.removeEventListener('touchend', dEnd);
}

function toggleAurora() { if(!isDragging) document.getElementById('aurora-chat').classList.toggle('active'); }
function toggleWidget(hide) {
    bubble.style.display = hide ? 'none' : 'flex';
    document.getElementById('restore-widget-btn').style.display = hide ? 'flex' : 'none';
    if(hide) document.getElementById('aurora-chat').classList.remove('active');
}
function checkAuroraKey(e) { if(e.key==='Enter') sendAurora(); }
function sendAurora() {
    const inp = document.getElementById('aurora-input');
    const val = inp.value.trim().toLowerCase(); if(!val) return;
    addMsg(inp.value, 'user'); inp.value = '';
    setTimeout(() => {
        let r = "La disciplina es el puente entre las metas y los logros.";
        if(val.includes('hola')) r = "¡Hola! Soy Coach Aurora. ¿Lista para superar tus límites hoy?";
        addMsg(r, 'ai');
    }, 800);
}
function addMsg(t, type) {
    const h = document.getElementById('aurora-history');
    const m = document.createElement('div'); m.className='msg '+type; m.textContent=t;
    h.appendChild(m); h.scrollTop = h.scrollHeight;
}

/* === HABITS === */
const habitData = {
    entrenamiento: [{id:'h1',title:'Entreno 30m',desc:'Fuerza/Cardio'},{id:'h2',title:'10k Pasos',desc:'Movilidad'}],
    nutricion: [{id:'h3',title:'Agua 3L',desc:'Hidratación'},{id:'h4',title:'No Azúcar',desc:'Salud'}],
    mente: [{id:'h5',title:'Meditación',desc:'Paz mental'},{id:'h6',title:'Lectura',desc:'Conocimiento'}],
    sueno: [{id:'h7',title:'8h Sueño',desc:'Recuperación'},{id:'h8',title:'No Pantallas',desc:'Descanso'}]
};
function showHabitSection(c) {
    document.querySelectorAll('.habit-section').forEach(s => s.classList.add('hidden'));
    document.getElementById('habit-'+c).classList.remove('hidden');
    document.querySelectorAll('#screen-habits .level-tab').forEach(t => t.classList.toggle('active', t.textContent.toLowerCase().includes(c.substring(0,3))));
}
function renderHabits() {
    Object.keys(habitData).forEach(cat => {
        const el = document.getElementById('habits-' + cat);
        if(el) el.innerHTML = habitData[cat].map(h => `<div class="habit-item"><label class="custom-checkbox"><input type="checkbox" onchange="saveHabit('${h.id}',this.checked)" ${localStorage.getItem(h.id)==='true'?'checked':''}><span class="checkmark"></span><div class="habit-info"><strong>${h.title}</strong><span>${h.desc}</span></div></label></div>`).join('');
    });
}
function saveHabit(id,v){ localStorage.setItem(id,v); updateProgressStats(); }

/* === GYM === */
const gymExercises = [];
for(let i=1; i<=100; i++) gymExercises.push({name:"Gimnasio Ex "+i, cat:"Pesas", muscle:"Músculo "+i, icon:"🏋️", desc:"Entrenamiento de fuerza con peso.", steps:["Carga","Ejecuta"]});
function filterGym(btn) {
    document.querySelectorAll('#gym-level-tabs .level-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderGym();
}
function renderGym() {
    const list = document.getElementById('gym-list'); if(!list) return;
    list.innerHTML = gymExercises.slice(0,20).map(e => `<div class="gym-item" onclick="showDetail(${exercises.length + gymExercises.indexOf(e)})"><div class="gym-icon">🏋️</div><div class="ex-info"><strong>${e.name}</strong><span>${e.muscle}</span></div></div>`).join('');
}

/* === CALCULATOR === */
function calculateBMI() {
    const w = parseFloat(document.getElementById('calc-weight').value);
    const h = parseFloat(document.getElementById('calc-height').value) / 100;
    if(w && h) {
        const bmi = (w / (h * h)).toFixed(1);
        document.getElementById('bmi-value').textContent = bmi;
        document.getElementById('calc-results').classList.remove('hidden');
        let cat = "Normal"; if(bmi < 18.5) cat = "Bajo"; if(bmi > 25) cat = "Sobrepeso"; if(bmi > 30) cat = "Obesidad";
        document.getElementById('bmi-cat').textContent = cat;
    }
}

/* === BREATHING === */
let breathTimer;
function showBreathingMode(m) {
    const info = { box:"Inhala 4s, Retén 4s, Exhala 4s, Retén 4s.", "478":"Inhala 4s, Retén 7s, Exhala 8s.", fire:"Respiraciones rápidas y fuertes.", calm:"Inhala lento, exhala muy lento." };
    document.getElementById('breath-info').textContent = info[m];
    document.querySelectorAll('#screen-breathing .level-tab').forEach(t => t.classList.toggle('active', t.getAttribute('onclick').includes(m)));
}
function toggleBreathing() {
    const btn = document.getElementById('breath-start-btn');
    if(btn.innerHTML.includes('Iniciar')) {
        btn.innerHTML = '<i class="fa-solid fa-stop"></i> Detener';
        // Simulación simple
        let count = 0; document.getElementById('breath-phase').textContent = "Inhala";
        breathTimer = setInterval(() => { count++; document.getElementById('breath-count').textContent = count % 5; }, 1000);
    } else {
        btn.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar';
        clearInterval(breathTimer); document.getElementById('breath-phase').textContent = "Listo"; document.getElementById('breath-count').textContent = "";
    }
}

/* === RUNNING === */
function logRun() {
    const km = parseFloat(document.getElementById('run-km').value || 0);
    let total = parseFloat(localStorage.getItem('run_total') || 0) + km;
    localStorage.setItem('run_total', total);
    document.getElementById('run-total-km').textContent = total.toFixed(1);
    document.getElementById('run-km').value = '';
}
function showRunSec(id) {
    document.getElementById('run-stretch').classList.toggle('hidden', id !== 'stretch');
    document.getElementById('run-hydra').classList.toggle('hidden', id !== 'hydra');
    document.querySelectorAll('#screen-running .level-tab').forEach(t => t.classList.toggle('active', t.getAttribute('onclick').includes(id)));
}

/* === UTILS === */
function resetAllData() { if(confirm("¿Borrar todos los datos?")) { localStorage.clear(); location.reload(); } }
function updateProgressStats() {
    document.getElementById('stat-days').textContent = localStorage.getItem('fitalpha_streak') || 1;
}
function toggleExerciseImage() {
    const v = document.getElementById('exercise-image-wrap');
    v.style.display = v.style.display === 'block' ? 'none' : 'block';
}

/* === INIT === */
const currentLang = localStorage.getItem('fitalpha_lang') || 'es';
changeLanguage(currentLang);
renderCatFilter(); renderExercises(); renderHabits(); renderGym(); updateProgressStats();
document.getElementById('run-total-km').textContent = parseFloat(localStorage.getItem('run_total') || 0).toFixed(1);
