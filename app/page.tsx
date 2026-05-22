"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LangProvider } from "@/components/LangContext";
import LangToggle from "@/components/LangToggle";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";
import { questions, OptionKey, ui } from "@/lib/content";

type Step = 0 | 1 | 2 | 3 | 4;

function App() {
  const [step, setStep] = useState<Step>(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [q1, setQ1] = useState<OptionKey[]>([]);
  const [q2, setQ2] = useState<OptionKey[]>([]);
  const [q3, setQ3] = useState<OptionKey[]>([]);

  function go(next: Step) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[420px] px-5 pt-4 pb-10">
        <div className="flex justify-end mb-2">
          <LangToggle />
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {step === 0 && <WelcomeScreen onStart={() => go(1)} />}
              {step === 1 && (
                <QuizScreen
                  question={questions[0]}
                  selected={q1}
                  onChange={setQ1}
                  onNext={() => go(2)}
                  step={1}
                  total={3}
                />
              )}
              {step === 2 && (
                <QuizScreen
                  question={questions[1]}
                  selected={q2}
                  onChange={setQ2}
                  onNext={() => go(3)}
                  onBack={() => go(1)}
                  step={2}
                  total={3}
                />
              )}
              {step === 3 && (
                <QuizScreen
                  question={questions[2]}
                  selected={q3}
                  onChange={setQ3}
                  onNext={() => go(4)}
                  onBack={() => go(2)}
                  nextLabel={ui.toResult}
                  step={3}
                  total={3}
                />
              )}
              {step === 4 && (
                <ResultScreen
                  q1={q1}
                  q2={q2}
                  q3={q3}
                  onBack={() => go(3)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <App />
    </LangProvider>
  );
}
