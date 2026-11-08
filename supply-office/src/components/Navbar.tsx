import cbsuaLogo from "../assets/logo.png";
import type { DialogMode } from "../types";

export type IconName =
  | "grid"
  | "box"
  | "clipboard"
  | "arrow-up"
  | "arrow-down"
  | "building"
  | "settings"
  | "logout"
  | "moon"
  | "sun"
  | "search"
  | "calendar"
  | "warning"
  | "check"
  | "close"
  | "menu";

const icons: Record<IconName, string> = {
  grid: "M4 13h6V4H4v9Zm10 7h6v-9h-6v9ZM4 20h6v-3H4v3Zm10-9h6V4h-6v7Z",
  box: "m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-7.5 4.7 7.5 4.4 7.5-4.4M12 12v9",
  clipboard: "M5 5h14v16H5zM9 5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M9 11h6M9 15h6",
  "arrow-up": "M12 19V5m-6 6 6-6 6 6M4 20h16",
  "arrow-down": "M12 5v14m6-6-6 6-6-6M4 4h16",
  building: "M4 3h16v18H4zM9 21v-4h6v4M8 7h2m4 0h2M8 11h2m4 0h2",
  settings: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-6v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12",
  logout: "M10 17l5-5-5-5m5 5H3m9-9h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6",
  moon: "M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z",
  sun: "M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 5 5",
  calendar: "M3 5h18v16H3zM16 3v4M8 3v4M3 11h18",
  warning: "m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0ZM12 9v4m0 4h.01",
  check: "m5 12 4 4L19 6",
  close: "m18 6-12 12M6 6l12 12",
  menu: "M4 6h16M4 12h16M4 18h16",
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={icons[name]} />
    </svg>
  );
}

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  isMenuOpen: boolean;
  pendingCount: number;
  onMenuToggle: () => void;
  onNavigate: (label: string, action?: DialogMode, section?: string) => void;
  onThemeToggle: () => void;
  onRequest: () => void;
  onReceive: () => void;
}

const links: { label: string; icon: IconName; action?: DialogMode; section?: string }[] = [
  { label: "Dashboard", icon: "grid", section: "dashboard" },
  { label: "Inventory", icon: "box", section: "inventory" },
  { label: "Stock Requests", icon: "clipboard", action: "review" },
  { label: "Issue Supplies", icon: "check", action: "request" },
  { label: "Receive Stock", icon: "arrow-down", action: "receive" },
  { label: "Suppliers", icon: "building" },
];

function Navbar({
  activeSection,
  isDark,
  isMenuOpen,
  pendingCount,
  onMenuToggle,
  onNavigate,
  onThemeToggle,
  onRequest,
  onReceive,
}: NavbarProps) {
  const dateLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <>
      {isMenuOpen && (
        <button
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onMenuToggle}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[292px] flex-col bg-forest text-white transition-transform duration-200 lg:translate-x-0 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-5 pb-3 pt-5">
          <img src={cbsuaLogo} alt="CBSUA seal" className="h-10 w-10 rounded-full object-contain" />
          <div>
            <p className="text-sm font-bold tracking-wide">CBSUA</p>
            <p className="mt-0.5 text-xs text-white/55">Sipocot Campus</p>
          </div>
          <button
            aria-label="Close navigation menu"
            className="ml-auto rounded-lg p-2 text-white/70 hover:bg-white/10 lg:hidden"
            onClick={onMenuToggle}
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 pb-7 pt-1">
          <p className="text-xs font-medium uppercase text-white/55">Supply Office</p>
          <p className="mt-3 text-sm text-white/85">Inventory management system</p>
        </div>

        <p className="px-5 pb-2 text-xs font-medium uppercase text-white/45">Workspace</p>
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => onNavigate(link.label, link.action, link.section)}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-sm transition ${
                activeSection === link.label
                  ? "bg-white/10 font-medium text-white"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon name={link.icon} className="h-[17px] w-[17px] shrink-0" />
              <span>{link.label}</span>
              {link.action === "review" && (
                <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-[10px]">{pendingCount}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="space-y-0.5 border-t border-white/10 px-3 py-3">
          <button
            onClick={() => onNavigate("Settings")}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-sm text-white/75 hover:bg-white/10 hover:text-white"
          >
            <Icon name="settings" className="h-[17px] w-[17px]" /> Settings
          </button>
          <button
            onClick={() => onNavigate("Help")}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-sm text-white/75 hover:bg-white/10 hover:text-white"
          >
            <Icon name="warning" className="h-[17px] w-[17px]" /> Help?
          </button>
          <button
            onClick={() => onNavigate("Sign out")}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-sm text-white/75 hover:bg-white/10 hover:text-white"
          >
            <Icon name="logout" className="h-[17px] w-[17px]" /> Sign out
          </button>
        </div>
      </aside>

      <header className="ml-0 lg:ml-[292px]">
        <div className="mx-auto flex max-w-[1500px] items-start justify-between gap-4 px-4 pt-5 sm:px-7 lg:px-7">
          <div className="flex min-w-0 items-start gap-3">
            <button
              aria-label="Open navigation menu"
              className="mt-1 rounded-lg p-2 text-muted hover:bg-surface lg:hidden"
              onClick={onMenuToggle}
            >
              <Icon name="menu" />
            </button>
            <div>
              <p className="text-sm text-muted">Supply Office / Homepage</p>
              <p className="mt-1 text-[27px] font-bold leading-tight tracking-[-0.03em] text-ink sm:text-[30px]">
                Homepage
              </p>
              <p className="mt-1 text-sm text-muted">
                Monitor campus stock, attend to requests, and keep every movement accountable.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-ink shadow-card hover:border-forest/40 sm:h-10 sm:w-10"
              onClick={onThemeToggle}
            >
              <Icon name={isDark ? "sun" : "moon"} className="h-[18px] w-[18px]" />
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white">
              RD
            </div>
            <div className="hidden sm:block">
              <p className="whitespace-nowrap text-sm font-semibold text-ink">Renjene D.S. Rivera</p>
              <p className="mt-0.5 whitespace-nowrap text-xs text-muted">Head, Supply Office</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-4 sm:px-7 lg:px-7">
          <p className="text-sm text-muted">{dateLabel}</p>
          <div className="flex gap-3">
            <button
              onClick={onRequest}
              className="rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink shadow-card hover:border-forest/40"
            >
              <span aria-hidden="true">+</span> New request
            </button>
            <button
              onClick={onReceive}
              className="rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-forest-dark"
            >
              Receive stock
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
