import { widthStyles } from "../../utilities/styles";
import { borderRadiusStyles } from "../../utilities/styles";
import ModalContent from "./modal-content";

interface ModalContainerProps {
  handleCloseModal?: () => void;
  width?: string;
  borderRadius?: string;
  backgroundColor?: string;
  children?: string;
}

const ModalContainer = ({
  handleCloseModal,
  width = "300",
  borderRadius = "md",
  backgroundColor = "white",
  children = ""
}: ModalContainerProps) => {
  return (
    <div style={{...(backgroundColor && { backgroundColor }),}}
    className={`${widthStyles(width)} ${borderRadiusStyles(borderRadius)} text-black z-[101] mx-auto min-h-[300px] border border-black bg-white p-4 flex flex-col gap-4`}>
      <ModalContent
      handleCloseModal={handleCloseModal} children={children}/>
    </div>
  );
};
export default ModalContainer;
