/* 
    FitAlpha Pro — Ultra Logic 2026 
    Premium Version with 400+ Exercises
    7-Language Support: ES, EN, FR, PT, DE, IT, JP
*/

const translations = {
    es: {
        welcome_title: "Tu entrenamiento,<br><span>tu disciplina.</span>",
        calisthenics: "Calistenia", cal_desc: "200 ejercicios organizados",
        my_gym: "Mi Gimnasio", gym_desc: "200 ejercicios con pesas",
        running: "Running", run_desc: "Kilómetros y estiramientos",
        breathing: "Respiración", breath_desc: "Meditación y control mental",
        habits: "Hábitos", hab_desc: "Checklist diaria de éxito",
        calculator: "Calculadora", calc_desc: "IMC y métricas vitales",
        packs: "Entrena por Packs", packs_desc: "Rutinas científicas de 1h",
        settings: "Ajustes", weekly_progress: "PROGRESO SEMANAL",
        lvl_beg: "Principiante", lvl_int: "Intermedio", lvl_adv: "Avanzado", lvl_elite: "Élite",
        exercise: "Ejercicio", target_sets: "Objetivo de la Serie", reps_lbl: "REPS", complete_set: "Completar Serie", 
        rest_timer: "Cronómetro Descanso", start_rest: "Iniciar", rest_status: "Listo para la siguiente",
        box_breath: "Cuadrada", breath_478: "4-7-8", fire_breath: "Fuego", calm_breath: "Calma",
        inhale: "Inhala", hold: "Retén", exhale: "Exhala", ready_lbl: "Listo", start_btn: "Iniciar", rounds_lbl: "Rondas",
        weight_lbl: "Peso (kg)", height_lbl: "Altura (cm)", age_lbl: "Edad", sex_lbl: "Sexo", male: "Hombre", female: "Mujer", calc_btn: "Calcular",
        imc_lbl: "IMC", bmi_under: "Bajo", bmi_normal: "Normal", bmi_over: "Sobre", bmi_obese: "Obeso",
        ideal_weight: "Peso ideal", fat_perc: "% Grasa est.", bmr_lbl: "Calorías base", active_cal: "Cal activo", rec_lbl: "Nota",
        proto_full: "FullBody", proto_upper: "Torso", proto_lower: "Piernas", proto_hybrid: "Híbrido",
        ex_available: "ejercicios disponibles", toast_set: "¡Serie lograda!", toast_rest: "¡GO!", sets_text: "series",
        sci_sync: "Sincronización Científica", local_data: "Datos Locales", app_lang: "Idioma", reset_btn: "Resetear App", reset_desc: "Borrar progreso."
    },
    en: {
        welcome_title: "Your training,<br><span>your discipline.</span>",
        calisthenics: "Calisthenics", cal_desc: "200 organized exercises",
        my_gym: "My Gym", gym_desc: "200 weight exercises",
        running: "Running", run_desc: "KM and stretching",
        breathing: "Breathing", breath_desc: "Meditation and mental control",
        habits: "Habits", hab_desc: "Daily success checklist",
        calculator: "Calculator", calc_desc: "BMI and vital metrics",
        packs: "Train by Packs", packs_desc: "Scientific 1h routines",
        settings: "Settings", weekly_progress: "WEEKLY PROGRESS",
        lvl_beg: "Beginner", lvl_int: "Intermediate", lvl_adv: "Advanced", lvl_elite: "Elite",
        exercise: "Exercise", target_sets: "Target Set", reps_lbl: "REPS", complete_set: "Complete Set", 
        rest_timer: "Rest Timer", start_rest: "Start", rest_status: "Ready for next",
        box_breath: "Box", breath_478: "4-7-8", fire_breath: "Fire", calm_breath: "Calm",
        inhale: "Inhale", hold: "Hold", exhale: "Exhale", ready_lbl: "Ready", start_btn: "Start", rounds_lbl: "Rounds",
        weight_lbl: "Weight (kg)", height_lbl: "Height (cm)", age_lbl: "Age", sex_lbl: "Sex", male: "Male", female: "Female", calc_btn: "Calculate",
        imc_lbl: "BMI", bmi_under: "Under", bmi_normal: "Normal", bmi_over: "Over", bmi_obese: "Obese",
        ideal_weight: "Ideal Weight", fat_perc: "% Est. Fat", bmr_lbl: "BMR Calories", active_cal: "Active Cal", rec_lbl: "Note",
        proto_full: "FullBody", proto_upper: "Upper", proto_lower: "Lower", proto_hybrid: "Hybrid",
        ex_available: "available exercises", toast_set: "Set achieved!", toast_rest: "GO!", sets_text: "sets",
        sci_sync: "Scientific Sync", local_data: "Local Data", app_lang: "Language", reset_btn: "Reset App", reset_desc: "Clear progress."
    },
    de: {
        welcome_title: "Dein Training,<br><span>deine Disziplin.</span>",
        calisthenics: "Kalisthenik", cal_desc: "200 organisierte Übungen",
        my_gym: "Mein Gym", gym_desc: "200 Kraftübungen",
        running: "Laufen", run_desc: "KM und Dehnung",
        breathing: "Atmung", breath_desc: "Meditation und Kontrolle",
        habits: "Gewohnheiten", hab_desc: "Tägliche Erfolgsliste",
        calculator: "Rechner", calc_desc: "BMI und Metriken",
        packs: "1h Packs", packs_desc: "Wissenschaftliche Routinen",
        settings: "Einstellungen", weekly_progress: "WÖCHENTLICHER FORTSCHRITT",
        lvl_beg: "Anfänger", lvl_int: "Mittel", lvl_adv: "Fortgeschritten", lvl_elite: "Elite",
        exercise: "Übung", target_sets: "Zielsatz", reps_lbl: "WH", complete_set: "Satz beenden", 
        rest_timer: "Pausenzeit", start_rest: "Start", rest_status: "Bereit für mehr",
        box_breath: "Box", breath_478: "4-7-8", fire_breath: "Feuer", calm_breath: "Ruhe",
        inhale: "Einatmen", hold: "Halten", exhale: "Ausatmen", ready_lbl: "Bereit", start_btn: "Start", rounds_lbl: "Runden",
        weight_lbl: "Gewicht (kg)", height_lbl: "Größe (cm)", age_lbl: "Alter", sex_lbl: "Geschlecht", male: "Mann", female: "Frau", calc_btn: "Berechnen",
        imc_lbl: "BMI", bmi_under: "Unter", bmi_normal: "Normal", bmi_over: "Über", bmi_obese: "Adipös",
        ideal_weight: "Idealgewicht", fat_perc: "% Fett", bmr_lbl: "Grundumsatz", active_cal: "Aktiv Kal", rec_lbl: "Notiz",
        proto_full: "Ganzkörper", proto_upper: "Oberkörper", proto_lower: "Unterkörper", proto_hybrid: "Hybrid",
        ex_available: "verfügbare Übungen", toast_set: "Satz geschafft!", toast_rest: "LOS!", sets_text: "Sätze",
        sci_sync: "Wiss. Sync", local_data: "Lokale Daten", app_lang: "Sprache", reset_btn: "App Reset", reset_desc: "Daten löschen."
    },
    it: {
        welcome_title: "Tuo allenamento,<br><span>tua disciplina.</span>",
        calisthenics: "Calistenia", cal_desc: "200 esercizi organizzati",
        my_gym: "Palestra", gym_desc: "200 esercizi con pesi",
        running: "Corsa", run_desc: "KM e stretching",
        breathing: "Respiro", breath_desc: "Meditazione e controllo",
        habits: "Abitudini", hab_desc: "Checklist giornaliera",
        calculator: "Calcolatore", calc_desc: "IMC e metriche vitali",
        packs: "Pacchetti 1h", packs_desc: "Routine scientifiche",
        settings: "Impostazioni", weekly_progress: "PROGRESSO SETTIMANALE",
        lvl_beg: "Principiante", lvl_int: "Intermedio", lvl_adv: "Avanzato", lvl_elite: "Elite",
        exercise: "Esercizio", target_sets: "Obiettivo Serie", reps_lbl: "REPS", complete_set: "Serie Completa", 
        rest_timer: "Timer Riposo", start_rest: "Inizia", rest_status: "Pronto per dopo",
        box_breath: "Quadrata", breath_478: "4-7-8", fire_breath: "Fuoco", calm_breath: "Calma",
        inhale: "Inspira", hold: "Trattieni", exhale: "Espira", ready_lbl: "Pronto", start_btn: "Inizia", rounds_lbl: "Giri",
        weight_lbl: "Peso (kg)", height_lbl: "Altezza (cm)", age_lbl: "Età", sex_lbl: "Sesso", male: "Uomo", female: "Donna", calc_btn: "Calcola",
        imc_lbl: "IMC", bmi_under: "Sotto", bmi_normal: "Normale", bmi_over: "Sopra", bmi_obese: "Obeso",
        ideal_weight: "Peso ideale", fat_perc: "% Grasso est.", bmr_lbl: "Cal base", active_cal: "Cal attivo", rec_lbl: "Nota",
        proto_full: "FullBody", proto_upper: "Tronco", proto_lower: "Gambe", proto_hybrid: "Ibrido",
        ex_available: "esercizi disponibili", toast_set: "Serie fatta!", toast_rest: "VIA!", sets_text: "serie",
        sci_sync: "Sync Scie.", local_data: "Dati Locali", app_lang: "Lingua", reset_btn: "Reset App", reset_desc: "Cancella dati."
    },
    fr: {
        welcome_title: "Votre entraînement,<br><span>votre discipline.</span>",
        calisthenics: "Callisthénie", cal_desc: "200 exercices organisés",
        my_gym: "Ma Salle", gym_desc: "200 exercices avec poids",
        running: "Course", run_desc: "KM et étirements",
        breathing: "Respiration", breath_desc: "Méditation et contrôle",
        habits: "Habitudes", hab_desc: "Check-list succès",
        calculator: "Calculateur", calc_desc: "IMC et mesures vitales",
        packs: "Packs 1h", packs_desc: "Routines scientifiques",
        settings: "Réglages", weekly_progress: "PROGRÈS HEBDOMADAIRE",
        lvl_beg: "Débutant", lvl_int: "Intermédiaire", lvl_adv: "Avancé", lvl_elite: "Élite",
        exercise: "Exercice", target_sets: "Objectif Série", reps_lbl: "REPS", complete_set: "Série complète", 
        rest_timer: "Chronomètre", start_rest: "Démarrer", rest_status: "Prêt pour la suite",
        box_breath: "Carré", breath_478: "4-7-8", fire_breath: "Feu", calm_breath: "Calme",
        inhale: "Inspirer", hold: "Retenir", exhale: "Expirer", ready_lbl: "Prêt", start_btn: "Démarrer", rounds_lbl: "Tours",
        weight_lbl: "Poids (kg)", height_lbl: "Taille (cm)", age_lbl: "Âge", sex_lbl: "Sexe", male: "Homme", female: "Femme", calc_btn: "Calculer",
        imc_lbl: "IMC", bmi_under: "Sous", bmi_normal: "Normal", bmi_over: "Sur", bmi_obese: "Obèse",
        ideal_weight: "Poids idéal", fat_perc: "% Gras est.", bmr_lbl: "BMR Calories", active_cal: "Calories Act.", rec_lbl: "Note",
        proto_full: "FullBody", proto_upper: "Buste", proto_lower: "Jambes", proto_hybrid: "Hybride",
        ex_available: "exercices disponibles", toast_set: "Série réussie !", toast_rest: "ALLEZ !", sets_text: "séries",
        sci_sync: "Sync Sci.", local_data: "Données Locales", app_lang: "Langue", reset_btn: "Reset App", reset_desc: "Effacer progrès."
    },
    pt: {
        welcome_title: "Seu treino,<br><span>sua disciplina.</span>",
        calisthenics: "Calistenia", cal_desc: "200 exercícios organizados",
        my_gym: "Minha Academia", gym_desc: "200 exercícios com pesos",
        running: "Corrida", run_desc: "KM e alongamento",
        breathing: "Respiração", breath_desc: "Meditação e foco",
        habits: "Hábitos", hab_desc: "Checklist de sucesso",
        calculator: "Calculadora", calc_desc: "IMC e métricas vitais",
        packs: "Packs 1h", packs_desc: "Rotinas científicas",
        settings: "Ajustes", weekly_progress: "PROGRESSO SEMANAL",
        lvl_beg: "Iniciante", lvl_int: "Intermediário", lvl_adv: "Avançado", lvl_elite: "Elite",
        exercise: "Exercício", target_sets: "Objetivo Série", reps_lbl: "REPS", complete_set: "Série completa", 
        rest_timer: "Timer Descanso", start_rest: "Iniciar", rest_status: "Pronto para o próximo",
        box_breath: "Quadrada", breath_478: "4-7-8", fire_breath: "Fogo", calm_breath: "Calma",
        inhale: "Inspirar", hold: "Prender", exhale: "Expirar", ready_lbl: "Pronto", start_btn: "Iniciar", rounds_lbl: "Rodadas",
        weight_lbl: "Peso (kg)", height_lbl: "Altura (cm)", age_lbl: "Idade", sex_lbl: "Sexo", male: "Homem", female: "Mulher", calc_btn: "Calcular",
        imc_lbl: "IMC", bmi_under: "Baixo", bmi_normal: "Normal", bmi_over: "Sobre", bmi_obese: "Obeso",
        ideal_weight: "Peso ideal", fat_perc: "% Gordura est.", bmr_lbl: "BMR Calorias", active_cal: "Cal Ativo", rec_lbl: "Nota",
        proto_full: "FullBody", proto_upper: "Busto", proto_lower: "Pernas", proto_hybrid: "Híbrido",
        ex_available: "exercícios disponíveis", toast_set: "Série concluída!", toast_rest: "VAI!", sets_text: "séries",
        sci_sync: "Sinc Sci.", local_data: "Dados Locais", app_lang: "Idioma", reset_btn: "Reset App", reset_desc: "Apagar progresso."
    },
    jp: {
        welcome_title: "あなたのトレーニング、<br><span>あなたの規律。</span>",
        calisthenics: "自重トレーニング", cal_desc: "200種類の体系的プログラム",
        my_gym: "マイジム", gym_desc: "200種類のウエイト種目",
        running: "ランニング", run_desc: "走行距離とストレッチ",
        breathing: "呼吸法", breath_desc: "瞑想とメンタルコントロール",
        habits: "習慣", hab_desc: "毎日の成功チェックリスト",
        calculator: "計算機", calc_desc: "BMIと重要な指標",
        packs: "1時間パック", packs_desc: "科学的ルーティン",
        settings: "設定", weekly_progress: "週間進捗",
        lvl_beg: "初心者", lvl_int: "中級者", lvl_adv: "上級者", lvl_elite: "エリート",
        exercise: "エクササイズ", target_sets: "目標セット", reps_lbl: "回数", complete_set: "セット完了", 
        rest_timer: "休憩タイマー", start_rest: "開始", rest_status: "次へ進む",
        box_breath: "ボックス呼吸", breath_478: "4-7-8法", fire_breath: "火の呼吸", calm_breath: "落ち着きの呼吸",
        inhale: "吸う", hold: "止める", exhale: "吐く", ready_lbl: "準備完了", start_btn: "スタート", rounds_lbl: "ラウンド",
        weight_lbl: "体重 (kg)", height_lbl: "身長 (cm)", age_lbl: "年齢", sex_lbl: "性別", male: "男性", female: "女性", calc_btn: "計算する",
        imc_lbl: "BMI", bmi_under: "低体重", bmi_normal: "標準", bmi_over: "過体重", bmi_obese: "肥満",
        ideal_weight: "理想体重", fat_perc: "推測体脂肪", bmr_lbl: "基礎代謝量", active_cal: "活動代謝量", rec_lbl: "アドバイス",
        proto_full: "全身", proto_upper: "上半身", proto_lower: "下半身", proto_hybrid: "ハイブリッド",
        ex_available: "種類のエクササイズ", toast_set: "セット完了！", toast_rest: "次へ！", sets_text: "セット",
        sci_sync: "科学的同期", local_data: "ローカルデータ", app_lang: "言語設定", reset_btn: "アプリ初期化", reset_desc: "データを消去"
    }
};

