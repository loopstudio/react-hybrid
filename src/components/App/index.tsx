import React, { useState } from 'react';
import { App } from './App'

function AppContainer() {
    const [value, setValue] = useState<number>(0);
    const handleOnHit = () => setValue( value + 1);

    return (
        <App onHit={handleOnHit} value={value} />
    );
}

export default AppContainer;