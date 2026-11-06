import { useState } from "react";
import type { FormEvent } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Demo only: no backend for this activity
    alert(`Logged in as ${email} (demo)`);
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <>
      <div className="modal d-block" tabIndex={-1} role="dialog" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}

export default LoginModal;
