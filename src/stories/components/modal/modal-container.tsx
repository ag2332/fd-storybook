import ModalContent from "./modal-content";

interface ModalContainerProps {
  className?: string;
  handleCloseModal?: () => void;
}

const ModalContainer = ({
  className,
  handleCloseModal,
}: ModalContainerProps) => {
  return (
    <div className="relative text-black z-[101] max-w-[450px] w-full mx-auto min-h-[300px] rounded-xl border border-black bg-white p-4 flex flex-col gap-4">
      <ModalContent onClick={handleCloseModal} />
    </div>
  );
};
export default ModalContainer;
