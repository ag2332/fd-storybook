interface ModalContentProps {
  handleCloseModal?: () => void;
  children?: string;
}

const ModalContent = ({
  handleCloseModal,
  children = "",
}: ModalContentProps) => {
  return (
    <div>
      <div className="w-full flex justify-end pt-1 pr-3">
          <button
            onClick={handleCloseModal}
            className="text-gray-600 cursor-pointer hover:text-black text-2xl font-bold focus:outline-none"
          >
            &times;
          </button>
        </div>
      {children}
    </div>
  );
};

export default ModalContent;