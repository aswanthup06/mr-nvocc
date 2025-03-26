// components/Modal.js
import { useEffect } from 'react';


export default function Modal({ isOpen, onClose, children }) {
  // Close modal on pressing the Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (

    <div

    className='w-full'

      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }}
      onClick={onClose} // Close modal when clicking outside
    >
      <div
      className='h-full'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {children}
      </div>
    </div>
  

  );
}