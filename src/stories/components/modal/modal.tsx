import { useState } from "react";
import Button from "../button/button";
import ModalContainer from "./modal-container";

interface ModalProps {
  width?: string;
  borderRadius?: string;
  overlayColor: string;
  backgroundColor: string;
  alwaysShow?: boolean;
}

const Modal = ({
  width = "300",
  borderRadius = "md",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  backgroundColor = "white",
  alwaysShow = false,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <div>
      {!alwaysShow && (
      <Button
        ariaLabel={""}
        onClick={handleOpenModal}
        aria-label={""}
        className="absolute inset-0 opacity-80 z-[99] border-none w-full shadow-none hover:translate-x-0 hover:translate-y-0 hover:shadow-none transition-all "
      />
      )}
      {(showModal || alwaysShow) && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen z-50"
            onClick={handleCloseModal}
            style={{
              backgroundColor: `${overlayColor}`,
            }}
          >
            <div
              className={`fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center z-[100] p-4 ${alwaysShow ? handleOpenModal : handleCloseModal}`}
              onClick={(e) => e.stopPropagation()}

            >
              <ModalContainer
                handleCloseModal={handleCloseModal}
                width={width}
                borderRadius={borderRadius}
                backgroundColor={backgroundColor}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;