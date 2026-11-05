import { useState } from 'react'
import InventoryRow from './InventoryRow'
import ItemModal from './ItemModal'

// Interactive feature 3: live search + category filter
export default function InventorySection({ items }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const categories = ['All', ...new Set(items.map((i) => i.category))]

  const filtered = items.filter(
    (i) =>
      (category === 'All' || i.category === category) &&
      i.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section id="inventory" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Inventory Overview</h2>
        <p className="text-center text-secondary mb-4">Search and filter office supplies.</p>

        <div className="row g-2 mb-3">
          <div className="col-12 col-md-8">
            <input
              type="search"
              className="form-control"
              placeholder="Search items..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-4">
            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="table-responsive card">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Code</th>
                <th>Item</th>
                <th className="d-none d-md-table-cell">Category</th>
                <th>Stock</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <InventoryRow key={item.id} item={item} onView={setSelected} />
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-secondary py-4">
                    No items match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ItemModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
