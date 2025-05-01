import SignUp from "../atoms/SignUp";

interface ModalContentProps {
  className?: string;
  onClick?: () => void;
  handleCloseModal?: () => void;
}

const ModalContent = ({
  className = "",
  onClick,
  handleCloseModal,
}: ModalContentProps) => {
  return (
    <SignUp
      onClick={onClick}
      handleCloseModal={handleCloseModal}
    />
  );
};

export default ModalContent;