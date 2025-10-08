import { Routes, Route } from 'react-router-dom';
import Analytics from "@/components/Analytics";
import HomePage from "@/pages/HomePage";
import VoicebotDeutsch from "@/pages/VoicebotDeutsch";
import KITerminbuchung from "@/pages/KITerminbuchung";
import VoicebotGastronomie from "@/pages/VoicebotGastronomie";
import BlogVoiceAITrends2025 from "@/pages/BlogVoiceAITrends2025";

function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/voicebot-deutsch" element={<VoicebotDeutsch />} />
        <Route path="/ki-terminbuchung" element={<KITerminbuchung />} />
        <Route path="/branchen/gastronomie" element={<VoicebotGastronomie />} />
        <Route path="/blog/voice-ai-trends-2025" element={<BlogVoiceAITrends2025 />} />
      </Routes>
    </>
  );
}

export default App;
