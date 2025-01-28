import React from 'react';

const SpinnerComponent: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full w-16 aspect-square border-t-4 p-2"></div>
        </div>
    );
};

export default SpinnerComponent;