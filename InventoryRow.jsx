export default function InventoryRow({ item, onView }) {
  const low = item.stock < item.reorder
  return (
    <tr>
      <td className="text-secondary">{item.id}</td>
      <td className="fw-semibold">{item.name}</td>
      <td className="d-none d-md-table-cell">{item.category}</td>
      <td>
        {item.stock} <span className="text-secondary small d-none d-sm-inline">{item.unit}</span>
      </td>
      <td>
        <span className={`badge ${low ? 'text-bg-danger' : 'text-bg-success'}`}>
          {low ? 'Low' : 'In Stock'}
        </span>
      </td>
      <td className="text-end">
        <button className="btn btn-sm btn-outline-primary" onClick={() => onView(item)}>
          View
        </button>
      </td>
    </tr>
  )
}
