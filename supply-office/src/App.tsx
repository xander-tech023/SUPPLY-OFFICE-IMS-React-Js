import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatCard from "./components/StatCard";
import SupplyList from "./components/SupplyList";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import { supplies, stats } from "./data/supplies";

function App() {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Interactive feature: theme toggle (Bootstrap 5.3 reads data-bs-theme)
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <Navbar
        systemName="Supply Office Inventory"
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onLoginClick={() => setShowLogin(true)}
      />

      <Hero
        title="Supply Office Inventory System"
        description="Check available office supplies, track stock levels, and send supply requests in one place."
        onGetStarted={() => setShowLogin(true)}
      />

      <section className="container pb-4">
        <div className="row g-3">
          {stats.map((stat) => (
            <div className="col-6 col-lg-3" key={stat.id}>
              <StatCard title={stat.title} value={stat.value} variant={stat.variant} />
            </div>
          ))}
        </div>
      </section>

      <SupplyList items={supplies} />

      <Footer office="Supply Office" school="Central Bicol State University of Agriculture" />

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

export default App;
