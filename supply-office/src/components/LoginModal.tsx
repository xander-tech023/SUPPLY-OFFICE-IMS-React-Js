import { useState } from "react";
import type { FormEvent } from "react";
import type { DialogMode, Supply, SupplyRequest } from "../types";
import { Icon } from "./Navbar";

interface LoginModalProps {
  mode: DialogMode;
  items: Supply[];
  requests: SupplyRequest[];
  onClose: () => void;
  onApprove: (id: number) => void;
  onSubmit: (mode: "request" | "receive", itemName: string, quantity: number) => void;
}

function LoginModal({ mode, items, requests, onClose, onApprove, onSubmit }: LoginModalProps) {
  const [itemName, setItemName] = useState(items[0]?.name ?? "");
  const [quantity, setQuantity] = useState(1);
  const isReview = mode === "review";
  const title = mode === "receive" ? "Receive stock" : isReview ? "Stock requests" : "Request supplies";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(mode === "receive" ? "receive" : "request", itemName, quantity);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/50 p-4" role="presentation" onClick={onClose}>
      <section
        aria-labelledby="dialog-title"
        aria-modal="true"
        className="my-auto w-full max-w-lg rounded-2xl bg-surface p-5 shadow-2xl sm:p-6"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="dialog-title" className="text-xl font-semibold text-ink">{title}</h2>
            <p className="mt-1 text-sm text-muted">
              {isReview ? "Review supply requests from campus offices and issue available stock." : "Select an item and quantity to record this stock movement."}
            </p>
          </div>
          <button aria-label="Close dialog" className="rounded-lg p-1.5 text-muted hover:bg-canvas" onClick={onClose}>
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {isReview ? (
          <div className="mt-5 space-y-3">
            {requests.map((request) => (
              <article className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line p-4" key={request.id}>
                <div>
                  <h3 className="text-base font-semibold text-ink">{request.item}</h3>
                  <p className="mt-1 text-sm text-muted">{request.office} · {request.quantity} {request.unit}</p>
                  <p className="mt-1 text-xs text-muted">{request.daysAgo === 0 ? "Submitted today" : `Submitted ${request.daysAgo} day ago`}</p>
                </div>
                <button className="rounded-lg bg-forest px-3 py-2 text-sm font-semibold text-white hover:bg-forest-dark" onClick={() => onApprove(request.id)}>
                  Approve
                </button>
              </article>
            ))}
            {requests.length === 0 && (
              <p className="rounded-xl bg-canvas px-4 py-8 text-center text-sm text-muted">All requests have been reviewed.</p>
            )}
            <button className="mt-2 w-full rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-muted hover:bg-canvas" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Supply item</span>
              <select
                className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
                required
                value={itemName}
                onChange={(event) => setItemName(event.target.value)}
              >
                {items.map((item) => <option key={item.id} value={item.name}>{item.name} · {item.qty} {item.unit}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">Quantity</span>
              <input
                className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
                type="number"
                min="1"
                step="1"
                required
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              />
            </label>
            <div className="flex justify-end gap-2 pt-1">
              <button type="button" className="rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-muted hover:bg-canvas" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-dark">
                {mode === "receive" ? "Record receipt" : "Submit request"}
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

export default LoginModal;
