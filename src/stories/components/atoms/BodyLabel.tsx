interface BodyLabelProps {
    children: string;
    className: string;
}

const BodyLabel = ({
    children = "",
    className = "",
}: BodyLabelProps) => {

  return(
    <div className={`${className}`}>{children}</div>
  );
};

export default BodyLabel;