/* === DATABASE GENERATOR (400+ Exercises) === */
const exercises = [];
const gymExercises = [];

function populateDatabases() {
    const levels = ["principiante", "intermedio", "avanzado", "elite"];

    // ─── CALISTENIA: Base exercises with UNIQUE ICONS per exercise ───
    const baseCal = {
        "Empuje": [
            { name: "Flexiones Clásicas",    icon: "🤜", steps: ["Cuerpo recto tabla", "Bajar al pecho", "Empujar explosivo"] },
            { name: "Fondos en Silla",       icon: "💺", steps: ["Manos en borde", "Codos a 90°", "Subir con tríceps"] },
            { name: "Dips en Paralelas",     icon: "🏗️", steps: ["Agarre neutro", "Inclinar torso", "Bajar controlado"] },
            { name: "Archer Pushups",        icon: "🏹", steps: ["Brazo extendido", "Carga lateral", "Alternar lados"] },
            { name: "Handstand Pushups",     icon: "🙃", steps: ["Pared de apoyo", "Hombros verticales", "ROM completo"] },
            { name: "Pike Pushups",          icon: "🔺", steps: ["Caderas altas", "Carga deltoides", "Apretar core"] },
            { name: "Diamond Pushups",       icon: "💎", steps: ["Manos rombo", "Codos adentro", "Tríceps máximo"] },
            { name: "One Arm Pushup",        icon: "☝️", steps: ["Piernas separadas", "Alinear mano-pecho", "Rotación cero"] },
            { name: "Explosive Pushup",      icon: "💥", steps: ["Fase concéntrica rápida", "Palmas despegan", "Caer suave"] },
            { name: "Clapping Pushup",       icon: "👏", steps: ["Empuje máximo", "Palmada al aire", "Absorber impacto"] },
            { name: "Spiderman Pushup",      icon: "🕷️", steps: ["Rodilla al codo", "Sincronizar", "Alternancia simétrica"] },
            { name: "Pseudo Planche Push",   icon: "⚖️", steps: ["Dedos atrás", "Inclinación delantera", "Tensión escapular"] },
        ],
        "Tracción": [
            { name: "Dominadas Prona",       icon: "🔝", steps: ["Agarre ancho", "Retracción escapular", "ROM completo"] },
            { name: "Chin-ups Supina",       icon: "💪", steps: ["Agarre estrecho", "Codos a costado", "Bíceps máximo"] },
            { name: "Neutral Pullup",        icon: "🤝", steps: ["Agarre paralelo", "Cifosis cero", "Bajada lenta"] },
            { name: "Aussie Pull",           icon: "🌏", steps: ["Barra baja", "Cuerpo inclinado", "Progresión inverted"] },
            { name: "Muscle Up",             icon: "🏆", steps: ["Pull explosivo", "Transición rápida", "Push final"] },
            { name: "Front Lever Row",       icon: "🎯", steps: ["Posición de plancha", "Fila horizontal", "Control máximo"] },
            { name: "Dragon Flag",           icon: "🐉", steps: ["Escápulas fijas", "Cuerpo alineado", "Bajar 4 segundos"] },
            { name: "Scapular Pull",         icon: "🦴", steps: ["Brazos rectos", "Solo omóplatos", "Aislamiento escapular"] },
        ],
        "Piernas": [
            { name: "Sentadilla Clásica",    icon: "🦵", steps: ["Pies al ancho hombros", "Rodilla sobre pie", "Paralelo o más"] },
            { name: "Zancada Frontal",       icon: "🚶", steps: ["Paso largo", "Rodilla sin tocar suelo", "Empujar al centro"] },
            { name: "Pistol Squat",          icon: "🔫", steps: ["Una pierna extendida", "Cadera profunda", "Control total"] },
            { name: "Box Jump",              icon: "📦", steps: ["Salto explosivo", "Caer amortiguado", "Cadera extendida"] },
            { name: "Sissy Squat",           icon: "🏛️", steps: ["Talones elevados", "Rodillas al frente", "Cuádriceps máximo"] },
            { name: "Bulgarian Split",       icon: "🇧🇬", steps: ["Pie trasero elevado", "Descender vertical", "Cadera nivelada"] },
            { name: "Shrimp Squat",          icon: "🦐", steps: ["Pie trasero mano", "Una pierna", "ROM profundo"] },
            { name: "Nordic Curl",           icon: "🌨️", steps: ["Tobillos fijos", "Bajar excéntrico", "Isquiotibiales máximo"] },
        ],
        "Core": [
            { name: "Plancha Isométrica",    icon: "🧱", steps: ["Cuerpo plano", "Glúteos apretados", "Respirar continuo"] },
            { name: "Ab Wheel Rollout",      icon: "☸️", steps: ["Rodillas al inicio", "Extender lento", "Contraer al volver"] },
            { name: "Hanging Leg Raise",     icon: "🎢", steps: ["Colgado sin balanceo", "Piernas rectas", "Controlar bajada"] },
            { name: "L-Sit Hold",            icon: "💺", steps: ["Brazos rígidos", "Piernas horizontales", "Cadera neutra"] },
            { name: "Russian Twist",         icon: "🌀", steps: ["Torso 45°", "Rotación máxima", "Pies elevados"] },
            { name: "Windshield Wiper",      icon: "🌬️", steps: ["Piernas a 90°", "Descender lateral", "Core absorbe"] },
            { name: "Hollow Body Hold",      icon: "🍌", steps: ["Zona lumbar al suelo", "Extremidades extendidas", "Respirar"] },
            { name: "Flutter Kicks",         icon: "🦋", steps: ["Cadera baja", "Patada alternada", "Zona lumbar plana"] },
        ],
        "Cardio": [
            { name: "Burpees",               icon: "⚡", steps: ["Plancha-jalón-salto", "Full body", "Ritmo constante"] },
            { name: "Mountain Climbers",     icon: "⛰️", steps: ["Plancha alta", "Rodillas al pecho", "Velocidad"] },
            { name: "Jumping Jacks",         icon: "🌟", steps: ["Sincronizar piernas-brazos", "Ritmo aeróbico", "Continuo"] },
            { name: "High Knees",            icon: "🏃", steps: ["Rodillas al ombligo", "Brazos activos", "Postura recta"] },
            { name: "Butt Kicks",            icon: "🦶", steps: ["Talón al glúteo", "Cadencia alta", "Inclinación leve"] },
            { name: "Sprint en Escalera",    icon: "🪜", steps: ["Pies ágiles", "Cabeza alta", "Potencia máxima"] },
            { name: "Shadow Boxing",         icon: "🥊", steps: ["Jab-Cross-Hook", "Pies activos", "Intensidad alta"] },
        ]
    };

    levels.forEach(lvl => {
        Object.keys(baseCal).forEach(cat => {
            baseCal[cat].forEach(ex => {
                let reps = lvl === 'elite' ? 12 : lvl === 'avanzado' ? 10 : lvl === 'intermedio' ? 12 : 15;
                let sets = lvl === 'elite' ? 5 : lvl === 'avanzado' ? 4 : 3;
                exercises.push({
                    name: ex.name, cat: cat, level: lvl,
                    muscle: cat === "Core" ? "Core / Abdomen" : cat === "Cardio" ? "Cardio Metabólico" :
                            cat === "Empuje" ? "Pecho / Hombros / Tríceps" :
                            cat === "Tracción" ? "Espalda / Bíceps" : "Cuádriceps / Glúteos",
                    icon: ex.icon, reps: reps,
                    desc: `[${lvl.toUpperCase()}] ${ex.name} — Ejercicio de calistenia de categoría ${cat}. Progresión sistemática para nivel ${lvl}.`,
                    steps: ex.steps,
                    sets: sets
                });
            });
        });
    });

    // ─── GIMNASIO: Base exercises with UNIQUE ICONS per exercise ───
    const baseGym = {
        "Fuerza": [
            { name: "Press de Banca",        icon: "🏋️", muscle: "Pecho / Tríceps / Hombros", steps: ["Retracción escapular", "Barra sobre pecho", "Empuje vertical"] },
            { name: "Peso Muerto",           icon: "⚓", muscle: "Isquios / Lumbar / Glúteos", steps: ["Barra sobre mediotarso", "Espalda neutra", "Empujar suelo"] },
            { name: "Sentadilla en Barra",   icon: "🦁", muscle: "Cuádriceps / Glúteos / Core", steps: ["Barra en trapecios", "Paralelo profundo", "Rodillas neutras"] },
            { name: "Press Militar",         icon: "🎖️", muscle: "Deltoides / Tríceps", steps: ["Barra a clavículas", "Empuje recto", "Lockout completo"] },
            { name: "Remo con Barra",        icon: "🚣", muscle: "Espalda Media / Bíceps", steps: ["Torso inclinado 45°", "Codo 70°", "Retraer escápulas"] },
            { name: "Press Arnold",          icon: "🌅", muscle: "Deltoides 3 cabezas", steps: ["Palmas adentro inicio", "Rotar al subir", "Lockout arriba"] },
            { name: "Jalón al Pecho",        icon: "🎣", muscle: "Dorsal Ancho / Bíceps", steps: ["Agarre supraancho", "Codo al suelo", "Pecho hacia barra"] },
        ],
        "Hipertrofia": [
            { name: "Curl de Bíceps",        icon: "💪", muscle: "Bíceps Braquial", steps: ["Codos fijos", "Supinación completa", "Fase excéntrica 3s"] },
            { name: "Extensión Tríceps",     icon: "🔱", muscle: "Tríceps Cabeza Larga", steps: ["Codos verticales", "Extensión máxima", "Sin balanceo"] },
            { name: "Prensa de Piernas",     icon: "🦿", muscle: "Cuádriceps / Glúteos", steps: ["Pies ancho hombros", "Rodillas 90°", "Rodillas neutras"] },
            { name: "Aperturas de Pecho",    icon: "🦅", muscle: "Pectoral Mayor", steps: ["Codos suavemente flexos", "Arco pectoral", "Control total"] },
            { name: "Pull Over",             icon: "🛸", muscle: "Dorsal / Pectoral", steps: ["Mancuerna sobre pecho", "Arco profundo", "Core activado"] },
            { name: "Remo en Polea",         icon: "🔗", muscle: "Espalda Media", steps: ["Sentado erguido", "Codo 90°", "Retraer y apretar"] },
            { name: "Vuelos Frontales",      icon: "✈️", muscle: "Deltoides Anterior", steps: ["Brazos semi-flexos", "Altura de hombros", "Controlado"] },
        ],
        "Musculación": [
            { name: "Vuelos Laterales",      icon: "🦜", muscle: "Deltoides Lateral", steps: ["Leve inclinación", "Codo ligeramente flexo", "No más de 90°"] },
            { name: "Curl Martillo",         icon: "🔨", muscle: "Braquial / Antebrazo", steps: ["Agarre neutro", "Sin supinación", "Controlar bajada"] },
            { name: "Encogimientos",         icon: "🤷", muscle: "Trapecio Superior", steps: ["Elevar hombros", "Sostener 2s", "Bajar controlado"] },
            { name: "Calf Raises",           icon: "👟", muscle: "Gemelos / Sóleo", steps: ["Talón bajo borde", "Elevation completa", "Sostener arriba"] },
            { name: "Face Pulls",            icon: "😤", muscle: "Deltoides Posterior / Rotadores", steps: ["Polea alta", "Jalar a la cara", "Codos arriba"] },
            { name: "Pec Deck",              icon: "🦚", muscle: "Pectoral Interno", steps: ["Buen arco pectoral", "No sobreextendir", "Contraer al cerrar"] },
            { name: "Patada Tríceps",        icon: "🦵", muscle: "Tríceps Cabeza Lateral", steps: ["Torso paralelo suelo", "Codo fijo", "Extensión completa"] },
        ]
    };

    const gymVars = ["con Barra", "con Mancuerna", "en Polea", "en Máquina", "en Smith", "Unilateral", "Inclinado"];
    levels.forEach(lvl => {
        Object.keys(baseGym).forEach(cat => {
            baseGym[cat].forEach(ex => {
                gymVars.forEach((variant, vi) => {
                    let r = lvl === 'elite' ? 5 : lvl === 'avanzado' ? 8 : lvl === 'intermedio' ? 10 : 15;
                    let method = cat === "Fuerza" ? "5×5 (Fuerza Máxima)" : cat === "Hipertrofia" ? "4×10 TUT" : "4×12 (Foco Muscular)";
                    // Each variant gets a slight icon variation using number emojis
                    const varIcons = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣"];
                    gymExercises.push({
                        name: `${ex.name} ${variant}`, cat: cat, level: lvl,
                        muscle: ex.muscle, icon: ex.icon,
                        reps: r,
                        desc: `[${lvl.toUpperCase()}] ${ex.name} ${variant} — Protocolo ${method}. Categoría: ${cat}.`,
                        steps: ex.steps,
                        method: method
                    });
                });
            });
        });
    });
}
populateDatabases();

