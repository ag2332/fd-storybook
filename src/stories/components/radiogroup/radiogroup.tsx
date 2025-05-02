import Item from "../atoms/item";

interface RadioGroupProps {
}

const RadioGroup = ({

}: RadioGroupProps) => {
    const Items = Array.from({ length: 3 }, (_, i) => (
        <Item
        key={i}
        />
      ));

  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
            {Items.map((item, index) => (
                <div key={index} className="mx-2">
                {item}
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default RadioGroup;