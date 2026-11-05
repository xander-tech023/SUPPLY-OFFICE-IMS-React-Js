// Placeholder content. Replace with your system's real data.
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Inventory', href: '#inventory' },
  { label: 'FAQ', href: '#faq' },
]

export const stats = [
  { id: 1, label: 'Total Items', value: '1,248', icon: '📦', tone: 'primary' },
  { id: 2, label: 'Pending Requests', value: '37', icon: '📝', tone: 'warning' },
  { id: 3, label: 'Low Stock Alerts', value: '12', icon: '⚠️', tone: 'danger' },
  { id: 4, label: 'Departments Served', value: '18', icon: '🏢', tone: 'success' },
]

export const features = [
  { id: 1, icon: '📥', title: 'Stock Management', text: 'Record deliveries and keep accurate counts of every office supply.' },
  { id: 2, icon: '📤', title: 'Supply Requests', text: 'Departments submit requests and the office approves and issues items.' },
  { id: 3, icon: '🔔', title: 'Low-Stock Alerts', text: 'Get notified before essential items run out.' },
  { id: 4, icon: '📊', title: 'Reports', text: 'Generate monthly inventory and issuance reports in seconds.' },
]

export const inventory = [
  { id: 'SO-001', name: 'Bond Paper A4 (Ream)', category: 'Paper', stock: 120, reorder: 40, unit: 'ream', location: 'Shelf A1' },
  { id: 'SO-002', name: 'Ballpoint Pen, Black', category: 'Writing', stock: 18, reorder: 50, unit: 'box', location: 'Shelf B2' },
  { id: 'SO-003', name: 'Stapler, Heavy Duty', category: 'Equipment', stock: 25, reorder: 10, unit: 'pc', location: 'Shelf C1' },
  { id: 'SO-004', name: 'Printer Ink, Black', category: 'Consumables', stock: 6, reorder: 15, unit: 'bottle', location: 'Cabinet D3' },
  { id: 'SO-005', name: 'Folder, Long (Pack)', category: 'Paper', stock: 80, reorder: 30, unit: 'pack', location: 'Shelf A3' },
  { id: 'SO-006', name: 'Marker, Permanent', category: 'Writing', stock: 44, reorder: 20, unit: 'box', location: 'Shelf B1' },
  { id: 'SO-007', name: 'Correction Tape', category: 'Writing', stock: 9, reorder: 25, unit: 'pc', location: 'Shelf B3' },
  { id: 'SO-008', name: 'Toner Cartridge', category: 'Consumables', stock: 14, reorder: 8, unit: 'pc', location: 'Cabinet D1' },
]

export const faqs = [
  { id: 1, q: 'Who can request supplies?', a: 'Any registered department staff member can submit a request through the system.' },
  { id: 2, q: 'How are low-stock items flagged?', a: 'An item is flagged when its stock falls below its reorder level.' },
  { id: 3, q: 'Can I export inventory reports?', a: 'Yes. Monthly reports can be exported by the supply officer.' },
]