/* === POPULATE STATIC LISTS === */
function populateStaticLists() {
    // Habits
    const h1 = document.getElementById('habits-entrenamiento');
    if(h1) h1.innerHTML = `<div class="exercise-item glass-premium"><div class="ex-icon">⏱️</div><div class="ex-info"><strong>Entrenaste hoy</strong><span>Mínimo 30 min</span></div></div>`;
    const h2 = document.getElementById('habits-nutricion');
    if(h2) h2.innerHTML = `<div class="exercise-item glass-premium"><div class="ex-icon">💧</div><div class="ex-info"><strong>Litros de agua</strong><span>Mínimo 2L</span></div></div>`;
    const h3 = document.getElementById('habits-mente');
    if(h3) h3.innerHTML = `<div class="exercise-item glass-premium"><div class="ex-icon">🧘</div><div class="ex-info"><strong>Respiración</strong><span>1 Sesión de foco</span></div></div>`;
    const h4 = document.getElementById('habits-sueno');
    if(h4) h4.innerHTML = `<div class="exercise-item glass-premium"><div class="ex-icon">🛏️</div><div class="ex-info"><strong>Descanso</strong><span>8 Horas</span></div></div>`;

    // Running
    const r1 = document.getElementById('run-stretch-list');
    if(r1) r1.innerHTML = `<div class="exercise-item glass-premium"><div class="ex-icon">🧘‍♂️</div><div class="ex-info"><strong>Estiramiento Gemelos</strong><span>3x30 seg</span></div></div>`;
    const r2 = document.getElementById('water-tips-list');
    if(r2) r2.innerHTML = `<li>Beber 500ml antes de salir</li><li>Hidratarse cada 20 min</li>`;
}
populateStaticLists();

