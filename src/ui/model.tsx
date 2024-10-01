type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export default function Modal({ children, open, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
