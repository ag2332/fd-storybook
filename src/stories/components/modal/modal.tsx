import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import Button from "../button/button";
import ModalContainer from "./modal-container";

interface ModalProps {
  className?: string;
  onClick?: () => void;
  handleClosemodal?: boolean;
}

const Modal = ({ className = "", onClick }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("portal");
    setPortalElement(element);
  }, []);

  if (!portalElement) {
    return null;
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  console.log(showModal);

  return(
    <div>
      <Button
        ariaLabel={""}
        onClick={handleOpenModal}
        aria-label={""}
        className="absolute inset-0 opacity-80 z-[99] border-none w-full shadow-none hover:translate-x-0 hover:translate-y-0 hover:shadow-none transition-all "
      />
      {showModal &&
        ReactDom.createPortal(
          <>
            <div
              className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-50"
              onClick={handleCloseModal}
            ></div>
            <div
              className="fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center z-[100] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ModalContainer />,
            </div>
          </>,
          portalElement
        )}
    </div>
  );
};

export default Modal;
