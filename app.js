/* === NAVIGATION === */
let lastScreen = 'screen-home';
function goScreen(id) {
    if(id !== 'screen-exercise-detail') lastScreen = id;
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.toggle('active', s.id === id);
        s.classList.toggle('hidden', s.id !== id);
    });
    if (id === 'screen-progress') updateProgressStats();
    if (id === 'screen-home') renderCalendar();
    playSnd('snd-click');
}
function goBack() { goScreen(lastScreen); }

function playSnd(id) {
    const s = document.getElementById(id);
    if(s) { s.currentTime = 0; s.play().catch(()=>{}); }
}

/* === LANGUAGE SYSTEM (FIXED) === */
const translations = {
    es: { 
        welcome_title: "Tu entrenamiento,<br><span>tu disciplina.</span>",
        calisthenics: "Calistenia", my_gym: "Gimnasio", running: "Running", breathing: "Respiración", habits: "Hábitos", calculator: "Calculadora", packs: "Master Packs 1h", settings: "Ajustes", progress: "Progreso", weekly_progress: "PROGRESO SEMANAL",
        search: "Buscar...", all: "Todos", target_sets: "Objetivo de la Serie", complete_set: "Completar Serie", sci_desc: "Protocolo 60m", water_tips: "Tips Hidratación", ex_available: "ejercicios"
    },
    en: { 
        welcome_title: "Your training,<br><span>your discipline.</span>",
        calisthenics: "Calisthenics", my_gym: "Gym", running: "Running", breathing: "Breathing", habits: "Habits", calculator: "Calculator", packs: "Master Packs 1h", settings: "Settings", progress: "Progress", weekly_progress: "WEEKLY PROGRESS",
        search: "Search...", all: "All", target_sets: "Series Target", complete_set: "Complete Set", sci_desc: "60m Protocol", water_tips: "Hydration Tips", ex_available: "exercises"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('fitalpha_lang', lang);
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    renderCatFilter(); renderExercises(); renderHabits(); renderGym(); updateProgressStats(); renderCalendar();
}

/* === EXERCISES DATABASE === */
const exercises = [];
const levels = ["principiante", "intermedio", "avanzado", "elite"];
const catsData = {
    "Empuje": ["Flexión Diamante", "Fondo en Silla", "Press Hombros", "Dip Pro", "Archer Pushup"],
    "Tracción": ["Dominada Prona", "Chin-up", "Aussie Pull", "Front Lever", "Scapula Pull"],
    "Piernas": ["Sentadilla", "Pistol Squat", "Zancada", "Sumo", "Bulgarian"],
    "Core": ["Plancha", "L-Sit", "Leg Raise", "Hollow Body", "Russian Twist"],
    "Cardio": ["Burpee", "Sprint", "Mountain Climber", "Skipping", "Shadow Box"]
};
const catIcons = { "Empuje": "💪", "Tracción": "🆙", "Piernas": "🦵", "Core": "🏋️", "Cardio": "⚡", "Híbrido": "🎯" };

levels.forEach(lvl => {
    Object.keys(catsData).forEach(c => {
        catsData[c].forEach(name => {
            exercises.push({
                name: name, cat: c, level: lvl, muscle: "Focalizado", icon: catIcons[c],
                reps: lvl === "elite" ? 15 : lvl === "avanzado" ? 12 : 10,
                desc: `Entrenamiento para nivel ${lvl}. Enfocado en ${c}.`,
                steps: ["Postura balanceada", "Rango completo", "Control"]
            });
        });
    });
});

let currentLevel = 'principiante';
let currentCat = 'Todos';
function renderCatFilter() {
    const el = document.getElementById('cat-filter'); if(!el) return;
    const all = ['Todos', ...Object.keys(catsData)];
    el.innerHTML = all.map(c => `<button class="cat-chip ${c===currentCat?'active':''}" onclick="filterCat(this,'${c}')">${c}</button>`).join('');
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
    const list = document.getElementById('exercise-list'); if(!list) return;
    const filtered = exercises.filter(e => e.level === currentLevel && (currentCat === 'Todos' || e.cat === currentCat));
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    const sub = document.getElementById('cal-count-sub'); 
    if(sub) sub.textContent = `${filtered.length} ${translations[lang].ex_available}`;
    
    list.innerHTML = filtered.map(e => `
        <div class="exercise-item" onclick="showDetail(${exercises.indexOf(e)})">
            <div class="ex-icon">${e.icon}</div>
            <div class="ex-info"><strong>${e.name}</strong></div>
            <span class="ex-badge ${e.level}">${e.level.toUpperCase()}</span>
        </div>`).join('');
}

/* === DETAIL & REPS === */
function showDetail(idx) {
    let e = exercises[idx];
    if(!e && typeof gymExercises !== 'undefined') e = gymExercises[idx-exercises.length];
    if(!e) return;
    
    const titleEl = document.getElementById('detail-name-title');
    if(titleEl) titleEl.textContent = e.name;
    
    document.getElementById('detail-hero').textContent = e.icon;
    document.getElementById('detail-level').textContent = (e.level || 'GYM').toUpperCase();
    document.getElementById('detail-cat').textContent = e.cat || 'Fuerza';
    document.getElementById('detail-muscle').textContent = e.muscle || 'Varios';
    document.getElementById('detail-desc').textContent = e.desc;
    document.getElementById('detail-steps').innerHTML = (e.steps || ["Control"]).map(s => `<li>${s}</li>`).join('');
    
    const repsEl = document.getElementById('current-reps');
    if(repsEl) repsEl.textContent = e.reps || 12;
    
    const rMap = { principiante: 60, intermedio: 90, avanzado: 120, elite: 150 };
    restInitialTime = rMap[e.level] || 90;
    currentRestTime = restInitialTime;
    resetRestTimer();
    goScreen('screen-exercise-detail');
}

function changeReps(val) {
    const el = document.getElementById('current-reps');
    if(!el) return;
    let n = parseInt(el.textContent) + val;
    if(n < 1) n = 1;
    el.textContent = n;
    playSnd('snd-click');
}
function logSet() {
    playSnd('snd-end');
    alert("¡Serie registrada! Inicia el cronómetro de descanso.");
    startRestTimer();
}

/* === SCIENTIFIC 1-HOUR PACKS === */
function loadPack(type) {
    const list = document.getElementById('pack-exercise-list'); if(!list) return;
    let routine = [];
    const warmup = exercises.filter(e => e.cat === 'Cardio').slice(0,3);
    let main = [];
    if(type === 'full-sci') main = exercises.filter((e,i) => i%4===0).slice(0,8);
    if(type === 'upper-sci') main = exercises.filter(e => e.cat === 'Empuje' || e.cat === 'Tracción').slice(0,8);
    if(type === 'lower-sci') main = exercises.filter(e => e.cat === 'Piernas').slice(0,8);
    if(type === 'hybrid-sci') main = exercises.slice(0,8);
    routine = [...warmup, ...main, ...exercises.filter(e => e.cat === 'Core').slice(0,2)];
    
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    const title = type.includes('full') ? 'FullBody' : type.includes('upper') ? 'Torso' : type.includes('lower') ? 'Piernas' : 'Híbrido';
    
    list.innerHTML = `<h3 style="margin:20px 0 10px; color:var(--primary)">Protocolo ${title} (60 min)</h3>` + 
        routine.map((e, i) => `
        <div class="exercise-item" onclick="showDetail(${exercises.indexOf(e)})">
            <span style="font-size:0.7rem; color:var(--accent); font-weight:900; margin-right:10px">${i+1}</span>
            <div class="ex-icon">${e.icon}</div>
            <div class="ex-info"><strong>${e.name}</strong></div>
            <span class="ex-badge ${e.level}" style="font-size:0.6rem">${e.reps} REPS</span>
        </div>`).join('');
}

const gymExercises = [];
for(let i=1; i<=100; i++) gymExercises.push({name:"Gym Pro "+i, cat:"Pesas", muscle:"Músculo "+i, icon:"🏋️", reps:12, desc:"Entrenamiento intensivo.", steps:["Control","Fuerza"]});
function renderGym() {
    const list = document.getElementById('gym-list'); if(!list) return;
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    const sub = document.getElementById('gym-count-sub'); 
    if(sub) sub.textContent = `100 ${translations[lang].ex_available}`;
    list.innerHTML = gymExercises.slice(0,25).map(e => `<div class="gym-item" onclick="showDetail(${exercises.length + gymExercises.indexOf(e)})"><div class="gym-icon">🏋️</div><div class="ex-info"><strong>${e.name}</strong><span>${e.muscle}</span></div></div>`).join('');
}

function renderHabits() {
    const hData = {
        entrenamiento: [{id:'h1',title:'Entreno 60m',desc:'FullBody'},{id:'h2',title:'10k Pasos',desc:'Movilidad'}],
        nutricion: [{id:'h3',title:'Agua 3L',desc:'Hidratación'},{id:'h4',title:'Proteína',desc:'Músculo'}],
        mente: [{id:'h5',title:'Dopamina',desc:'Ayuno Digital'},{id:'h6',title:'Lectura',desc:'Mente'}],
        sueno: [{id:'h7',title:'8h Sueño',desc:'Descanso'},{id:'h8',title:'Meditación',desc:'Paz'}]
    };
    Object.keys(hData).forEach(cat => {
        const el = document.getElementById('habits-' + cat);
        if(el) el.innerHTML = hData[cat].map(h => `<div class="habit-item"><label class="custom-checkbox"><input type="checkbox" onchange="saveHabit('${h.id}',this.checked)" ${localStorage.getItem(h.id)==='true'?'checked':''}><span class="checkmark"></span><div class="habit-info"><strong>${h.title}</strong><span>${h.desc}</span></div></label></div>`).join('');
    });
}
function saveHabit(id,v){ localStorage.setItem(id,v); updateProgressStats(); renderCalendar(); playSnd('snd-click'); }

function renderCalendar() {
    const daysArr = ['L','M','M','J','V','S','D'];
    const today = (new Date().getDay() + 6) % 7;
    const calWrap = document.getElementById('usage-calendar'); if(!calWrap) return;
    calWrap.innerHTML = daysArr.map((d, i) => `<div class="cal-day ${i === today ? 'today active' : ''}">${d}</div>`).join('');
    const s = localStorage.getItem('fitalpha_streak') || 1;
    const el = document.getElementById('streak-count-home'); if(el) el.innerHTML = `${s} 🔥`;
}

let restInterval, restInitialTime = 60, currentRestTime = 60;
function resetRestTimer() {
    if(restInterval) { clearInterval(restInterval); restInterval = null; }
    document.getElementById('rest-start-btn').innerHTML = '<i class="fa-solid fa-play"></i> Iniciar';
    document.getElementById('rest-progress-circle').style.strokeDashoffset = 276;
    const m = Math.floor(restInitialTime/60), s = restInitialTime%60;
    document.getElementById('rest-time-display').textContent = `${m}:${s<10?'0':''}${s}`;
}
function startRestTimer() {
    const btn = document.getElementById('rest-start-btn');
    if(restInterval) { resetRestTimer(); return; }
    btn.innerHTML = '<i class="fa-solid fa-stop"></i> Detener';
    restInterval = setInterval(() => {
        currentRestTime--;
        const m = Math.floor(currentRestTime/60), s = currentRestTime%60;
        document.getElementById('rest-time-display').textContent = `${m}:${s<10?'0':''}${s}`;
        document.getElementById('rest-progress-circle').style.strokeDashoffset = 276 - (currentRestTime/restInitialTime)*276;
        if(currentRestTime <= 0) { resetRestTimer(); playSnd('snd-end'); alert("¡Descanso terminado!"); }
    }, 1000);
}
function updateProgressStats() {
    const s = localStorage.getItem('fitalpha_streak') || 1;
    const el = document.getElementById('stat-days'); if(el) el.innerHTML = `${s} 🔥`;
}

/* === INIT === */
const currentLang = localStorage.getItem('fitalpha_lang') || 'es';
changeLanguage(currentLang);
function calculateBMI() {
    const w = parseFloat(document.getElementById('calc-weight').value);
    const h = parseFloat(document.getElementById('calc-height').value) / 100;
    if(w && h) {
        const bmi = (w / (h * h)).toFixed(1);
        document.getElementById('bmi-value').textContent = bmi;
        document.getElementById('calc-results').classList.remove('hidden');
        let cat = "Normal"; if(bmi < 18.5) cat = "Bajo"; if(bmi > 25) cat = "Sobrepeso";
        document.getElementById('bmi-cat').textContent = cat;
        playSnd('snd-end');
    }
}
