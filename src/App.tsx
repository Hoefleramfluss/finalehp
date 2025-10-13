import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Analytics from "@/components/Analytics";
import HomePage from "@/pages/HomePage";

const VoicebotDeutsch = lazy(() => import("@/pages/VoicebotDeutsch"));
const KITerminbuchung = lazy(() => import("@/pages/KITerminbuchung"));
const VoicebotGastronomie = lazy(() => import("@/pages/VoicebotGastronomie"));
const BlogVoiceAITrends2025 = lazy(() => import("@/pages/BlogVoiceAITrends2025"));

function App() {
  return (
    <>
      <Analytics />
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center bg-night-900">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-electric-500 border-t-transparent" />
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/voicebot-deutsch" element={<VoicebotDeutsch />} />
          <Route path="/ki-terminbuchung" element={<KITerminbuchung />} />
          <Route path="/branchen/gastronomie" element={<VoicebotGastronomie />} />
          <Route path="/blog/voice-ai-trends-2025" element={<BlogVoiceAITrends2025 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