/* === CORE NAVIGATION === */
let lastScreen = 'screen-home';
function goScreen(id) {

    if(id !== 'screen-exercise-detail') lastScreen = id;
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.toggle('active', s.id === id);
        s.classList.toggle('hidden', s.id !== id);
    });
    if (id === 'screen-home') renderDashboard();
    if (id === 'screen-breathing') stopBreathing();
    playSnd('snd-click');
}
function goBack() { goScreen(lastScreen); }

function playSnd(id) {
    const s = document.getElementById(id);
    if(s) { s.currentTime = 0; s.play().catch(()=>{}); }
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2000);
}

function changeLanguage(lang) {
    localStorage.setItem('fitalpha_lang', lang);
    const set = translations[lang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (set[key]) el.innerHTML = set[key];
    });
    renderExercises(); renderGym(); updateProgressStats();
}

/* === EXERCISES LISTS === */
let currentLevel = 'principiante';
let currentCalCat = 'todas';

function filterLevel(btn) {
    document.querySelectorAll('#cal-level-tabs .level-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.getAttribute('data-level');
    renderExercises();
}

function filterCalCat(btn) {
    document.querySelectorAll('#cal-cat-tabs .level-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    currentCalCat = btn.getAttribute('data-cat');
    renderExercises();
}

let currentGymLevel = 'principiante';
let currentGymCat = 'Musculación';

function filterGymLevel(btn) {
    document.querySelectorAll('#gym-level-tabs .level-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    currentGymLevel = btn.getAttribute('data-level');
    renderGym();
}

function filterGymCat(btn) {
    document.querySelectorAll('#gym-cat-tabs .level-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    currentGymCat = btn.getAttribute('data-cat');
    renderGym();
}

function renderExercises() {
    const list = document.getElementById('exercise-list'); if(!list) return;
    const filtered = exercises.filter(e => e.level === currentLevel && (currentCalCat === 'todas' || e.cat.toLowerCase() === currentCalCat.toLowerCase())).slice(0, 100);
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    document.getElementById('cal-count-sub').textContent = `${filtered.length} ${translations[lang].ex_available}`;
    list.innerHTML = filtered.map(e => `
        <div class="exercise-item glass-premium" onclick="showDetail('${e.name}', 'cal', '${e.level}')">
            <div class="ex-icon">${e.icon}</div>
            <div class="ex-info"><strong>${e.name}</strong></div>
            <span class="ex-badge ${e.level}">${e.level.toUpperCase()}</span>
        </div>`).join('');
}

function renderGym() {
    const list = document.getElementById('gym-list'); if(!list) return;
    
    const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filtered = gymExercises.filter(e => e.level === currentGymLevel && (normalize(e.cat) === normalize(currentGymCat) || currentGymCat === 'todas')).slice(0, 100);
    
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    document.getElementById('gym-count-sub').textContent = `${filtered.length} ${translations[lang].ex_available}`;
    list.innerHTML = filtered.map(e => `
        <div class="exercise-item glass-premium" onclick="showDetail('${e.name}', 'gym', '${e.level}')">
            <div class="ex-icon">${e.icon}</div>
            <div class="ex-info"><strong>${e.name}</strong><span style="display:block; font-size:0.75rem; opacity:0.8; font-weight:800; color:var(--primary);">${e.muscle}</span></div>
            <span class="ex-badge intermedio">${e.cat}</span>
        </div>`).join('');
}

function showDetail(name, type, level = null) {
    const db = type === 'cal' ? exercises : gymExercises;
    const e = level ? db.find(x => x.name === name && x.level === level) : db.find(x => x.name === name); 
    if(!e) return;
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    
    document.getElementById('detail-name-title').textContent = e.name;
    document.getElementById('detail-hero').textContent = e.icon;
    document.getElementById('detail-level').textContent = (e.level || 'GYM').toUpperCase();
    document.getElementById('detail-cat').textContent = e.cat;
    document.getElementById('detail-muscle').textContent = e.muscle;
    document.getElementById('detail-desc').textContent = e.desc;
    document.getElementById('detail-steps').innerHTML = e.steps.map(s => `<li>${s}</li>`).join('');
    
    const sMap = { principiante: "3", intermedio: "4", avanzado: "4", elite: "5" };
    const setsVal = e.sets || sMap[e.level] || "4";
    const method = e.method ? ` — ${e.method}` : '';
    document.getElementById('detail-sets').textContent = `${setsVal} series × ${e.reps} reps${method}`;
    document.getElementById('current-reps').textContent = e.reps;
    
    restInitialTime = (e.level === 'elite' ? 180 : 90);
    resetRestTimer();
    goScreen('screen-exercise-detail');
}

/* === DETAIL PAGE ACTIONS === */
function changeReps(diff) {
    const el = document.getElementById('current-reps');
    let val = parseInt(el.textContent) + diff;
    if (val < 1) val = 1;
    el.textContent = val;
}

function logSet() {
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    showToast(translations[lang].toast_set || "¡Serie lograda!");
    document.getElementById('rest-status').textContent = translations[lang].toast_rest || "¡GO!";
    startRestTimer();
}

/* === BREATHING ENGINE === */
let breatheT;
let isBreathing = false;
let bRound = 0;
const bModes = {
    box: {
        steps: [4, 4, 4, 4], names: ["inhale", "hold", "exhale", "hold"],
        title: "🟦 Respiración Cuadrada",
        info: "Técnica de las Fuerzas Especiales de EE.UU. Ciclos de 4 segundos iguales para un control total del sistema nervioso.",
        rhythm: "4s Inhala → 4s Retén → 4s Exhala → 4s Retén",
        benefits: ["⚡ Reduce el estrés y la ansiedad al instante", "🎯 Mejora el enfoque y la concentración", "💤 Facilita el sueño profundo", "🫁 Regula el sistema nervioso autónomo"]
    },
    478: {
        steps: [4, 7, 8], names: ["inhale", "hold", "exhale"],
        title: "🌙 Respiración 4-7-8",
        info: "Técnica del Dr. Andrew Weil. Activa el sistema parasimpático, ideal antes de dormir o en momentos de alta tensión.",
        rhythm: "4s Inhala → 7s Retén → 8s Exhala",
        benefits: ["😴 Induce el sueño en menos de 60 segundos", "🩺 Baja la presión arterial", "🧠 Desactiva el modo 'lucha o huida'", "😌 Calma el sistema nervioso"]
    },
    fire: {
        steps: [1, 1], names: ["inhale", "exhale"],
        title: "🔥 Respiración de Fuego",
        info: "Técnica del Yoga Kundalini (Kapalabhati). Respiraciones rápidas y rítmicas que activan la energía interna y limpian pulmones.",
        rhythm: "1s Inhala → 1s Exhala (ritmo rápido continuo)",
        benefits: ["⚡ Eleva la energía y vitalidad inmediatamente", "🔥 Activa el metabolismo", "🧹 Limpia vías respiratorias", "💪 Fortalece el diafragma"]
    },
    calm: {
        steps: [4, 8], names: ["inhale", "exhale"],
        title: "🌊 Respiración Calmante",
        info: "Patrón 1:2 (exhale el doble del inhale). Activa el nervio vago y reduce el cortisol, ideal para recuperación post-entrenamiento.",
        rhythm: "4s Inhala → 8s Exhala lento",
        benefits: ["🌿 Reduce el cortisol (hormona del estrés)", "💓 Mejora la variabilidad de la frecuencia cardíaca", "🏋️ Acelera la recuperación muscular", "🧘 Profundiza la meditación"]
    }
};
let curBMode = 'box';

function showBreathingMode(mode) {
    curBMode = mode;
    stopBreathing();
    const m = bModes[mode];
    document.querySelectorAll('#screen-breathing .level-tab').forEach(t => t.classList.toggle('active', t.getAttribute('onclick').includes(mode)));
    // Update info panel
    const titleEl = document.getElementById('breath-title');
    const infoEl  = document.getElementById('breath-info');
    const listEl  = document.getElementById('breath-benefits');
    const rhythmEl = document.getElementById('breath-rhythm');
    if(titleEl) titleEl.textContent = m.title;
    if(infoEl)  infoEl.textContent  = m.info;
    if(rhythmEl) rhythmEl.textContent = m.rhythm;
    if(listEl)  listEl.innerHTML = m.benefits.map(b => `<li>${b}</li>`).join('');
}

function toggleBreathing() {
    isBreathing ? stopBreathing() : startBreathing();
}

function startBreathing() {
    isBreathing = true; bRound = 0;
    const btn = document.getElementById('breath-start-btn');
    btn.classList.add('breathing-active');
    btn.innerHTML = `<i class="fa-solid fa-stop"></i> <span>⏹ Detener Sesión</span>`;
    document.getElementById('breath-phase').textContent = '...';
    executeBreathStep(0);
}

function stopBreathing() {
    isBreathing = false; clearTimeout(breatheT);
    const ring = document.getElementById('breath-ring');
    if(ring) ring.className = 'breath-ring';
    const phaseEl = document.getElementById('breath-phase');
    const countEl = document.getElementById('breath-count');
    if(phaseEl) phaseEl.textContent = '🫁';
    if(countEl) countEl.textContent = '';
    const btn = document.getElementById('breath-start-btn');
    if(btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> <span>▶ Iniciar Sesión</span>`;
    if(btn) btn.classList.remove('breathing-active');
}

function executeBreathStep(idx) {
    if(!isBreathing) return;
    const mode = bModes[curBMode];
    const stepIdx = idx % mode.steps.length;
    const time = mode.steps[stepIdx];
    const name = mode.names[stepIdx];
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    
    const ring = document.getElementById('breath-ring');
    ring.className = `breath-ring breath-${name}`;
    document.getElementById('breath-phase').textContent = translations[lang][name];
    
    let count = time;
    document.getElementById('breath-count').textContent = count;
    
    const tick = () => {
        if(!isBreathing) return;
        count--;
        if(count <= 0) {
            if(stepIdx === mode.steps.length - 1) bRound++;
            document.getElementById('breath-rounds').textContent = bRound;
            executeBreathStep(idx + 1);
        } else {
            document.getElementById('breath-count').textContent = count;
            breatheT = setTimeout(tick, 1000);
        }
    };
    breatheT = setTimeout(tick, 1000);
}

/* === HABITS, RUNNING & PACKS === */
function showHabitSection(id) {
    document.querySelectorAll('#screen-habits .level-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`#screen-habits .level-tab[onclick*="${id}"]`).classList.add('active');
    document.querySelectorAll('.habit-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`habit-${id}`).classList.remove('hidden');
}

function showRunSec(id) {
    document.querySelectorAll('.run-tabs .level-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.run-tabs .level-tab[onclick*="${id}"]`).classList.add('active');
    document.querySelectorAll('.run-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`run-${id}`).classList.remove('hidden');
}

function showProgressSection(id) {
    document.querySelectorAll('#screen-progress .level-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`#screen-progress .level-tab[onclick*="${id}"]`).classList.add('active');
    document.querySelectorAll('.progress-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`progress-${id}`).classList.remove('hidden');
}

let totalRunKm = 0;
function logRun() {
    const input = document.getElementById('run-km');
    const val = parseFloat(input.value);
    if(val > 0) {
        totalRunKm += val;
        document.getElementById('run-total-km').textContent = totalRunKm.toFixed(1);
        input.value = '';
        showToast("✓ Km añadidos exitosamente.");
        playSnd('snd-click');
    }
}

function loadPack(packId) {
    showToast("Master Pack Inicializado. Cargando rutinas...");
    playSnd('snd-end');
    // Demonstration behavior: load specific exercise for the pack
    setTimeout(() => { showDetail(packId === 'lower-sci' ? 'Sentadillas Clásicas' : 'Flexiones Clásicas', 'cal'); }, 800);
}

/* === BMI LOGIC === */
function calculateBMI() {
    const w = parseFloat(document.getElementById('calc-weight').value);
    const h = parseFloat(document.getElementById('calc-height').value) / 100;
    if(!w || !h) return;
    
    const bmi = (w / (h * h)).toFixed(1);
    document.getElementById('bmi-value').textContent = bmi;
    document.getElementById('calc-results').classList.remove('hidden');
    
    let pos = 50;
    if(bmi < 18.5) pos = 10;
    else if(bmi < 25) pos = 33;
    else if(bmi < 30) pos = 66;
    else pos = 90;
    
    document.getElementById('bmi-marker').style.left = `${pos}%`;
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    let cat = bmi < 18.5 ? 'bmi_under' : bmi < 25 ? 'bmi_normal' : bmi < 30 ? 'bmi_over' : 'bmi_obese';
    document.getElementById('bmi-cat').textContent = translations[lang][cat];
    
    document.getElementById('calc-ideal').textContent = (22 * (h * h)).toFixed(1);
    document.getElementById('calc-bmr').textContent = Math.round(10 * w + 6.25 * (h*100) - 5 * 25 + 5);
    playSnd('snd-end');
}

/* === UTILS === */
function renderDashboard() {
    const days = ['L','M','X','J','V','S','D'];
    const today = (new Date().getDay() + 6) % 7;
    const cal = document.getElementById('usage-calendar'); if(!cal) return;
    // Render day circles: today = primary color, past days show subtle glow
    cal.innerHTML = days.map((d, i) => {
        let cls = 'cal-day';
        if(i === today) cls += ' active today';
        else if(i < today) cls += ' done';
        return `<div class="${cls}">${d}</div>`;
    }).join('');
}
function updateProgressStats(){ /* Stats Logic */ }
function resetAllData(){ localStorage.clear(); location.reload(); }

let restT, restInitialTime = 60, currentRestTime = 60;
function resetRestTimer() { clearInterval(restT); document.getElementById('rest-time-display').textContent = '0:00'; }
function startRestTimer() {
    let s = restInitialTime;
    restT = setInterval(() => {
        s--;
        const m = Math.floor(s/60), sec = s%60;
        document.getElementById('rest-time-display').textContent = `${m}:${sec<10?'0':''}${sec}`;
        if(s <= 0) { clearInterval(restT); playSnd('snd-end'); }
    }, 1000);
}

function showApkInfo() {
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    const msg = {
        es: "Para instalar en Android/iOS: Presiona 'Compartir' o 'Menú' y selecciona 'Instalar aplicación' o 'Pantalla de Inicio'.",
        en: "To install on Android/iOS: Press 'Share' or 'Menu' and select 'Install App' or 'Add to Home Screen'.",
        fr: "Pour installer sur Android/iOS : Appuyez sur 'Partager' ou 'Menu' et sélectionnez 'Installer l'application'.",
        pt: "Para instalar no Android/iOS: Pressione 'Compartilhar' ou 'Menu' e selecione 'Instalar aplicativo'.",
        de: "Installation auf Android/iOS: Drücken Sie 'Teilen' oder 'Menü' und wählen Sie 'App installieren'.",
        it: "Per installare su Android/iOS: Premi 'Condividi' o 'Menu' e seleziona 'Installa applicazione'.",
        jp: "Android/iOSにインストールするには：[共有]または[メニュー]を押し、[アプリをインストール]を選択してください。"
    };
    showToast(msg[lang]);
    playSnd('snd-end');
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    changeLanguage(lang);
    renderExercises(); renderGym(); renderDashboard();
    showBreathingMode('box'); // Pre-load breathing info panel
});
