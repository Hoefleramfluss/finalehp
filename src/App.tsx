import { Routes, Route } from 'react-router-dom';
import Analytics from "@/components/Analytics";
import HomePage from "@/pages/HomePage";
import VoicebotDeutsch from "@/pages/VoicebotDeutsch";
import KITerminbuchung from "@/pages/KITerminbuchung";
import VoicebotGastronomie from "@/pages/VoicebotGastronomie";

function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/voicebot-deutsch" element={<VoicebotDeutsch />} />
        <Route path="/ki-terminbuchung" element={<KITerminbuchung />} />
        <Route path="/branchen/gastronomie" element={<VoicebotGastronomie />} />
      </Routes>
    </>
  );
}

export default App;
