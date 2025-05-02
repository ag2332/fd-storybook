import BodyLabel from "./BodyLabel";
import HeaderLabel from "./HeaderLabel";

interface itemProps {
}

const Item = ({
}: itemProps) => {
  return (
    <div className="top-10 my-5 bg-black text-white p-4 rounded-xl shadow-lg w-72 z-50">
      <h1>Heading</h1>
      <p>body</p>
    </div>
  );
};

export default Item;
