const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn">
            confirm
          </button>
          <button typeof="button" className="btn clear-btn">
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
