import React from "react";

interface Col2Props {
    children: React.ReactNode;
    className?: string;
}

const Col2 = ({
    children,
    className="grid grid-cols-2 items-center"
}: Col2Props) => {
    return (
        <div className={`col2 ${className}`}>
            { children }
        </div>
    )
}

export default Col2;
