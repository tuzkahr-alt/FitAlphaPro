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
}
function goBack() { goScreen(lastScreen); }

function showApkInfo() {
    alert("Para instalar en Android:\n1. Abre esta página en Chrome.\n2. Menú (⋮) > Instalar aplicación.");
}

/* === LANGUAGE SYSTEM === */
const translations = {
    es: { 
        welcome_title: "Tu entrenamiento,<br><span>tu disciplina.</span>",
        calisthenics: "Calistenia", my_gym: "Mi Gimnasio", running: "Running", breathing: "Respiración", habits: "Hábitos", calculator: "Calculadora", packs: "Packs", settings: "Ajustes", apk: "APK", progress: "Progreso", weekly_progress: "PROGRESO SEMANAL",
        ai_sub: "Gemini Elite IA", search: "Buscar...", all: "Todos"
    },
    en: { 
        welcome_title: "Your training,<br><span>your discipline.</span>",
        calisthenics: "Calisthenics", my_gym: "My Gym", running: "Running", breathing: "Breathing", habits: "Habits", calculator: "Calculator", packs: "Packs", settings: "Settings", apk: "APK", progress: "Progress", weekly_progress: "WEEKLY PROGRESS",
        ai_sub: "Gemini Elite AI", search: "Search...", all: "All"
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
const exercises = [
{name:"Flexiones Básicas",cat:"Empuje",level:"principiante",muscle:"Pecho",icon:"💪",desc:"Pecho y tríceps.",steps:["Cuerpo recto","Baja y sube"],sets:"3 x 12"},
{name:"Sentadillas",cat:"Piernas",level:"principiante",muscle:"Piernas",icon:"🦵",desc:"Cuádriceps y glúteos.",steps:["Pies al ancho hombros","Baja cadera"],sets:"3 x 15"},
{name:"Dominadas Pronas",cat:"Tracción",level:"intermedio",muscle:"Espalda",icon:"🏗️",desc:"Dorsales y bíceps.",steps:["Sube mentón","Baja lento"],sets:"4 x 8"},
{name:"Plancha Isométrica",cat:"Core",level:"principiante",muscle:"Abdomen",icon:"🏋️",desc:"Isométrico core.",steps:["Cuerpo recto","Aguanta"],sets:"3 x 30s"},
{name:"Burpees Militares",cat:"Cardio",level:"elite",muscle:"Cuerpo completo",icon:"⚡",desc:"Máxima potencia cardiovascular.",steps:["Abajo","Flexión","Salto explosivo"],sets:"5 x 20"},
{name:"Sprint Estático",cat:"Cardio",level:"intermedio",muscle:"Piernas",icon:"🏃",desc:"Quema grasa intenso.",steps:["Eleva rodillas rápido","Mueve brazos"],sets:"4 x 45s"}
];

const levels = ["principiante", "intermedio", "avanzado", "elite"];
const catsData = {
    "Empuje": ["Flexión Diamante", "Fondo en Silla", "Press Hombros", "Flexión Arquera", "Fondo en Barra", "Hindu Pushups", "Pike Pushups", "Pseudo Planche"],
    "Tracción": ["Chin-ups", "Aussie Pullups", "Front Lever Lean", "Scapula Pullups", "Archer Pullups", "Tuck Front Lever", "Chin Hang", "Wide Grip Pulls"],
    "Piernas": ["Zancadas", "Pistol Squats Pro", "Bulgarian Squat", "Sumo Squat", "Cosaco Squat", "Salto sobre Cajón", "Wall Sit", "Glint Raises"],
    "Core": ["Leg Raise", "Hollow Body", "Flutter Kicks", "V-Ups", "Russian Twist", "Plancha Lateral", "Toe Touch", "Dragon Flag Prep"],
    "Cardio": ["High Knees", "Jumping Jacks", "Mountain Climbers", "Shadow Boxing", "Skipping Pro", "Jump Rope", "Sprawl", "Tuck Jumps"],
    "Híbrido": ["Clean & Press", "Thrusters", "Manmaker", "Bear Crawl", "Duck Walk", "Animal Flow", "Burpee Pullup", "Star Jump"]
};
const catIcons = { "Empuje": "💪", "Tracción": "🆙", "Piernas": "🦵", "Core": "🏋️", "Cardio": "⚡", "Híbrido": "🎯" };

levels.forEach(lvl => {
    Object.keys(catsData).forEach(c => {
        catsData[c].forEach((name, i) => {
            exercises.push({
                name: name, cat: c, level: lvl, muscle: "Focalizado", icon: catIcons[c],
                desc: `Rutina de nivel ${lvl} enfocada en ${c}. Diseñada para atletas que buscan la excelencia.`,
                steps: ["Postura balanceada", "Rango de movimiento completo", "Control de respiración"],
                sets: lvl === "elite" ? "5 x 10" : "3 x 12"
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
    document.getElementById('cal-count-sub').textContent = `${filtered.length} ejercicios disponibles`;
    list.innerHTML = filtered.map(e => `
        <div class="exercise-item" onclick="showDetail(${exercises.indexOf(e)})">
            <div class="ex-icon">${e.icon}</div>
            <div class="ex-info"><strong>${e.name}</strong></div>
            <span class="ex-badge ${e.level}">${e.level.toUpperCase()}</span>
        </div>`).join('');
}

function showDetail(idx) {
    let e = exercises[idx];
    if(!e && typeof gymExercises !== 'undefined') e = gymExercises[idx-exercises.length];
    if(!e) return;
    document.getElementById('detail-name').textContent = e.name;
    document.getElementById('detail-level').textContent = e.level ? e.level.toUpperCase() : 'GYM';
    document.getElementById('detail-cat').textContent = e.cat || 'Fuerza';
    document.getElementById('detail-muscle').textContent = e.muscle || 'Varios';
    document.getElementById('detail-desc').textContent = e.desc;
    document.getElementById('detail-steps').innerHTML = (e.steps || ["Control"]).map(s => `<li>${s}</li>`).join('');
    
    const rMap = { principiante: 60, intermedio: 90, avanzado: 120, elite: 150 };
    restInitialTime = rMap[e.level] || 60;
    currentRestTime = restInitialTime;
    resetRestTimer();
    goScreen('screen-exercise-detail');
}

/* === AURORA DRAGGABLE AI (GEMINI CORE) === */
let isDragging = false, startX, startY, initialX, initialY;
const bubble = document.getElementById('aurora-btn');
bubble.addEventListener('mousedown', dStart); bubble.addEventListener('touchstart', dStart, {passive:false});

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
}
function checkAuroraKey(e) { if(e.key==='Enter') sendAurora(); }
function sendAurora() {
    const inp = document.getElementById('aurora-input');
    const val = inp.value.trim().toLowerCase(); if(!val) return;
    addMsg(inp.value, 'user'); inp.value = '';
    
    setTimeout(() => {
        let r = "Analizando con núcleos Gemini... Procesa tu objetivo.";
        if(val.includes('triste') || val.includes('ánimo')) {
            r = "Entiendo. El cortisol está alto. Mi directiva es: 10 burpees ahora. La acción física precede a la emoción. ¡Muévete!";
        } else if(val.includes('plan') || val.includes('rutina')) {
            r = "Protocolo de entrenamiento generado. Te sugiero el Pack 'Full Body' para maximizar la síntesis proteica hoy.";
        } else if(val.includes('disciplina')) {
            r = "La disciplina es el combustible de los campeones. Quien no se domina a sí mismo, será dominado por sus impulsos.";
        } else {
            r = "Como tu IA Gemini Elite, te recuerdo que la consistencia es la única métrica que importa. Sigue entrenando.";
        }
        addMsg(r, 'ai');
    }, 1000);
}
function addMsg(t, type) {
    const h = document.getElementById('aurora-history');
    const m = document.createElement('div'); m.className='msg '+type; m.textContent=t;
    h.appendChild(m); h.scrollTop = h.scrollHeight;
}

/* === HABITS & CALENDAR === */
const habitData = {
    entrenamiento: [{id:'h1',title:'Entreno 30m',desc:'Fuerza/Cardio'},{id:'h2',title:'10k Pasos',desc:'Movilidad'}],
    nutricion: [{id:'h3',title:'Agua 3L',desc:'Hidratación'},{id:'h4',title:'No Azúcar',desc:'Salud'}],
    mente: [{id:'h5',title:'Meditación',desc:'Paz mental'},{id:'h6',title:'Lectura',desc:'Conocimiento'}],
    sueno: [{id:'h7',title:'8h Sueño',desc:'Recuperación'},{id:'h8',title:'No Pantallas',desc:'Descanso'}]
};
function renderHabits() {
    Object.keys(habitData).forEach(cat => {
        const el = document.getElementById('habits-' + cat);
        if(el) el.innerHTML = habitData[cat].map(h => `<div class="habit-item"><label class="custom-checkbox"><input type="checkbox" onchange="saveHabit('${h.id}',this.checked)" ${localStorage.getItem(h.id)==='true'?'checked':''}><span class="checkmark"></span><div class="habit-info"><strong>${h.title}</strong><span>${h.desc}</span></div></label></div>`).join('');
    });
}
function saveHabit(id,v){ localStorage.setItem(id,v); updateProgressStats(); renderCalendar(); }

function renderCalendar() {
    const daysArr = ['L','M','M','J','V','S','D'];
    const today = new Date().getDay();
    const adjToday = today === 0 ? 6 : today - 1;
    const calWrap = document.getElementById('usage-calendar'); if(!calWrap) return;
    
    calWrap.innerHTML = daysArr.map((d, i) => `<div class="cal-day ${i === adjToday ? 'today active' : ''}">${d}</div>`).join('');
    const s = localStorage.getItem('fitalpha_streak') || 1;
    const el = document.getElementById('streak-count-home'); if(el) el.innerHTML = `${s} 🔥`;
}

/* === PACKS & GYM === */
function loadPack(type) {
    const list = document.getElementById('pack-exercise-list'); if(!list) return;
    let filtered = exercises.filter(e => type === 'full' ? true : e.cat.toLowerCase().includes(type.toLowerCase())).slice(0,12);
    list.innerHTML = `<h3 style="margin:20px 0 10px">Rutina Pack: ${type.toUpperCase()}</h3>` + filtered.map(e => `
        <div class="exercise-item" onclick="showDetail(${exercises.indexOf(e)})">
            <div class="ex-icon">${e.icon}</div>
            <div class="ex-info"><strong>${e.name}</strong></div>
        </div>`).join('');
}

const gymExercises = [];
for(let i=1; i<=100; i++) gymExercises.push({name:"Gym Pro "+i, cat:"Pesas", muscle:"Músculo "+i, icon:"🏋️", desc:"Entrenamiento de carga técnica.", steps:["Posición","Esfuerzo"]});
function renderGym() {
    const list = document.getElementById('gym-list'); if(!list) return;
    document.getElementById('gym-count-sub').textContent = `100 ejercicios disponibles`;
    list.innerHTML = gymExercises.slice(0,25).map(e => `<div class="gym-item" onclick="showDetail(${exercises.length + gymExercises.indexOf(e)})"><div class="gym-icon">🏋️</div><div class="ex-info"><strong>${e.name}</strong><span>${e.muscle}</span></div></div>`).join('');
}

/* === TIMER & UTILS === */
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
        if(currentRestTime <= 0) { resetRestTimer(); alert("¡Descanso terminado!"); }
    }, 1000);
}
function updateProgressStats() {
    const s = localStorage.getItem('fitalpha_streak') || 1;
    document.getElementById('stat-days').innerHTML = `${s} <span style="font-size:0.8em">🔥</span>`;
}
function resetAllData() { if(confirm("¿Borrar todos los datos?")) { localStorage.clear(); location.reload(); } }

/* === INIT === */
const currentLang = localStorage.getItem('fitalpha_lang') || 'es';
changeLanguage(currentLang); renderCalendar();
