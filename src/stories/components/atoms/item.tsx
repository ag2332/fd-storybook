interface itemProps {
    children: any;
    className?: string;
}

const Item = ({
    children,
    className = "",
}: itemProps) => {

  return(
    <div className={`${className}`}>
        {children}
    </div>
  );
};

export default Item;
