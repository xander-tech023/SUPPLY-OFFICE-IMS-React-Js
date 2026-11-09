import type { Supply, StockMovementEntry, Transaction } from "../types";
import { Icon } from "./Navbar";
import StatCard from "./StatCard";

interface DashboardStat {
  title: string;
  value: number;
  foot: string;
}

interface HeroProps {
  stats: DashboardStat[];
  supplies: Supply[];
  movement: StockMovementEntry[];
  transactions: Transaction[];
  onViewInventory: () => void;
  onViewHistory: () => void;
}

function Hero({ stats, supplies, movement, transactions, onViewInventory, onViewHistory }: HeroProps) {
  const received = movement.reduce((total, entry) => total + entry.received, 0);
  const issued = movement.reduce((total, entry) => total + entry.issued, 0);
  const maxValue = Math.max(1, ...movement.flatMap((entry) => [entry.received, entry.issued]));
  const outOfStock = supplies.filter((item) => item.status === "Out of Stock");
  const expiresSoon = supplies.find((item) => item.expiresInDays !== undefined && item.expiresInDays <= 45);

  return (
    <main id="dashboard" className="mx-auto max-w-[1500px] px-4 pb-8 pt-5 sm:px-7 lg:ml-[292px] lg:px-7">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-ink">Dashboard</h2>
        <p className="mt-1 text-sm text-muted">Your supply office overview.</p>
      </div>
      <section aria-label="Inventory summary" className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {stats.map((stat) => <StatCard key={stat.title} {...stat} />)}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.9fr)_minmax(300px,0.9fr)]">
        <section className="rounded-[20px] border border-line bg-surface p-5 shadow-card sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-ink">Stock movement</h2>
              <p className="mt-1 text-sm text-muted">Transaction counts · Oct 31, 2026–Nov 6, 2026</p>
            </div>
            <button onClick={onViewHistory} className="whitespace-nowrap pt-1 text-sm font-medium text-forest hover:text-forest-dark">
              View history <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-ink">
            <span className="inline-flex items-center gap-2"><Icon name="arrow-down" className="h-4 w-4" /> Received <strong>{received}</strong></span>
            <span className="inline-flex items-center gap-2"><Icon name="arrow-up" className="h-4 w-4" /> Issued <strong>{issued}</strong></span>
          </div>

          <div className="mt-6 grid grid-cols-[24px_1fr] gap-2">
            <div className="flex h-[178px] flex-col justify-between pb-6 text-xs text-muted">
              {[1, 0.75, 0.5, 0.25, 0].map((tick) => <span key={tick}>{tick.toFixed(1)}</span>)}
            </div>
            <div className="relative grid h-[178px] grid-cols-7 border-b border-line">
              <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[148px] flex-col justify-between">
                {[0, 1, 2, 3, 4].map((line) => <span className="border-t border-dashed border-line" key={line} />)}
              </div>
              {movement.map((entry) => (
                <div className="relative flex h-full flex-col items-center justify-end" key={entry.day}>
                  <div className="z-10 flex h-[148px] items-end gap-1">
                    <span
                      aria-label={`${entry.received} received on ${entry.day}`}
                      className="w-5 rounded-t-[4px] bg-forest"
                      style={{ height: `${Math.max(0, (entry.received / maxValue) * 100)}%` }}
                    />
                    <span
                      aria-label={`${entry.issued} issued on ${entry.day}`}
                      className="w-5 rounded-t-[4px] bg-chart-issued"
                      style={{ height: `${Math.max(0, (entry.issued / maxValue) * 100)}%` }}
                    />
                  </div>
                  <span className="mt-2 whitespace-nowrap text-xs text-muted">{entry.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5"><i className="h-3 w-11 rounded-sm bg-forest" /> Received</span>
            <span className="inline-flex items-center gap-1.5"><i className="h-3 w-11 rounded-sm bg-chart-issued" /> Issued</span>
          </div>
        </section>

        <section className="rounded-[20px] border border-line bg-surface p-5 shadow-card sm:p-6">
          <h2 className="text-xl font-semibold text-ink">Needs your attention</h2>
          <p className="mt-1 text-sm text-muted">Prioritize supply and expiry alerts.</p>
          <div className="mt-5 space-y-3">
            {outOfStock.map((item) => (
              <article className="rounded-r-xl border-l-4 border-danger bg-danger-light px-4 py-4" key={item.id}>
                <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">Out of stock · {item.qty} {item.unit}</p>
              </article>
            ))}
            {expiresSoon && (
              <article className="rounded-r-xl border-l-4 border-amber bg-amber-light px-4 py-4">
                <h3 className="text-sm font-semibold text-ink">{expiresSoon.name}</h3>
                <p className="mt-1 text-sm text-muted">Expiring soon · {expiresSoon.qty} {expiresSoon.unit}</p>
              </article>
            )}
          </div>
          <button onClick={onViewInventory} className="mt-4 text-sm font-semibold text-forest hover:underline">
            View inventory <span aria-hidden="true">→</span>
          </button>
        </section>
      </section>

      <section id="transactions" className="mt-4 overflow-hidden rounded-[20px] border border-line bg-surface shadow-card">
        <div className="flex items-center justify-between gap-3 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-xl font-semibold text-ink">Recent transactions</h2>
            <p className="mt-1 text-sm text-muted">Receiving and issuance records</p>
          </div>
          <button onClick={onViewHistory} className="whitespace-nowrap text-sm font-semibold text-forest hover:underline">
            All transactions →
          </button>
        </div>
        <div className="overflow-x-auto px-5 pb-3 sm:px-6">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="bg-table text-xs font-semibold uppercase tracking-wide text-muted">
                <th className="px-3 py-3">Reference / date</th>
                <th className="px-3 py-3">Item</th>
                <th className="px-3 py-3">Movement</th>
                <th className="px-3 py-3">Office / supplier</th>
                <th className="px-3 py-3">Recipient / staff</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr className="border-b border-line last:border-0" key={transaction.reference}>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p className="text-sm font-semibold text-ink">{transaction.reference}</p>
                    <p className="mt-0.5 text-xs text-muted">{transaction.date}</p>
                  </td>
                  <td className="px-3 py-3 text-sm text-muted">{transaction.item}</td>
                  <td className="px-3 py-3">
                    <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${transaction.kind === "received" ? "bg-sage-light text-forest" : "bg-[#eaf1f5] text-[#426477]"}`}>
                      {transaction.movement}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-sm text-muted">{transaction.office}</td>
                  <td className="whitespace-nowrap px-3 py-3 text-sm text-muted">{transaction.staff}</td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr><td colSpan={5} className="px-3 py-8 text-center text-sm text-muted">No transactions recorded yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Hero;
