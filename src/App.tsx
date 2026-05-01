import { Navigate, Route, Routes } from "react-router-dom";
import { SiteFooter, SiteHeader } from "./components/layout";
import Contact from "./pages/Contact";
import Credits from "./pages/Credits";
import Home from "./pages/Home";
import News from "./pages/News";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import WorkDetail from "./pages/WorkDetail";
import Works from "./pages/Works";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-warm-white)] text-[var(--color-ink)]">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Works />} path="/works" />
          <Route element={<WorkDetail />} path="/works/:slug" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Credits />} path="/credits" />
          <Route element={<Notes />} path="/notes" />
          <Route element={<News />} path="/news" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
