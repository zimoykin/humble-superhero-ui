import React from 'react';
import ToggleThemeComponent from './toggle-theme.component';

const HeaderComponent: React.FC = () => {
    return (
        <header className="w-full sticky top-0 bg-secondary-bg py-2 px-1 shadow-md">
            <nav className="flex w-full max-w-6xl mx-auto items-center justify-items-start bg-main-bg rounded-lg p-1">
                <div className='w-full max-w-normal-screen bg-main-bg'>
                    <h1 className='hidden md:block'>
                        🦸‍♂️ Hello hero!
                    </h1>
                    <h1 className='md:hidden'>
                        🦸‍♂️
                    </h1>
                </div>
                <div className='p-1 w-full flex items-end justify-end'>
                    <div>
                        <ToggleThemeComponent />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;