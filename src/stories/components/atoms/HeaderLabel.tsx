interface HeaderLabelProps {
    children: string;
    className: string;
}

const HeaderLabel = ({
    children = "",
    className = "",
}: HeaderLabelProps) => {

  return(
    <div className={`${className}`}>{children}</div>
  );
};

export default HeaderLabel;