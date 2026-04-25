/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Info, 
  Zap,
  Weight,
  Layers,
  CircleDot,
  Dna,
  ArrowLeft,
  Activity,
  Target,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { WORKOUT_DATA, WorkoutPage, Exercise } from '@/lib/workout-data';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

export default function EbookApp() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentPage = WORKOUT_DATA[currentPageIndex];

  const t = {
    en: {
      brand: "L7MINI FITNESS",
      exerciseDetail: "Exercise Detail",
      executionMethod: "Execution Method",
      targetArea: "Target Area",
      focusType: "Focus Type",
      gotIt: "Got it",
      tips: "Pro Training Tips",
      targetedExercise: "Targeted Exercise",
      footerDesc: "Designed for performance. Engineered for results.",
      rights: "All Rights Reserved.",
    },
    ar: {
      brand: "L7MINI FITNESS",
      exerciseDetail: "تفاصيل التمرين",
      executionMethod: "طريقة التنفيذ",
      targetArea: "العضلة المستهدفة",
      focusType: "نوع التركيز",
      gotIt: "فهمت",
      tips: "نصائح احترافية للتدريب",
      targetedExercise: "التمرين المستهدف",
      footerDesc: "صُمم للأداء. هُندس للنتائج.",
      rights: "جميع الحقوق محفوظة.",
    }
  }[language];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPageIndex]);

  const nextPage = () => {
    setCurrentPageIndex((prev) => (prev + 1) % WORKOUT_DATA.length);
  };

  const prevPage = () => {
    setCurrentPageIndex((prev) => (prev - 1 + WORKOUT_DATA.length) % WORKOUT_DATA.length);
  };

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 100;
    if (info.offset.x < -threshold) {
      nextPage();
    } else if (info.offset.x > threshold) {
      prevPage();
    }
  };

  const getExerciseIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('dumbbell')) return <Weight className="w-5 h-5" />;
    if (lowerName.includes('barbell')) return <Layers className="w-5 h-5" />;
    if (lowerName.includes('cable') || lowerName.includes('pulldown') || lowerName.includes('pushdown')) return <Zap className="w-5 h-5 shrink-0" />;
    if (lowerName.includes('push-up') || lowerName.includes('pull-up') || lowerName.includes('dip') || lowerName.includes('inverted row')) return <Dna className="w-5 h-5" />;
    if (lowerName.includes('machine') || lowerName.includes('press machine')) return <Activity className="w-5 h-5" />;
    if (lowerName.includes('bench')) return <Target className="w-5 h-5" />;
    if (lowerName.includes('curl')) return <Dumbbell className="w-5 h-5" />;
    if (lowerName.includes('extension')) return <Zap className="w-5 h-5" />;
    if (lowerName.includes('shrug')) return <Trophy className="w-5 h-5" />;
    return <CircleDot className="w-5 h-5" />;
  };

  const getInstructions = (exercise: Exercise) => {
    const isAr = language === 'ar';
    const name = exercise.name;

    if (isAr) {
      if (name.includes('Bench Press')) return "استلقِ بشكل مستوٍ على البنش، أمسك الوزن بعرض الكتفين، اخفض الوزن ببطء حتى منتصف الصدر، ثم ادفعه للأعلى مع الحفاظ على شد عضلات بطنك.";
      if (name.includes('Curl')) return "قف بشكل مستقيم مع حمل الأوزان بجانبك، اثنِ ذراعيك للأعلى باتجاه كتفيك مع تثبيت المرفقين، ثم اخفض الوزن ببطء وتحكم.";
      if (name.includes('Row')) return "أمسك الوزن، انحنِ من الفخذين مع استقامة الظهر، اسحب الوزن باتجاه ضلوعك السفلية، مع تقريب لوحي الكتف ببعضهما.";
      if (name.includes('Pulldown')) return "أمسك البار بفتحة أوسع من الكتفين، اسحب للأسفل باتجاه أعلى الصدر مع ميل بسيط للخلف، واضغط على عضلة المجانص.";
      if (name.includes('Fly')) return "مد ذراعيك مع ثني بسيط عند الكوع، افتح ذراعيك للخارج حتى تشعر بتمدد في عضلات الصدر، ثم اضغط للرجوع للمنتصف.";
      if (name.includes('Squat')) return "قدميك بعرض الكتفين، اخفض الورك حتى يصبح الفخذ موازياً للأرض، حافظ على استقامة الصدر، وادفع من خلال الكعبين للوقوف.";
      if (name.includes('Raise')) return "قف مستقيماً، ارفع الأوزان للخارج حتى مستوى الكتف، توقف لثانية، ثم اخفض ببطء.";
      return "قم بتنفيذ الحركة بمدى حركي كامل، مع الحفاظ على الضغط على العضلة المستهدفة طوال المجموعة. ركز على مرحلة النزول (السلبية) لمدة ثانيتين لنمو أفضل.";
    }
    
    if (name.includes('Bench Press')) return "Lie flat on a bench, grip the weight at shoulder width, lower slowly to mid-chest, and drive back up while keeping your core engaged.";
    if (name.includes('Curl')) return "Stand tall with weights at your sides, curl the weights toward your shoulders while keeping elbows fixed, then lower with control.";
    if (name.includes('Row')) return "Grip the weight, hinge at hips with back straight, pull the weight toward your lower ribs, squeezing shoulder blades together.";
    if (name.includes('Pulldown')) return "Grip the bar wider than shoulders, pull down toward upper chest while leaning back slightly, and squeeze your lats.";
    if (name.includes('Fly')) return "Extend arms with slight elbow bend, open wide until you feel a stretch in your chest, then squeeze back to center.";
    if (name.includes('Squat')) return "Feet shoulder-width apart, lower hips until thighs are parallel to ground, keep chest up, and drive through heels to stand.";
    if (name.includes('Raise')) return "Stand tall, raise weights outward to shoulder height, hold for a split second, and lower slowly.";
    return "Execute the movement with full range of motion, maintaining tension on the target muscle throughout the set. Focus on a 2-second eccentric phase for optimal muscle growth.";
  };

  return (
    <div 
      dir={language === 'ar' ? 'rtl' : 'ltr'} 
      className="min-h-screen bg-[#050505] text-[#EAEAEA] font-sans overflow-x-hidden selection:bg-white selection:text-black"
    >
      <AnimatePresence>
        {selectedExercise && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-xl w-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-64 h-64 blur-[120px] opacity-20 pointer-events-none"
                style={{ backgroundColor: currentPage.color }}
              />
              
              <button 
                onClick={() => setSelectedExercise(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6 rotate-90" />
              </button>

              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-50" style={{ color: currentPage.color }}>
                    {t.exerciseDetail}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight leading-none">
                    {language === 'ar' ? selectedExercise.nameAr : selectedExercise.name}
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="text-sm font-mono uppercase tracking-[0.2em] opacity-40 mb-3 flex items-center gap-2">
                      <Zap className="w-3 h-3" /> {t.executionMethod}
                    </h3>
                    <p className="text-lg leading-relaxed opacity-80">
                      {getInstructions(selectedExercise)}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[10px] font-mono uppercase opacity-30 block mb-1">{t.targetArea}</span>
                      <span className="font-medium text-sm">{selectedExercise.targetPart.replace('_', ' ').toUpperCase()}</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[10px] font-mono uppercase opacity-30 block mb-1">{t.focusType}</span>
                      <span className="font-medium text-sm uppercase">
                        {language === 'ar' ? currentPage.titleAr.split(' ')[0] : currentPage.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedExercise(null)}
                  className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                >
                  {t.gotIt} <ArrowRight className={cn("w-4 h-4", language === 'ar' && "rotate-180")} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
            <Zap className="w-4 h-4 fill-current" />
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-medium opacity-70">
            {t.brand}
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-6 h-6">
            <button 
              onClick={() => setLanguage('en')}
              className={cn("text-[10px] font-mono uppercase tracking-widest", language === 'en' ? "text-white font-bold" : "text-white/40 hover:text-white/60")}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('ar')}
              className={cn("text-[10px] font-mono uppercase tracking-widest", language === 'ar' ? "text-white font-bold" : "text-white/40 hover:text-white/60")}
            >
              AR
            </button>
          </div>
          <div className="flex items-center gap-2">
            {WORKOUT_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPageIndex(idx);
                }}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  currentPageIndex === idx ? "w-8 bg-white" : "bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <motion.main 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        className="pt-24 pb-12 px-6 md:px-12 max-w-3xl mx-auto cursor-grab active:cursor-grabbing min-h-screen"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            {/* Header Content */}
            <header className="relative">
              <h1 
                className="font-display text-7xl md:text-9xl leading-[0.8] uppercase tracking-tighter"
                style={{ color: currentPage.color }}
              >
                {language === 'ar' ? currentPage.titleAr : (
                  <>
                    {currentPage.title.split(' ')[0]}
                    <br />
                    <span className="text-white opacity-90">{currentPage.title.split(' ')[1]}</span>
                  </>
                )}
              </h1>
            </header>

            <div className="flex flex-col gap-10">
              {currentPage.sections.map((section, sIdx) => (
                <motion.section 
                  key={section.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + sIdx * 0.1 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-white/50 bg-white/5 px-2 py-1 rounded">
                      {language === 'ar' ? section.titleAr : section.title}
                    </h2>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  <div className="flex flex-col gap-3">
                    {section.exercises.map((exercise) => (
                      <motion.div 
                        key={exercise.id}
                        onClick={() => setSelectedExercise(exercise)}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-pointer"
                      >
                        <motion.div 
                          className="flex-none w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-white/10"
                          style={{ color: currentPage.color }}
                          variants={{
                            hover: { rotate: [0, -10, 10, 0], scale: 1.1, x: 5 }
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {getExerciseIcon(exercise.name)}
                        </motion.div>

                        <div className="flex flex-col flex-1">
                          <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.2em] mb-1">{t.targetedExercise}</span>
                          <span className="font-medium text-lg tracking-tight group-hover:text-white transition-colors">
                            {language === 'ar' ? exercise.nameAr : exercise.name}
                          </span>
                        </div>
                        
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full opacity-20 transition-all duration-300 group-hover:opacity-100" 
                          style={{ backgroundColor: currentPage.color }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        
                        {/* Hidden variant trigger for parent hover */}
                        <motion.div variants={{ hover: {} }} className="hidden" />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Tips Section */}
            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-20 pointer-events-none"
                style={{ backgroundColor: currentPage.color }}
              />
              
              <div className="flex-none">
                <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white">
                  <Info className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] font-medium opacity-50">
                  {t.tips}
                </h3>
                <ul className="flex flex-col gap-4">
                  {(language === 'ar' ? currentPage.tipsAr : currentPage.tips).map((tip, idx) => (
                    <li key={idx} className="flex gap-4 items-start text-sm leading-relaxed opacity-80">
                      <span 
                        className="font-mono text-[10px] mt-1 shrink-0 px-1 rounded bg-white/10"
                      >
                        {idx + 1}
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.footer>
          </motion.div>
        </AnimatePresence>
      </motion.main>

      {/* Footer Branding */}
      <footer className="mt-12 py-12 border-t border-white/5 px-6 opacity-30 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span className="font-display text-2xl uppercase tracking-tighter italic">L7MINI</span>
        </div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-center max-w-md">
          {t.footerDesc}
          <br />
          © 2026 L7MINI Fitness Systems. {t.rights}
        </p>
      </footer>
    </div>
  );
}
