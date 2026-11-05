import { useState } from 'react'

// Interactive feature 5: expandable content (accordion)
export default function Faq({ items }) {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="faq" className="py-5 bg-section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion">
          {items.map((f) => {
            const open = openId === f.id
            return (
              <div className="accordion-item" key={f.id}>
                <h3 className="accordion-header">
                  <button
                    className={`accordion-button ${open ? '' : 'collapsed'}`}
                    onClick={() => setOpenId(open ? null : f.id)}
                  >
                    {f.q}
                  </button>
                </h3>
                <div className={`accordion-collapse collapse ${open ? 'show' : ''}`}>
                  <div className="accordion-body">{f.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
