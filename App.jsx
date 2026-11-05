import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatCard from './components/StatCard'
import FeatureCard from './components/FeatureCard'
import InventorySection from './components/InventorySection'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { navLinks, stats, features, inventory, faqs } from './data/content'

const SYSTEM_NAME = 'Supply Office IMS'

export default function App() {
  const [theme, setTheme] = useState('light')

  // Interactive feature: theme toggle (Bootstrap 5.3 reads data-bs-theme)
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  return (
    <>
      <Navbar
        brand={SYSTEM_NAME}
        links={navLinks}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />

      <Hero
        title="Smarter Supply Office Inventory Management"
        subtitle="Track stock, process department requests, and never run out of essential office supplies."
      />

      <section className="container stats-wrap">
        <div className="row g-3">
          {stats.map((s) => (
            <div className="col-6 col-lg-3" key={s.id}>
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">System Features</h2>
          <div className="row g-4">
            {features.map((f) => (
              <div className="col-12 col-sm-6 col-lg-3" key={f.id}>
                <FeatureCard icon={f.icon} title={f.title} text={f.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <InventorySection items={inventory} />
      <Faq items={faqs} />
      <Footer name={SYSTEM_NAME} />
    </>
  )
}
