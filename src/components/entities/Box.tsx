import React from 'react';

// Define props if needed, for example:
interface ARBoxProps {
    position?: string;
    color?: string;
}

const Box: React.FC<ARBoxProps> = ({ position = "0 0.5 0", color = "red" }) => {
    return (
        <>
        </>
    );
};

export default Box;
