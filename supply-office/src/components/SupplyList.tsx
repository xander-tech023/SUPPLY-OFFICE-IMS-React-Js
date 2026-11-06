import { useState } from "react";
import type { Supply } from "../types";
import StatusBadge from "./StatusBadge";

interface SupplyListProps {
  items: Supply[];
}

const filters = ["All", "In Stock", "Low Stock", "Out of Stock"] as const;
type Filter = (typeof filters)[number];

function SupplyList({ items }: SupplyListProps) {
  // Interactive features: live search + status filter
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("All");

  const visibleItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="supplies" className="py-5">
      <div className="container">
        <h2 className="mb-4">Available Supplies</h2>

        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <input
              type="search"
              className="form-control"
              placeholder="Search supplies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <div className="btn-group w-100 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`btn btn-outline-primary ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th className="text-end">Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visibleItems.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center text-body-secondary py-4">
                    No supplies match your search. Try a different name or filter.
                  </td>
                </tr>
              ) : (
                visibleItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td className="text-end">{item.qty}</td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default SupplyList;
