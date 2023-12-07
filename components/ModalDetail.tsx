import { ReactNode, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-50 bg-white p-4 rounded-md">
        <span
          className="absolute top-0 right-0 mt-1 mr-2 text-gray-500 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;