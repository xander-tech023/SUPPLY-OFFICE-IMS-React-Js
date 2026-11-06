import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SupplyList from "./components/SupplyList";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import { supplies, transactions, weeklyMovement } from "./data/supplies";
import type { DialogMode, StockMovementEntry, Supply, SupplyRequest, Transaction } from "./types";

const initialRequests: SupplyRequest[] = [
  { id: 1, item: "Bond paper, A4", office: "Registrar's Office", quantity: 2, unit: "reams", daysAgo: 0 },
  { id: 2, item: "Whiteboard marker", office: "College of Education", quantity: 4, unit: "pieces", daysAgo: 1 },
];

function App() {
  const [dialog, setDialog] = useState<DialogMode | null>(null);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [notice, setNotice] = useState("");
  const [requests, setRequests] = useState(initialRequests);
  const [catalog, setCatalog] = useState<Supply[]>(supplies);
  const [movement, setMovement] = useState<StockMovementEntry[]>(weeklyMovement);
  const [history, setHistory] = useState<Transaction[]>(transactions);

  const pendingCount = requests.length;
  const stockedCount = catalog.filter((item) => item.status === "In Stock").length;
  const expiringCount = catalog.filter((item) => item.expiresInDays !== undefined && item.expiresInDays <= 45).length;
  const stats = [
    { title: "Catalog items", value: catalog.length, foot: `${stockedCount} stocked, ${catalog.length - stockedCount} out of stock` },
    { title: "Pending requests", value: pendingCount, foot: "Awaiting your review" },
    { title: "Low-stock alerts", value: catalog.filter((item) => item.status !== "In Stock").length, foot: "At or below minimum stock" },
    { title: "Expiring within 45 days", value: expiringCount, foot: "Review batches before issuance" },
  ];

  function showNotice(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3200);
  }

  function handleNavigation(label: string, action?: DialogMode, section?: string) {
    setActiveSection(label);
    setIsMenuOpen(false);

    if (action) {
      setDialog(action);
      return;
    }

    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    showNotice(`${label} will be available in a future update.`);
  }

  function handleSupplyAction(mode: "request" | "receive", itemName: string, quantity: number) {
    const item = catalog.find((entry) => entry.name === itemName);

    if (mode === "receive") {
      setCatalog((current) =>
        current.map((entry) =>
          entry.name === itemName
            ? { ...entry, qty: entry.qty + quantity, status: "In Stock" }
            : entry,
        ),
      );
      const receivedAt = new Date();
      const time = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(receivedAt);
      setHistory((current) => [
        {
          reference: `RCV-${receivedAt.getFullYear()}-${String(Date.now()).slice(-3)}`,
          date: `${receivedAt.toLocaleDateString("en-US", { month: "short", day: "numeric" })} · ${time}`,
          item: itemName,
          movement: `Received +${quantity}`,
          kind: "received",
          office: "Supply Office",
          staff: "Renjene D.S. Rivera",
        },
        ...current,
      ]);
      setMovement((current) =>
        current.map((entry, index) =>
          index === current.length - 1 ? { ...entry, received: entry.received + quantity } : entry,
        ),
      );
      showNotice(`Received ${quantity} ${item?.unit ?? "units"} of ${itemName}.`);
    } else {
      setRequests((current) => [
        ...current,
        { id: Date.now(), item: itemName, office: "Your office", quantity, unit: item?.unit ?? "units", daysAgo: 0 },
      ]);
      showNotice(`Request submitted for ${quantity} ${item?.unit ?? "units"} of ${itemName}.`);
    }
    setDialog(null);
  }

  function handleApproveRequest(id: number) {
    const request = requests.find((entry) => entry.id === id);
    setRequests((current) => current.filter((entry) => entry.id !== id));
    if (request) {
      showNotice(`Request for ${request.item} approved.`);
    }
  }

  function openDashboardSection(section: string) {
    setActiveSection(section === "inventory" ? "Inventory" : "Dashboard");
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`${isDark ? "dark" : ""} min-h-screen bg-canvas text-ink transition-colors`}>
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        isMenuOpen={isMenuOpen}
        pendingCount={pendingCount}
        onMenuToggle={() => setIsMenuOpen((current) => !current)}
        onNavigate={handleNavigation}
        onThemeToggle={() => setIsDark((current) => !current)}
        onRequest={() => setDialog("request")}
        onReceive={() => setDialog("receive")}
      />
      <Hero
        stats={stats}
        supplies={catalog}
        movement={movement}
        transactions={history}
        onViewInventory={() => openDashboardSection("inventory")}
        onViewHistory={() => openDashboardSection("transactions")}
      />
      <SupplyList items={catalog} />
      <Footer pendingCount={pendingCount} onReviewRequests={() => setDialog("review")} />

      {notice && (
        <div role="status" className="fixed bottom-5 right-5 z-50 max-w-sm rounded-lg bg-forest px-4 py-3 text-sm font-medium text-white shadow-xl">
          {notice}
        </div>
      )}
      {dialog && (
        <LoginModal
          mode={dialog}
          items={catalog}
          requests={requests}
          onClose={() => setDialog(null)}
          onApprove={handleApproveRequest}
          onSubmit={handleSupplyAction}
        />
      )}
    </div>
  );
}

export default App;
