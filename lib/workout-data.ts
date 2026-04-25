export interface Exercise {
  id: number;
  name: string;
  nameAr: string;
  targetPart: string; // e.g., 'upper_chest', 'lats', etc.
}

export interface Section {
  title: string;
  titleAr: string;
  exercises: Exercise[];
}

export interface WorkoutPage {
  id: string;
  title: string;
  titleAr: string;
  color: string;
  sections: Section[];
  tips: string[];
  tipsAr: string[];
}

export const WORKOUT_DATA: WorkoutPage[] = [
  {
    id: "chest",
    title: "CHEST WORKOUT",
    titleAr: "تمارين الصدر",
    color: "#EF4444",
    sections: [
      {
        title: "Upper Chest (Upper Pectorals)",
        titleAr: "الصدر العلوي",
        exercises: [
          { id: 1, name: "Incline Barbell Bench Press", nameAr: "بنش برس علوي بالبار", targetPart: "chest_upper" },
          { id: 2, name: "Incline Dumbbell Bench Press", nameAr: "بنش برس علوي بالدمبلز", targetPart: "chest_upper" },
          { id: 3, name: "Incline Smith Machine Press", nameAr: "بنش برس علوي بجهاز سميث", targetPart: "chest_upper" },
          { id: 4, name: "Incline Cable Fly", nameAr: "رفرفة (تجميع) علوي بالكابل", targetPart: "chest_upper" },
          { id: 5, name: "Low to High Cable Fly", nameAr: "رفرفة من أسفل لأعلى بالكابل", targetPart: "chest_upper" },
          { id: 6, name: "Incline Dumbbell Fly", nameAr: "رفرفة (تجميع) علوي بالدمبلز", targetPart: "chest_upper" },
          { id: 7, name: "Guillotine Press", nameAr: "جيلوتين برس", targetPart: "chest_upper" },
          { id: 8, name: "Reverse Grip Bench Press", nameAr: "بنش برس قبضة معكوسة", targetPart: "chest_upper" },
        ]
      },
      {
        title: "Middle Chest (Mid / Inner Chest)",
        titleAr: "الصدر الأوسط",
        exercises: [
          { id: 9, name: "Flat Barbell Bench Press", nameAr: "بنش برس مستوي بالبار", targetPart: "chest_mid" },
          { id: 10, name: "Flat Dumbbell Bench Press", nameAr: "بنش برس مستوي بالدمبلز", targetPart: "chest_mid" },
          { id: 11, name: "Chest Press Machine", nameAr: "جهاز ضغط الصدر", targetPart: "chest_mid" },
          { id: 12, name: "Flat Dumbbell Fly", nameAr: "رفرفة (تجميع) مستوي بالدمبلز", targetPart: "chest_mid" },
          { id: 13, name: "Cable Fly (Mid Level)", nameAr: "رفرفة بالكابل (مستوى مستوي)", targetPart: "chest_mid" },
          { id: 14, name: "Pec Deck Machine (Chest Fly)", nameAr: "جهاز الفراشة", targetPart: "chest_mid" },
          { id: 15, name: "Svend Press", nameAr: "سفيند برس", targetPart: "chest_mid" },
          { id: 16, name: "Plate Press", nameAr: "ضغط بالوزن", targetPart: "chest_mid" },
        ]
      },
      {
        title: "Lower Chest (Lower Pectorals)",
        titleAr: "الصدر السفلي",
        exercises: [
          { id: 17, name: "Decline Barbell Bench Press", nameAr: "بنش برس سفلي بالبار", targetPart: "chest_lower" },
          { id: 18, name: "Decline Dumbbell Bench Press", nameAr: "بنش برس سفلي بالدمبلز", targetPart: "chest_lower" },
          { id: 19, name: "Decline Chest Press Machine", nameAr: "جهاز ضغط الصدر السفلي", targetPart: "chest_lower" },
          { id: 20, name: "Chest Dips (Lean Forward)", nameAr: "متوازي صدر", targetPart: "chest_lower" },
          { id: 21, name: "High to Low Cable Fly", nameAr: "رفرفة من أعلى لأسفل بالكابل", targetPart: "chest_lower" },
          { id: 22, name: "Decline Dumbbell Fly", nameAr: "رفرفة سفلي بالدمبلز", targetPart: "chest_lower" },
          { id: 23, name: "Cable Crossover (High Position)", nameAr: "كابل كروس أوفر (عالي)", targetPart: "chest_lower" },
        ]
      }
    ],
    tips: [
      "Retract your scapula for maximum chest engagement.",
      "Focus on the mind-muscle connection during the squeeze.",
      "Control the eccentric phase of every movement."
    ],
    tipsAr: [
      "قم بتقريب لوحي الكتف ببعضهما لزيادة تفعيل تمرين الصدر.",
      "ركز على الاتصال العقلي العضلي أثناء ضغط العضلة.",
      "تحكم في حركة النزول (المرحلة السلبية) في كل تمرين."
    ]
  },
  {
    id: "back",
    title: "BACK WORKOUT",
    titleAr: "تمارين الظهر",
    color: "#3B82F6",
    sections: [
      {
        title: "Lats",
        titleAr: "عضلة المجانص (العريضة)",
        exercises: [
          { id: 1, name: "Pull-Ups", nameAr: "عقلة قبضة واسعة", targetPart: "back_lats" },
          { id: 2, name: "Chin-Ups", nameAr: "عقلة قبضة ضيقة", targetPart: "back_lats" },
          { id: 3, name: "Lat Pulldown (Wide Grip)", nameAr: "سحب عالي واسع", targetPart: "back_lats" },
          { id: 4, name: "Lat Pulldown (Close Grip)", nameAr: "سحب عالي ضيق", targetPart: "back_lats" },
          { id: 5, name: "Straight Arm Pulldown", nameAr: "سحب ذراع ممدودة بالكابل", targetPart: "back_lats" },
          { id: 6, name: "One Arm Lat Pulldown", nameAr: "سحب عالي ذراع واحدة", targetPart: "back_lats" },
          { id: 7, name: "Machine Pullover", nameAr: "بل أوفر جهاز", targetPart: "back_lats" },
          { id: 8, name: "Dumbbell Pullover", nameAr: "بل أوفر بالدمبل", targetPart: "back_lats" },
        ]
      },
      {
        title: "Upper Back",
        titleAr: "الظهر العلوي",
        exercises: [
          { id: 9, name: "Barbell Row", nameAr: "تجديف بالبار", targetPart: "back_mid" },
          { id: 10, name: "T-Bar Row", nameAr: "تي بار رو (تجديف)", targetPart: "back_mid" },
          { id: 11, name: "Seated Cable Row", nameAr: "تجديف كابل جالساً", targetPart: "back_mid" },
          { id: 12, name: "Chest Supported Row", nameAr: "تجديف مع دعم الصدر", targetPart: "back_mid" },
          { id: 13, name: "Dumbbell Row", nameAr: "تجديف بالدمبل", targetPart: "back_mid" },
          { id: 14, name: "Machine Row", nameAr: "تجديف جهاز", targetPart: "back_mid" },
          { id: 15, name: "Inverted Row", nameAr: "تجديف معكوس", targetPart: "back_mid" },
        ]
      },
      {
        title: "Lower Back",
        titleAr: "الظهر السفلي (القطنية)",
        exercises: [
          { id: 16, name: "Deadlift", nameAr: "ديدليفت", targetPart: "back_lower" },
          { id: 17, name: "Romanian Deadlift", nameAr: "ديدليفت روماني", targetPart: "back_lower" },
          { id: 18, name: "Hyperextensions (Back Extension)", nameAr: "تمدد الظهر (جهاز القطنية)", targetPart: "back_lower" },
          { id: 19, name: "Good Mornings", nameAr: "تمرين صباح الخير", targetPart: "back_lower" },
        ]
      },
      {
        title: "Traps",
        titleAr: "عضلة الترابيس",
        exercises: [
          { id: 20, name: "Barbell Shrugs", nameAr: "هز الكتف بالبار (ترابيس)", targetPart: "shoulders_front" },
          { id: 21, name: "Dumbbell Shrugs", nameAr: "هز الكتف بالدمبلز (ترابيس)", targetPart: "shoulders_front" },
          { id: 22, name: "Cable Shrugs", nameAr: "هز الكتف بالكابل", targetPart: "shoulders_front" },
          { id: 23, name: "Upright Row", nameAr: "سحب عالى (تجديف واقف)", targetPart: "shoulders_side" },
          { id: 24, name: "Farmer’s Walk", nameAr: "مشية المزارع", targetPart: "arms_forearms" },
        ]
      }
    ],
    tips: [
      "Drive with your elbows, not your hands.",
      "Keep a neutral spine during rowing movements.",
      "Imagine pulling your shoulder blades together at the peak."
    ],
    tipsAr: [
      "اسحب بمرفقيك وليس بيديك.",
      "حافظ على استقامة ظهرك أثناء حركات التجديف.",
      "تخيل أنك تقرب لوحي كتفك من بعضهما عند الوصول لأقصى انقباض."
    ]
  },
  {
    id: "shoulders",
    title: "SHOULDERS WORKOUT",
    titleAr: "تمارين الأكتاف",
    color: "#EAB308",
    sections: [
      {
        title: "Front Delts (Front Shoulder)",
        titleAr: "عضلة الكتف الأمامي",
        exercises: [
          { id: 1, name: "Barbell Shoulder Press", nameAr: "ضغط أكتاف بالبار", targetPart: "shoulders_front" },
          { id: 2, name: "Dumbbell Shoulder Press", nameAr: "ضغط أكتاف بالدمبلز", targetPart: "shoulders_front" },
          { id: 3, name: "Arnold Press", nameAr: "أرنولد برس", targetPart: "shoulders_front" },
          { id: 4, name: "Front Raise (Dumbbell)", nameAr: "رفع أمامي بالدمبلز", targetPart: "shoulders_front" },
          { id: 5, name: "Front Raise (Barbell)", nameAr: "رفع أمامي بالبار", targetPart: "shoulders_front" },
          { id: 6, name: "Plate Front Raise", nameAr: "رفع أمامي بالوزن (طارة)", targetPart: "shoulders_front" },
          { id: 7, name: "Cable Front Raise", nameAr: "رفع أمامي بالكابل", targetPart: "shoulders_front" },
          { id: 8, name: "Smith Machine Shoulder Press", nameAr: "ضغط أكتاف بجهاز سميث", targetPart: "shoulders_front" },
        ]
      },
      {
        title: "Side Delts (Lateral Shoulder)",
        titleAr: "عضلة الكتف الجانبي",
        exercises: [
          { id: 9, name: "Dumbbell Lateral Raise", nameAr: "رفرفة جانبي بالدمبلز", targetPart: "shoulders_side" },
          { id: 10, name: "Cable Lateral Raise", nameAr: "رفرفة جانبي بالكابل", targetPart: "shoulders_side" },
          { id: 11, name: "Machine Lateral Raise", nameAr: "رفرفة جانبي جهاز", targetPart: "shoulders_side" },
          { id: 12, name: "Leaning Lateral Raise", nameAr: "رفرفة جانبي مائل", targetPart: "shoulders_side" },
          { id: 13, name: "One Arm Cable Lateral Raise", nameAr: "رفرفة جانبي كابل (ذراع واحدة)", targetPart: "shoulders_side" },
          { id: 14, name: "Upright Row (Wide Grip)", nameAr: "سحب عالى (تجديف واقف) واسع", targetPart: "shoulders_side" },
          { id: 15, name: "Resistance Band Lateral Raise", nameAr: "رفرفة جانبي بحبل المقاومة", targetPart: "shoulders_side" },
        ]
      },
      {
        title: "Rear Delts (Rear Shoulder)",
        titleAr: "عضلة الكتف الخلفي",
        exercises: [
          { id: 16, name: "Rear Delt Fly (Dumbbell)", nameAr: "رفرفة خلفي بالدمبلز", targetPart: "shoulders_rear" },
          { id: 17, name: "Reverse Pec Deck Machine", nameAr: "جهاز الفراشة معكوس", targetPart: "shoulders_rear" },
          { id: 18, name: "Face Pull (Cable)", nameAr: "تمرين فيس بول بالكابل", targetPart: "shoulders_rear" },
          { id: 19, name: "Bent Over Lateral Raise", nameAr: "رفرفة خلفي منحني", targetPart: "shoulders_rear" },
          { id: 20, name: "Cable Rear Delt Fly", nameAr: "رفرفة خلفي كابل", targetPart: "shoulders_rear" },
          { id: 21, name: "Rear Delt Row", nameAr: "تجديف كتف خلفي", targetPart: "shoulders_rear" },
          { id: 22, name: "Wide Grip Row (Elbows Out)", nameAr: "تجديف واسع (مرفق مرتفع)", targetPart: "shoulders_rear" },
        ]
      },
      {
        title: "Compound (Full Power)",
        titleAr: "تمارين مركبة (قوة كاملة)",
        exercises: [
          { id: 23, name: "Overhead Press (Barbell)", nameAr: "ضغط بالبار واقف", targetPart: "shoulders_front" },
          { id: 24, name: "Push Press", nameAr: "بوش برس", targetPart: "shoulders_front" },
          { id: 25, name: "Dumbbell Press", nameAr: "ضغط أكتاف دمبلز", targetPart: "shoulders_front" },
          { id: 26, name: "Handstand Push-ups", nameAr: "ضغط الوقوف على اليدين", targetPart: "shoulders_front" },
        ]
      }
    ],
    tips: [
      "Avoid shrugging your traps during lateral raises.",
      "Keep your core tight during overhead presses.",
      "Focus on the rear delt 'pull' during face pulls."
    ],
    tipsAr: [
      "تجنب استخدام الترابيس أثناء الرفرفة الجانبية.",
      "حافظ على شد عضلات بطنك أثناء الضغط العالي.",
      "ركز على سحب الكتف الخلفي أثناء تمرين الفيس بول."
    ]
  },
  {
    id: "arms",
    title: "ARMS WORKOUT",
    titleAr: "تمارين الذراعين",
    color: "#22C55E",
    sections: [
      {
        title: "BICEPS",
        titleAr: "عضلة البايسبس",
        exercises: [
          { id: 1, name: "Barbell Curl", nameAr: "تبادل بالبار (بايسبس)", targetPart: "arms_biceps" },
          { id: 2, name: "Dumbbell Curl", nameAr: "تبادل بالدمبلز (بايسبس)", targetPart: "arms_biceps" },
          { id: 3, name: "Alternating Dumbbell Curl", nameAr: "تبادل دمبلز بالتبادل", targetPart: "arms_biceps" },
          { id: 4, name: "Hammer Curl", nameAr: "تمرين المطرقة (هامر كيرل)", targetPart: "arms_biceps" },
          { id: 5, name: "Incline Dumbbell Curl", nameAr: "تبادل دمبلز على بنش مائل", targetPart: "arms_biceps" },
          { id: 6, name: "Preacher Curl", nameAr: "تبادل على جهاز الارتكاز (بريتشر)", targetPart: "arms_biceps" },
          { id: 7, name: "Cable Curl", nameAr: "تبادل بالكابل (بايسبس)", targetPart: "arms_biceps" },
          { id: 8, name: "Concentration Curl", nameAr: "تمرين التركيز (بايسبس)", targetPart: "arms_biceps" },
          { id: 9, name: "Spider Curl", nameAr: "سبايدر كيرل", targetPart: "arms_biceps" },
          { id: 10, name: "EZ Bar Curl", nameAr: "تبادل بالبار الزجزاج", targetPart: "arms_biceps" },
        ]
      },
      {
        title: "TRICEPS",
        titleAr: "عضلة الترايسبس",
        exercises: [
          { id: 11, name: "Triceps Pushdown (Cable)", nameAr: "سحب لأسفل بالكابل (ترايسبس)", targetPart: "arms_triceps" },
          { id: 12, name: "Skull Crushers", nameAr: "سكل كراشر (ترايسبس)", targetPart: "arms_triceps" },
          { id: 13, name: "Close Grip Bench Press", nameAr: "بنش برس قبضة ضيقة", targetPart: "arms_triceps" },
          { id: 14, name: "Dips (Triceps Focus)", nameAr: "متوازي (تركيز ترايسبس)", targetPart: "arms_triceps" },
          { id: 15, name: "Overhead Triceps Extension", nameAr: "تمديد الترايسبس خلف الرأس (دمبل)", targetPart: "arms_triceps" },
          { id: 16, name: "Cable Overhead Extension", nameAr: "تمديد الترايسبس خلف الرأس (كابل)", targetPart: "arms_triceps" },
          { id: 17, name: "Kickbacks", nameAr: "كيك باك (ترايسبس)", targetPart: "arms_triceps" },
          { id: 18, name: "Rope Pushdown", nameAr: "سحب حبل لأسفل (ترايسبس)", targetPart: "arms_triceps" },
          { id: 19, name: "JM Press", nameAr: "جي إم برس", targetPart: "arms_triceps" },
        ]
      },
      {
        title: "FOREARMS",
        titleAr: "عضلة الساعد",
        exercises: [
          { id: 20, name: "Wrist Curl", nameAr: "ثني المعصم (ساعد)", targetPart: "arms_forearms" },
          { id: 21, name: "Reverse Wrist Curl", nameAr: "ثني المعصم عكسي (ساعد)", targetPart: "arms_forearms" },
          { id: 22, name: "Hammer Curl", nameAr: "تمرين المطرقة (ساعد)", targetPart: "arms_forearms" },
          { id: 23, name: "Reverse Curl", nameAr: "تبادل عكسي (ساعد)", targetPart: "arms_forearms" },
          { id: 24, name: "Farmer’s Walk", nameAr: "مشية المزارع", targetPart: "arms_forearms" },
          { id: 25, name: "Plate Pinch Hold", nameAr: "مسك الأوزان بالأصابع", targetPart: "arms_forearms" },
          { id: 26, name: "Dead Hangs", nameAr: "تعلق حر على العقلة", targetPart: "arms_forearms" },
        ]
      }
    ],
    tips: [
      "Keep your elbows tucked into your sides.",
      "Avoid using momentum or swinging the weight.",
      "Squeeze hard at the top of every contraction."
    ],
    tipsAr: [
      "حافظ على ثبات مرفقيك بجانب جسمك.",
      "تجنب استخدام قوة الدفع أو أرجحة الوزن.",
      "اضغط العضلة بقوة عند الوصول لأقصى انقباض."
    ]
  },
  {
    id: "legs",
    title: "LEG WORKOUT",
    titleAr: "تمارين الأرجل",
    color: "#A855F7",
    sections: [
      {
        title: "QUADS",
        titleAr: "عضلة الأرجل الأمامية (الكوادز)",
        exercises: [
          { id: 1, name: "Squat", nameAr: "قرفصاء (سكوات) بالبار", targetPart: "legs_quads" },
          { id: 2, name: "Leg Press", nameAr: "جهاز دفع الأرجل", targetPart: "legs_quads" },
          { id: 3, name: "Leg Extension", nameAr: "جهاز تمديد الأرجل (أمامي)", targetPart: "legs_quads" },
          { id: 4, name: "Bulgarian Split Squat", nameAr: "سكوات بلغاري", targetPart: "legs_quads" },
          { id: 5, name: "Lunges", nameAr: "تمرين الطعن (لونجز)", targetPart: "legs_quads" },
        ]
      },
      {
        title: "HAMSTRINGS",
        titleAr: "عضلة الأرجل الخلفية (الهامسترينج)",
        exercises: [
          { id: 6, name: "Leg Curl (Machine)", nameAr: "جهاز ثني الأرجل (خلفي)", targetPart: "legs_hams" },
          { id: 7, name: "Romanian Deadlift (RDL)", nameAr: "ديدليفت روماني", targetPart: "legs_hams" },
          { id: 8, name: "Good Mornings", nameAr: "تمرين صباح الخير (للخلفيات)", targetPart: "legs_hams" },
          { id: 9, name: "Nordic Curl", nameAr: "نورديك كيرل", targetPart: "legs_hams" },
        ]
      },
      {
        title: "GLUTES",
        titleAr: "عضلة المؤخرة (الجلوتس)",
        exercises: [
          { id: 10, name: "Hip Thrust", nameAr: "هيب ثرست", targetPart: "legs_glutes" },
          { id: 11, name: "Glute Bridge", nameAr: "جلوت بريدج", targetPart: "legs_glutes" },
          { id: 12, name: "Cable Kickback", nameAr: "ركلة خلفية بالكابل", targetPart: "legs_glutes" },
          { id: 13, name: "Step-Ups", nameAr: "تمرين الصعود على الصندوق", targetPart: "legs_glutes" },
        ]
      },
      {
        title: "CALVES",
        titleAr: "عضلة السمانة",
        exercises: [
          { id: 14, name: "Standing Calf Raises", nameAr: "رفع السمانة واقفاً", targetPart: "legs_calves" },
          { id: 15, name: "Seated Calf Raises", nameAr: "رفع السمانة جالساً", targetPart: "legs_calves" },
          { id: 16, name: "Donkey Calf Raises", nameAr: "دونكي كالف ريس (سمانة)", targetPart: "legs_calves" },
        ]
      }
    ],
    tips: [
      "Keep your weight on your heels for squats and lunges.",
      "Control the descent to protect your knees.",
      "Squeeze your glutes at the top of each rep."
    ],
    tipsAr: [
      "ركز على وضع وزنك على كعبيك أثناء السكوات واللونجز.",
      "تحكم في حركة النزول لحماية ركبتيك.",
      "اضغط عضلات المؤخرة بقوة عند الوصول لأقصى انقباض."
    ]
  }
];
