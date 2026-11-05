// Interactive feature 4: modal dialog
export default function ItemModal({ item, onClose }) {
  if (!item) return null
  const low = item.stock < item.reorder

  return (
    <>
      <div className="modal d-block" tabIndex="-1" role="dialog" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{item.name}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <dl className="row mb-0">
                <dt className="col-5">Item Code</dt><dd className="col-7">{item.id}</dd>
                <dt className="col-5">Category</dt><dd className="col-7">{item.category}</dd>
                <dt className="col-5">Stock on Hand</dt><dd className="col-7">{item.stock} {item.unit}</dd>
                <dt className="col-5">Reorder Level</dt><dd className="col-7">{item.reorder} {item.unit}</dd>
                <dt className="col-5">Location</dt><dd className="col-7">{item.location}</dd>
                <dt className="col-5">Status</dt>
                <dd className="col-7">
                  <span className={`badge ${low ? 'text-bg-danger' : 'text-bg-success'}`}>
                    {low ? 'Needs restock' : 'Sufficient'}
                  </span>
                </dd>
              </dl>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show" />
    </>
  )
}
