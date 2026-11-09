import { useState } from "react";
import type { Supply, SupplyStatus } from "../types";
import { Icon } from "./Navbar";

interface SupplyListProps {
  items: Supply[];
}

const filters: ("All" | SupplyStatus)[] = ["All", "In Stock", "Low Stock", "Out of Stock"];

function SupplyList({ items }: SupplyListProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visibleItems = items.filter((item) => {
    const matchesText = `${item.name} ${item.category}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filter === "All" || item.status === filter;
    return matchesText && matchesStatus;
  });

  return (
    <section id="inventory" className="mx-auto mt-4 max-w-[1500px] overflow-hidden rounded-[20px] border border-line bg-surface shadow-card lg:ml-[292px] lg:mr-7">
      <div className="flex flex-col justify-between gap-3 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h2 className="text-xl font-semibold text-ink">Available supplies</h2>
          <p className="mt-1 text-sm text-muted">Search the catalog and filter by stock status.</p>
        </div>
        <label className="relative block w-full sm:max-w-[260px]">
          <span className="sr-only">Search supplies</span>
          <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            placeholder="Search supplies..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-lg border border-line bg-surface py-2.5 pl-9 pr-3 text-sm text-ink outline-none placeholder:text-muted focus:border-forest focus:ring-2 focus:ring-forest/10"
          />
        </label>
      </div>

      <div className="flex gap-2 overflow-x-auto px-5 pb-3 sm:px-6">
        {filters.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              filter === status ? "bg-forest text-white" : "bg-canvas text-muted hover:bg-sage-light hover:text-forest"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto px-5 pb-4 sm:px-6">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="bg-table text-xs font-semibold uppercase tracking-wide text-muted">
              <th className="px-3 py-3">Item</th>
              <th className="px-3 py-3">Category</th>
              <th className="px-3 py-3 text-right">Quantity</th>
              <th className="px-3 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleItems.length ? visibleItems.map((item) => (
              <tr className="border-b border-line last:border-0" key={item.id}>
                <td className="px-3 py-3 text-sm font-medium text-ink">{item.name}</td>
                <td className="px-3 py-3 text-sm text-muted">{item.category}</td>
                <td className="px-3 py-3 text-right text-sm font-medium text-ink">{item.qty} {item.unit}</td>
                <td className="px-3 py-3"><StatusBadge status={item.status} /></td>
              </tr>
            )) : (
              <tr>
                <td colSpan={4} className="px-3 py-8 text-center text-sm text-muted">
                  No supplies match your search. Try another name or filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: SupplyStatus }) {
  const classes = {
    "In Stock": "bg-sage-light text-forest",
    "Low Stock": "bg-amber-light text-amber-deep",
    "Out of Stock": "bg-danger-light text-danger",
  }[status];

  return <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${classes}`}>{status}</span>;
}

export default SupplyList;
