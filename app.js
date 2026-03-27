/* 
    FitAlpha Pro — Ultra Logic 2026 
    Premium Version with 400+ Exercises
    7-Language Support: ES, EN, FR, PT, DE, IT, JP
*/

const translations = {
    es: {
        welcome_title: "Tu entrenamiento,<br><span>tu disciplina.</span>",
        calisthenics: "Calistenia", cal_desc: "Dominio corporal absoluto",
        my_gym: "Mi Gimnasio", gym_desc: "Fuerza e hipertrofia",
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
        calisthenics: "Calisthenics", cal_desc: "Absolute body mastery",
        my_gym: "My Gym", gym_desc: "Strength and hypertrophy",
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
            { name: "Flexiones Clásicas",    icon: "🤜", steps: ["Coloca las manos ligeramente más anchas que los hombros.", "Mantén el cuerpo en una línea recta perfecta (tabla), activando glúteos y core.", "Desciende de forma controlada hasta que el pecho roce el suelo, con codos a 45°.", "Empuja de forma explosiva hacia la posición inicial bloqueando codos al final."] },
            { name: "Fondos en Silla",       icon: "💺", steps: ["Apoya las manos en el borde de una silla estable o banco.", "Extiende las piernas frente a ti y mantén la espalda cerca del apoyo.", "Baja el cuerpo flexionando los codos hasta que formen un ángulo de 90°.", "Presiona con fuerza hacia arriba usando los tríceps para volver al inicio."] },
            { name: "Dips en Paralelas",     icon: "🏗️", steps: ["Sujétate de las barras paralelas con un agarre neutro y brazos extendidos.", "Inclina ligeramente el torso hacia adelante para enfatizar el trabajo de pectoral.", "Desciende hasta que los hombros queden por debajo de la línea de los codos.", "Extiende los brazos con potencia, manteniendo los hombros lejos de las orejas."] },
            { name: "Archer Pushups",        icon: "🏹", steps: ["Adopta una posición de flexión con las manos muy abiertas.", "Desciende hacia un lado mientras mantienes el brazo opuesto totalmente recto.", "El brazo extendido debe actuar solo como apoyo, cargando el peso en el brazo flexionado.", "Alterna los lados de forma fluida manteniendo la cadera nivelada."] },
            { name: "Handstand Pushups",     icon: "🙃", steps: ["Ponte de pino contra una pared con los brazos bloqueados.", "Baja la cabeza de forma controlada hasta que casi toque el suelo.", "Mantén los codos hacia adentro, formando un trípode con las manos y la cabeza.", "Empuja con fuerza hacia arriba extendiendo los hombros totalmente."] },
            { name: "Pike Pushups",          icon: "🔺", steps: ["Forma una V invertida con el cuerpo, elevando la cadera con pies y manos apoyados.", "Baja la frente hacia el suelo por delante de la línea de tus manos.", "Mantén la tensión en los deltoides y el core activado.", "Empuja hacia atrás y arriba hasta recuperar la posición de V inicial."] },
            { name: "Diamond Pushups",       icon: "💎", steps: ["Forma un diamante con tus dedos índice y pulgares bajo el pecho.", "Desciende manteniendo los codos pegados a los costados del cuerpo.", "Toca tus manos con el esternón y siente la contracción en los tríceps.", "Extiende los brazos bloqueando codos para máxima activación del tríceps."] },
            { name: "One Arm Pushup",        icon: "☝️", steps: ["Separa ampliamente los pies para crear una base de apoyo triangular estable.", "Coloca la mano de empuje centrada bajo el esternón y la otra tras la espalda.", "Baja el cuerpo evitando la rotación excesiva de la cadera.", "Empuja con explosividad manteniendo la alineación del hombro y la muñeca."] },
            { name: "Explosive Pushup",      icon: "💥", steps: ["Realiza una flexión normal bajando de forma muy lenta (3 segundos).", "En el punto más bajo, empuja con tanta fuerza que tus manos despeguen del suelo.", "Aterriza suavemente absorbiendo el impacto con los codos ligeramente flexos.", "Reinicia el movimiento inmediatamente sin perder la tensión abdominal."] },
            { name: "Clapping Pushup",       icon: "👏", steps: ["Genera un empuje máximo desde la posición inferior de la flexión.", "Mientras estás en el aire, da una palmada rápida frente al pecho.", "Devuelve las manos a su posición original antes de tocar el suelo.", "Amortigua la caída y mantén el cuerpo rígido como una tabla."] },
            { name: "Spiderman Pushup",      icon: "🕷️", steps: ["Al descender en la flexión, lleva una rodilla hacia el codo del mismo lado.", "Mantén la rodilla en el aire y el cuerpo paralelo al suelo.", "Vuelve a la posición inicial mientras extiendes la pierna atrás.", "Alterna de pierna en cada repetición para trabajar oblicuos y serratos."] },
            { name: "Pseudo Planche Push",   icon: "⚖️", steps: ["Coloca las manos a la altura de la cintura con los dedos apuntando hacia atrás.", "Inclina todo el cuerpo hacia adelante hasta que tus hombros pasen la línea de las manos.", "Baja manteniendo la inclinación y los codos pegados al cuerpo.", "Siente la tensión extrema en los hombros anteriores y bíceps."] },
        ],
        "Tracción": [
            { name: "Dominadas Prona",       icon: "🔝", steps: ["Cuélgate de la barra con un agarre ligeramente superior al ancho de hombros.", "Inicia el movimiento con una retracción escapular (juntando omóplatos).", "Sube el pecho hacia la barra superándola con la barbilla sin balanceos.", "Baja de forma controlada extendiendo los brazos completamente."] },
            { name: "Chin-ups Supina",       icon: "💪", steps: ["Agarra la barra con las palmas mirando hacia ti (supinación).", "Tira con fuerza enfocándote en llevar los codos hacia tus costados.", "Supera la barra con la barbilla y aprieta los bíceps en el punto máximo.", "Desciende lentamente resistiendo la gravedad para maximizar la hipertrofia."] },
            { name: "Neutral Pullup",        icon: "🤝", steps: ["Usa un agarre paralelo de modo que tus palmas se miren entre sí.", "Mantén el pecho alto y la columna vertebral en posición neutra.", "Tira hacia arriba evitando que los hombros se encojan hacia las orejas.", "Controla la fase negativa estirando los dorsales al máximo al bajar."] },
            { name: "Aussie Pull",           icon: "🌏", steps: ["Usa una barra baja a nivel de la cintura y colócate bajo ella.", "Mantén los talones apoyados y el cuerpo recto como una vara.", "Tira del pecho hacia la barra apretando la espalda media.", "Baja con control sintiendo el estiramiento entre los omóplatos."] },
            { name: "Muscle Up",             icon: "🏆", steps: ["Realiza una dominada explosiva con agarre falso o ligeramente adelantado.", "Cuando el pecho alcance la barra, realiza una transición rápida de los codos hacia arriba.", "Finaliza con un empuje de fondo (dip) hasta bloquear los brazos arriba.", "Baja controlando la transición para evitar lesiones en el hombro."] },
            { name: "Front Lever Row",       icon: "🎯", steps: ["Adopta la posición de Front Lever (o su progresión: tuck, advanced).", "Manteniendo el cuerpo paralelo al suelo, tira de la barra hacia la cintura.", "Crucial mantener la cadera alta y el core en máxima tensión isométrica.", "Extiende los brazos sin dejar que el cuerpo caiga hacia abajo."] },
            { name: "Dragon Flag",           icon: "🐉", steps: ["Túmbate en un banco y sujétate fuertemente por detrás de la cabeza.", "Eleva todo el cuerpo hasta que solo apoyes las escápulas.", "Baja el cuerpo en bloque (piernas y torso alineados) lo más lento posible.", "Sube de nuevo antes de tocar el banco usando puramente la fuerza del core."] },
            { name: "Scapular Pull",         icon: "🦴", steps: ["Cualquier ejercicio de tracción colgado, mantén los brazos totalmente rectos.", "Realiza el movimiento únicamente separando y juntando tus omóplatos.", "Siente cómo la espalda superior se activa sin involucrar los brazos.", "Sostén la contracción 2 segundos para mejorar la salud del hombro."] },
        ],
        "Piernas": [
            { name: "Sentadilla Clásica",    icon: "🦵", steps: ["Pies al ancho de hombros, puntas ligeramente hacia afuera.", "Baja la cadera como si fueras a sentarte, manteniendo la espalda recta.", "Empuja con los talones y mantén las rodillas alineadas con los pies.", "Sube exhalando y aprieta glúteos al finalizar la extensión."] },
            { name: "Zancada Frontal",       icon: "🚶", steps: ["Da un paso largo hacia adelante manteniendo el torso erguido.", "Baja la rodilla trasera hasta que casi toque el suelo (90° en ambas piernas).", "Empuja con la pierna delantera para volver a la posición inicial.", "Mantén el core firme para evitar desequilibrios laterales."] },
            { name: "Pistol Squat",          icon: "🔫", steps: ["Extiende una pierna al aire frente a ti y mantén los brazos adelante.", "Baja con la pierna de apoyo de forma controlada y profunda.", "Mantén el talón pegado al suelo y la rodilla estable.", "Vuelve a subir con potencia manteniendo la pierna libre en el aire."] },
            { name: "Box Jump",              icon: "📦", steps: ["Frente a un cajón o plataforma estable, inicia un balanceo de brazos.", "Realiza un salto explosivo aterrizando con ambos pies suavemente sobre el cajón.", "Asegúrate de caer con las rodillas semiflexionadas para amortiguar.", "Extiende cadera arriba y baja dando un paso, no saltando atrás."] },
            { name: "Sissy Squat",           icon: "🏛️", steps: ["Sujétate de algo si es necesario y elévate sobre las puntas de los pies.", "Inclina el torso hacia atrás mientras llevas las rodillas hacia adelante.", "Baja hasta sentir un estiramiento intenso en los cuádriceps.", "Vuelve a la vertical empujando con la punta de los pies."] },
            { name: "Bulgarian Split",       icon: "🇧🇬", steps: ["Coloca un pie atrás sobre un banco o elevación.", "Baja el cuerpo verticalmente con la pierna delantera.", "Mantén la rodilla delantera sobre el tobillo, sin que sobrepase la punta.", "Siente el trabajo en el glúteo y cuádriceps de la pierna de apoyo."] },
            { name: "Shrimp Squat",          icon: "🦐", steps: ["Flexiona una pierna atrás sujetando el pie con la mano opuesta.", "Baja hasta que la rodilla de la pierna libre toque suavemente el suelo.", "Inclina el torso ligeramente adelante para mantener el equilibrio.", "Empuja con la pierna de apoyo para recuperar la posición erguida."] },
            { name: "Nordic Curl",           icon: "🌨️", steps: ["Ponte de rodillas con los tobillos bloqueados por un compañero o soporte.", "Baja el torso hacia adelante de la forma más lenta posible utilizando isquiotibiales.", "Cuando no puedas resistir más, apóyate con las manos en el suelo.", "Usa un ligero impulso de manos para volver arriba mientras los isquios tiran."] },
        ],
        "Core": [
            { name: "Plancha Isométrica",    icon: "🧱", steps: ["Apoya antebrazos y puntas de pies, alineando hombros con codos.", "Contrae glúteos, abdomen y cuádriceps para evitar que la cadera caiga.", "Empuja con los codos hacia el suelo para separar las escápulas.", "Mantén la mirada al suelo y respira de forma rítmica y profunda."] },
            { name: "Ab Wheel Rollout",      icon: "☸️", steps: ["De rodillas, sujeta el rodillo y extiende los brazos frente a ti.", "Rueda hacia adelante manteniendo la espalda ligeramente redondeada (core activo).", "Llega hasta donde puedas sin que la zona lumbar se arquee.", "Tira del rodillo hacia tus rodillas usando únicamente los abdominales."] },
            { name: "Hanging Leg Raise",     icon: "🎢", steps: ["Cualquier barra, cuélgate con brazos estirados y core en tensión.", "Eleva las piernas totalmente rectas hasta que tus pies toquen la barra.", "Evita el uso de la inercia o el balanceo excesivo del cuerpo.", "Baja las piernas de forma extremadamente lenta sintiendo la tensión abdominal."] },
            { name: "L-Sit Hold",            icon: "💺", steps: ["Apoya las manos en el suelo o paralelas con los brazos bloqueados.", "Eleva las piernas hasta que queden paralelas al suelo (forma de L).", "Mantén los hombros deprimidos y el pecho abierto.", "Sostén la posición comprimiendo el abdomen al máximo."] },
            { name: "Russian Twist",         icon: "🌀", steps: ["Siéntate con las rodillas flexionadas y eleva los pies del suelo.", "Inclina el torso atrás 45°, sintiendo la activación del abdomen.", "Rota el torso de lado a lado tocando el suelo con las manos.", "Mantén las piernas lo más quietas posible durante la rotación."] },
            { name: "Windshield Wiper",      icon: "🌬️", steps: ["Fíjate en una barra o túmbate boca arriba con los brazos abiertos.", "Eleva las piernas a 90° y bájalas hacia un lado sin tocar el suelo.", "Vuelve al centro y baja hacia el otro lado de forma controlada.", "Usa los oblicuos para frenar la caída y potenciar el retorno."] },
            { name: "Hollow Body Hold",      icon: "🍌", steps: ["Tumbado boca arriba, pega la zona lumbar firmemente contra el suelo.", "Eleva ligeramente las piernas y los hombros (forma de plátano).", "Extiende los brazos por detrás de la cabeza para mayor dificultad.", "Mantén la tensión muscular total y respira suavemente."] },
            { name: "Flutter Kicks",         icon: "🦋", steps: ["Boca arriba con manos bajo glúteos para proteger la lumbar.", "Eleva los pies unos 15 cm del suelo y realiza patadas alternas cortas.", "Mantén las piernas totalmente rectas y la punta de los pies hacia afuera.", "No permitas que los talones toquen el suelo en ningún momento."] },
        ],
        "Cardio": [
            { name: "Burpees",               icon: "⚡", steps: ["Desde posición erguida, baja a cuclillas y salta a posición de plancha.", "Realiza una flexión tocando el pecho en el suelo.", "Recoge los pies hacia adentro y salta explosivamente con brazos arriba.", "Aterriza suavemente e inicia la siguiente repetición sin pausas."] },
            { name: "Mountain Climbers",     icon: "⛰️", steps: ["Posición de plancha alta con las manos bajo los hombros.", "Lleva una rodilla hacia el pecho de forma explosiva alternando piernas.", "Mantén la cadera baja y el cuerpo alineado en todo momento.", "Aumenta la velocidad para maximizar el gasto calórico."] },
            { name: "Jumping Jacks",         icon: "🌟", steps: ["Inicia de pie con brazos a los costados y pies juntos.", "Salta separando las piernas mientras llevas los brazos sobre la cabeza.", "Vuelve con un salto a la posición original de forma rítmica.", "Mantén un rebote suave sobre las puntas de los pies."] },
            { name: "High Knees",            icon: "🏃", steps: ["Corre en el sitio elevando las rodillas hacia el ombligo.", "Mantén el torso recto y mueve los brazos en coordinación.", "El impacto debe ser mínimo, aterrizando siempre con el mediotarso.", "Busca una cadencia alta para activar el sistema cardiovascular."] },
            { name: "Butt Kicks",            icon: "🦶", steps: ["Trota suavemente elevando los talones hacia los glúteos.", "Inclina el torso ligeramente hacia adelante.", "Siente el estiramiento dinámico en los cuádriceps y la activación de isquios.", "Mantén un ritmo constante y fluido durante todo el tiempo."] },
            { name: "Sprint en Escalera",    icon: "🪜", steps: ["Usa un escalón o escalera de agilidad, mueve los pies rápido adentro-fuera.", "Usa los brazos para ganar potencia y equilibrio.", "Mantén la mirada al frente, no a los pies, para mejorar la propiocepción.", "Entra y sale de cada espacio con precisión técnica."] },
            { name: "Shadow Boxing",         icon: "🥊", steps: ["Frente a un espejo, lanza combinaciones de golpes al aire (Jab-Cross).", "Mantén las rodillas flexionadas y los pies en movimiento constante.", "Expulsa el aire en cada golpe para mayor potencia.", "Visualiza a un oponente para mantener la guardia alta y activa."] },
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
            { name: "Press de Banca",        icon: "🏋️", muscle: "Pecho / Tríceps / Hombros", steps: ["Retrae las escápulas y apóyalas firmemente en el banco.", "Agarra la barra a un ancho superior a hombros y sácala del soporte.", "Baja la barra lentamente hacia la zona media del pecho, codos a 45°.", "Empuja la barra verticalmente exhalando en el esfuerzo máximo."] },
            { name: "Peso Muerto",           icon: "⚓", muscle: "Isquios / Lumbar / Glúteos", steps: ["Pies al ancho de cadera, barra sobre la mitad de los pies.", "Agarra la barra y baja la cadera hasta que las espinillas toquen la barra.", "Mantén la espalda neutra y tira de la barra pegada a las piernas.", "Extiende cadera y rodillas a la vez hasta estar totalmente erguido."] },
            { name: "Sentadilla en Barra",   icon: "🦁", muscle: "Cuádriceps / Glúteos / Core", steps: ["Coloca la barra sobre los trapecios y saca pecho.", "Baja la cadera rompiendo el paralelo (90° o más) con espalda neutra.", "No permitas que las rodillas colapsen hacia adentro.", "Sube con potencia empujando desde el talón."] },
            { name: "Press Militar",         icon: "🎖️", muscle: "Deltoides / Tríceps", steps: ["Barra apoyada en la parte superior del pecho con agarre firme.", "Empuja la barra hacia el techo pasando cerca de la cara.", "Bloquea los codos arriba con la cabeza ligeramente adelantada.", "Baja con control hasta la posición de inicio en las clavículas."] },
            { name: "Remo con Barra",        icon: "🚣", muscle: "Espalda Media / Bíceps", steps: ["Torso inclinado 45° con las rodillas ligeramente flexionadas.", "Tira de la barra hacia la zona del ombligo apretando la espalda.", "Mantén los codos pegados al cuerpo y las escápulas retraídas.", "Baja la barra lentamente estirando los dorsales por completo."] },
            { name: "Press Arnold",          icon: "🌅", muscle: "Deltoides 3 cabezas", steps: ["Mancuernas frente al pecho con las palmas mirando hacia ti.", "Abre los brazos lateralmente mientras rotas las palmas hacia afuera.", "Empuja hacia arriba hasta extender los brazos totalmente.", "Invierte el movimiento rotando de nuevo las palmas hacia adentro."] },
            { name: "Jalón al Pecho",        icon: "🎣", muscle: "Dorsal Ancho / Bíceps", steps: ["Sujeta la barra con un agarre ancho y siéntate con rodillas fijas.", "Tira de la barra hacia el pecho inclinando ligeramente el torso.", "Encuentra el pico de contracción abajo apretando los dorsales.", "Sube lentamente permitiendo que la barra estire bien tu espalda."] },
        ],
        "Hipertrofia": [
            { name: "Curl de Bíceps",        icon: "💪", muscle: "Bíceps Braquial", steps: ["De pie, codos pegados a los costados y mirada al frente.", "Eleva el peso flexionando el codo sin mover el hombro.", "Aprieta el bíceps al máximo arriba (isometría 1 segundo).", "Baja muy lento (3 segundos) para romper más fibras musculares."] },
            { name: "Extensión Tríceps",     icon: "🔱", muscle: "Tríceps Cabeza Larga", steps: ["Sujeta la mancuerna o polea sobre la cabeza con brazos extendidos.", "Desciende el peso por detrás de la nuca flexionando los codos.", "Mantén los codos cerrados, cerca de las orejas.", "Extiende totalmente los brazos sintiendo la quemazón en el tríceps."] },
            { name: "Prensa de Piernas",     icon: "🦿", muscle: "Cuádriceps / Glúteos", steps: ["Pies al ancho de hombros en el centro de la plataforma.", "Baja la carga hasta que tus rodillas formen un ángulo de 90°.", "No despegues la zona lumbar del respaldo del asiento.", "Empuja hacia afuera sin bloquear las rodillas al final."] },
            { name: "Aperturas de Pecho",    icon: "🦅", muscle: "Pectoral Mayor", steps: ["Tumbado en banco, mancuernas sobre el pecho con codos semiflexos.", "Abre los brazos lateralmente en forma de arco hasta sentir estiramiento.", "No bajes más allá de la línea de los hombros.", "Cierra de nuevo los brazos apretando el pectoral al centro."] },
            { name: "Pull Over",             icon: "🛸", muscle: "Dorsal / Pectoral", steps: ["Apoya solo la espalda superior en el banco de forma transversal.", "Baja la mancuerna por detrás de la cabeza con brazos casi estirados.", "Inhala profundo para expandir la caja torácica.", "Tira de vuelta hasta la altura de los ojos usando el dorsal."] },
            { name: "Remo en Polea",         icon: "🔗", muscle: "Espalda Media", steps: ["Sentado con espalda recta y pies en soportes.", "Tira del agarre hacia el abdomen retrayendo escápulas.", "Mantén los codos pegados al torso y pecho arriba.", "Extiende los brazos lentamente sin encorvar la espalda."] },
            { name: "Vuelos Frontales",      icon: "✈️", muscle: "Deltoides Anterior", steps: ["Eleva el peso frente a ti con los brazos casi rectos.", "Llega hasta la altura de los ojos sin balancear el cuerpo.", "Mantén la tensión constante en el deltoides anterior.", "Baja controlando el peso resistiendo la caída."] },
        ],
        "Musculación": [
            { name: "Vuelos Laterales",      icon: "🦜", muscle: "Deltoides Lateral", steps: ["Ligeramente inclinado adelante, eleva mancuernas hacia los lados.", "Codos ligeramente más altos que las muñecas.", "Llega a la horizontal y siente el aislamiento del hombro medio.", "Baja muy despacio manteniendo la tensión muscular."] },
            { name: "Curl Martillo",         icon: "🔨", muscle: "Braquial / Antebrazo", steps: ["Agarre neutro (palmas hacia adentro) y core firme.", "Eleva el peso sin rotar la muñeca.", "Excelente para dar grosor al brazo y fortalecer antebrazo.", "Controla la fase negativa estirando bien el músculo."] },
            { name: "Encogimientos",         icon: "🤷", muscle: "Trapecio Superior", steps: ["Sujeta peso a los costados y eleva los hombros hacia las orejas.", "No rotes los hombros, el movimiento es solo vertical.", "Sostén la contracción 2 segundos en el punto más alto.", "Baja estirando los trapecios por completo."] },
            { name: "Calf Raises",           icon: "👟", muscle: "Gemelos / Sóleo", steps: ["Punta de pies en un borde elevado, talones al aire.", "Baja el talón todo lo posible para estirar el gemelo.", "Sube de puntillas al máximo y sostén 1 segundo arriba.", "Realiza el movimiento de forma lenta y pausada."] },
            { name: "Face Pulls",            icon: "😤", muscle: "Deltoides Posterior / Rotadores", steps: ["Tira de la cuerda hacia tu frente o nariz con codos altos.", "Separa las puntas de la cuerda al final del recorrido.", "Enfoque en la salud del hombro y deltoides posterior.", "Sostén la contracción final para mejorar la postura."] },
            { name: "Pec Deck",              icon: "🦚", muscle: "Pectoral Interno", steps: ["Siéntate con espalda apoyada y brazos en soportes.", "Cierra los brazos al centro apretando el área interna del pecho.", "Evita estirar demasiado los hombros al volver atrás.", "Músculo bajo tensión constante en todo el rango."] },
            { name: "Patada Tríceps",        icon: "🦵", muscle: "Tríceps Cabeza Lateral", steps: ["Torso paralelo al suelo y codo pegado al costado.", "Extiende el brazo hacia atrás bloqueando el codo.", "No dejes que el hombro se mueva, solo el antebrazo.", "Siente la contracción máxima en la cabeza lateral del tríceps."] },
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
    document.getElementById('detail-steps').innerHTML = e.steps.map((s,i) => `<li><span class="step-num">${i+1}</span>${s}</li>`).join('');
    
    // Coach tip based on category
    const tips = {
        "Empuje":    "Retrae las escápulas antes de empujar. Codos a 45° del torso. Exhala en el esfuerzo.",
        "Tracción":  "Inicia con la escápula, no con el bíceps. Hombros bajos y atrás durante todo el rango.",
        "Piernas":   "Rodillas alineadas con el pie. Peso en el talón. Cadera primero al bajar, no las rodillas.",
        "Core":      "Zona lumbar pegada al suelo. Respira mientras sostienes. Nunca aguantes más de lo necesario.",
        "Cardio":    "Mantén ritmo cardíaco entre 130-160 ppm. Hidratación cada 15 min. Postura erecta siempre.",
        "Fuerza":    "Prioriza ROM completo sobre el peso. 3-5 min de descanso entre series de fuerza máxima.",
        "Hipertrofia": "TUT (Tiempo bajo tensión): 2s subir, 1s aguantar, 3s bajar. Así maximizas el daño muscular.",
        "Musculación": "Contracción isométrica en el punto máximo. 1-2 min de descanso. Foco total en el músculo objetivo."
    };
    const tipEl = document.getElementById('coach-tip');
    if(tipEl) tipEl.textContent = tips[e.cat] || "Ejecuta cada repetición con control. Calidad sobre cantidad.";
    
    const sMap = { principiante: "3", intermedio: "4", avanzado: "4", elite: "5" };
    const setsVal = e.sets || sMap[e.level] || "4";
    const method = e.method ? ` — ${e.method}` : '';
    document.getElementById('detail-sets').textContent = `${setsVal} series × ${e.reps} reps${method}`;
    document.getElementById('current-reps').textContent = e.reps;
    
    restInitialTime = (e.level === 'elite' ? 180 : e.level === 'avanzado' ? 120 : 90);
    const recEl = document.getElementById('rest-rec');
    if(recEl) recEl.textContent = restInitialTime + 's';
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
    document.getElementById('breath-phase').innerHTML = `<i class="fa-solid fa-dharmachakra fa-spin" style="color:#00c9ff; font-size:2.5rem; opacity:0.8;"></i>`;
    executeBreathStep(0);
}

function stopBreathing() {
    isBreathing = false; clearTimeout(breatheT);
    const ring = document.getElementById('breath-ring');
    if(ring) ring.className = 'breath-ring';
    const phaseEl = document.getElementById('breath-phase');
    const countEl = document.getElementById('breath-count');
    if(phaseEl) phaseEl.innerHTML = '<i class="fa-solid fa-dharmachakra" style="font-size:3rem; color:var(--primary); opacity:0.8;"></i>';
    if(countEl) countEl.textContent = '';
    const btn = document.getElementById('breath-start-btn');
    if(btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> <span>▶ Iniciar</span>`;
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
    document.getElementById('breath-phase').innerHTML = `<i class="fa-solid fa-dharmachakra fa-spin" style="color:#00c9ff; font-size:2.8rem; margin-bottom: 5px;"></i><br><span style="font-size:1.2rem; font-weight:800; text-transform:uppercase;">${translations[lang][name]}</span>`;
    
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

const masterPacks = {
    'full-sci': {
        title: "Protocolo FullBody (Eje Hormonal)", desc: "Oxidación máxima. Impacto en todo el cuerpo para liberar testosterona y hormona de crecimiento.",
        exercises: ['Dominadas Prona','Flexiones Clásicas','Sentadilla Clásica','Plancha Isométrica']
    },
    'upper-sci': {
        title: "Torso Destructor (Hipertrofia)", desc: "Enfoque en pecho, hombros y espalda usando resistencia progresiva y tiempo bajo tensión.",
        exercises: ['Dominadas Prona','Flexiones Clásicas','Dips en Paralelas','Aussie Pull']
    },
    'lower-sci': {
        title: "Piernas de Titanio (Explosividad)", desc: "Quema de grasa agresiva en el tren inferior. Estimula el metabolismo basal de forma natural.",
        exercises: ['Sentadilla Clásica','Zancada Frontal','Plancha Isométrica']
    },
    'hybrid-sci': {
        title: "Híbrido Metabólico (Cardio)", desc: "Combinación de calistenia y descansos cortos para generar un entorno V02 Máx extremo.",
        exercises: ['Flexiones Clásicas','Sentadilla Clásica', 'Burpees']
    }
};

function loadPack(packId) {
    playSnd('snd-end');
    const pack = masterPacks[packId];
    if(!pack) return;
    
    document.getElementById('pack-detail-title').textContent = pack.title;
    document.getElementById('pack-detail-desc').textContent = pack.desc;
    
    // Render exercise list for this pack
    const container = document.getElementById('pack-exercise-list');
    container.innerHTML = '';
    
    pack.exercises.forEach(exName => {
        // Buscamos dentro del array global 'exercises'
        const d = exercises.find(e => e.name === exName); 
        if(d) {
            container.innerHTML += `
            <div class="exercise-item" onclick="showDetail('${d.name}', 'cal')">
                <div class="ex-icon" style="background:var(--primary); color:white; width:50px; height:50px; display:flex; align-items:center; justify-content:center; border-radius:15px; font-size:1.5rem;">${d.icon}</div>
                <div class="ex-info" style="margin-left:15px;">
                    <strong>${d.name}</strong>
                    <div style="font-size:0.75rem; opacity:0.8; margin-top:4px;">Biomecánica Profesional</div>
                </div>
                <i class="fa-solid fa-chevron-right" style="opacity:0.5; margin-left:10px;"></i>
            </div>`;
        }
    });

    goScreen('screen-pack-detail');
}

/* === PWA INSTALLATION === */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    deferredPrompt = e;
    // Show the custom install button on the home screen
    document.getElementById('install-pwa-btn').classList.remove('hidden');
});

function installPWA() {
    if (!deferredPrompt) {
        showToast("✓ La app ya está instalada o tu navegador no lo soporta directamente desde aquí.");
        return;
    }
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('Usuario aceptó instalar la PWA');
            document.getElementById('install-pwa-btn').classList.add('hidden');
        } else {
            console.log('Usuario rechazó instalar la PWA');
        }
        deferredPrompt = null;
    });
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

let restT, restInitialTime = 90, currentRestTime = 90;
const REST_CIRCUMFERENCE = 2 * Math.PI * 40; // r=40

function resetRestTimer() {
    clearInterval(restT);
    const display = document.getElementById('rest-time-display');
    const circle  = document.getElementById('rest-progress-circle');
    const btn     = document.getElementById('rest-start-btn');
    const status  = document.getElementById('rest-status');
    if(display) display.textContent = '0:00';
    if(circle)  { circle.style.strokeDasharray = REST_CIRCUMFERENCE; circle.style.strokeDashoffset = REST_CIRCUMFERENCE; }
    if(btn)     { btn.innerHTML = '<i class="fa-solid fa-play"></i> Iniciar Descanso'; btn.disabled = false; }
    if(status)  status.textContent = '⬆ Presiona "Completar Serie" para iniciar automáticamente';
}

function startRestTimer() {
    clearInterval(restT);
    let s = restInitialTime;
    const circle = document.getElementById('rest-progress-circle');
    const btn    = document.getElementById('rest-start-btn');
    const status = document.getElementById('rest-status');
    if(btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i> Descansando...';
    if(status) status.textContent = '💪 ¡Descansa y prepárate para la siguiente serie!';
    if(circle) { circle.style.strokeDasharray = REST_CIRCUMFERENCE; circle.style.strokeDashoffset = '0'; }
    restT = setInterval(() => {
        s--;
        const m = Math.floor(s/60), sec = s % 60;
        const display = document.getElementById('rest-time-display');
        if(display) display.textContent = `${m}:${sec < 10 ? '0' : ''}${sec}`;
        // Update SVG ring progress
        if(circle) {
            const offset = REST_CIRCUMFERENCE - (s / restInitialTime) * REST_CIRCUMFERENCE;
            circle.style.strokeDashoffset = offset;
        }
        if(s <= 0) {
            clearInterval(restT);
            playSnd('snd-end');
            const st = document.getElementById('rest-status');
            if(st) st.textContent = '🔥 ¡Listo! Empieza la siguiente serie ahora.';
            const b = document.getElementById('rest-start-btn');
            if(b) b.innerHTML = '<i class="fa-solid fa-play"></i> Nueva Serie';
        }
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
function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'FitAlpha Pro',
            text: '¡Ey! Descarga mi nueva app de entrenamiento. Instálala desde aquí:',
            url: window.location.href,
        }).catch(err => showToast("Error al compartir"));
    } else {
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        showToast("Enlace copiado al portapapeles. ¡Pégalo en WhatsApp!");
    }
}

function initHabits() {
    const checks = document.querySelectorAll('.habit-check');
    const stored = JSON.parse(localStorage.getItem('fitalpha_habits') || '[]');
    checks.forEach((cb, idx) => {
        cb.checked = stored[idx] || false;
        cb.addEventListener('change', () => {
            const current = Array.from(checks).map(c => c.checked);
            localStorage.setItem('fitalpha_habits', JSON.stringify(current));
            if(cb.checked) playSnd('snd-click');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('fitalpha_lang') || 'es';
    changeLanguage(lang);
    renderExercises(); renderGym(); renderDashboard();
    initHabits();
    showBreathingMode('box'); // Pre-load breathing info panel
});
