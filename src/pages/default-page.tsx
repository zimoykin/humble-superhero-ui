
import React from 'react';

interface Props {
    children: React.ReactNode;
};

const DefaultPage: React.FC<Props> = ({ children }) => {
    return (
        <main className='flex flex-col justify-start items-center h-full w-full'>
            {children}
        </main>
    );
};

export default DefaultPage;