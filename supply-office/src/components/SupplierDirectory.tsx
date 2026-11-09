import { useState } from "react";
import type { FormEvent } from "react";

interface Supplier {
  id: number;
  name: string;
  contact: string;
  email: string;
  phone: string;
}

function SupplierDirectory() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuppliers((current) => [
      ...current,
      { id: Date.now(), name: name.trim(), contact: contact.trim(), email: email.trim(), phone: phone.trim() },
    ]);
    setName("");
    setContact("");
    setEmail("");
    setPhone("");
    setIsAdding(false);
  }

  return (
    <section id="suppliers" className="mx-auto mt-4 max-w-[1500px] overflow-hidden rounded-[20px] border border-line bg-surface shadow-card lg:ml-[292px] lg:mr-7">
      <div className="flex flex-col justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h2 className="text-xl font-semibold text-ink">Supplier directory</h2>
          <p className="mt-1 text-sm text-muted">Manage supplier contacts for purchasing and stock receiving.</p>
        </div>
        <button
          type="button"
          onClick={() => setIsAdding((current) => !current)}
          className="rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          {isAdding ? "Cancel" : "Add supplier"}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="grid gap-4 border-y border-line bg-canvas p-5 sm:grid-cols-2 sm:p-6">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Supplier name</span>
            <input
              autoComplete="organization"
              className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Contact person</span>
            <input
              autoComplete="name"
              className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
            <input
              autoComplete="email"
              className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Phone</span>
            <input
              autoComplete="tel"
              className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/10"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>
          <div className="flex justify-end sm:col-span-2">
            <button type="submit" className="rounded-lg bg-forest px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-dark">
              Save supplier
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto px-5 pb-5 sm:px-6">
        {suppliers.length > 0 ? (
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-table text-xs font-semibold uppercase tracking-wide text-muted">
                <th className="px-3 py-3">Supplier</th>
                <th className="px-3 py-3">Contact person</th>
                <th className="px-3 py-3">Email</th>
                <th className="px-3 py-3">Phone</th>
                <th className="px-3 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) => (
                <tr className="border-b border-line last:border-0" key={supplier.id}>
                  <td className="px-3 py-3 text-sm font-medium text-ink">{supplier.name}</td>
                  <td className="px-3 py-3 text-sm text-muted">{supplier.contact || "—"}</td>
                  <td className="px-3 py-3 text-sm text-muted">{supplier.email || "—"}</td>
                  <td className="px-3 py-3 text-sm text-muted">{supplier.phone || "—"}</td>
                  <td className="px-3 py-3 text-right">
                    <button
                      type="button"
                      aria-label={`Remove ${supplier.name}`}
                      onClick={() => setSuppliers((current) => current.filter((entry) => entry.id !== supplier.id))}
                      className="rounded-md px-2 py-1 text-sm font-medium text-danger hover:bg-danger-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="py-10 text-center">
            <p className="text-base font-semibold text-ink">No suppliers added yet</p>
            <p className="mt-1 text-sm text-muted">Add a supplier to keep its contact information available here.</p>
            {!isAdding && (
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                className="mt-4 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-forest transition hover:bg-sage-light"
              >
                Add your first supplier
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default SupplierDirectory;
