"use client";
import "./globals.css";

import React, { useEffect } from "react";

import { PhotoSection } from "./components/PhotosSection";
import { ComeAndVisitUs } from "./components/ComeAndVisitUs";
import { IntroductionSection } from "./components/IntroductionSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { useAuth } from "hooks/useAuth";

export default function Home() {
  return (
    <main className="px-4 xl:px-0">
      <IntroductionSection />
      <PhotoSection />
      <PhilosophySection />
      <ComeAndVisitUs />
    </main>
  );
}
