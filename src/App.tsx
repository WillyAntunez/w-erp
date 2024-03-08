import { useEffect } from 'react';
import { AppRouter } from './router/AppRouter';
import { useApplicationStore } from './hooks/useApplicationStore';

import './locales/config';

import '@inovua/reactdatagrid-community/index.css';

function App() {
    const { listenScreenWidth } = useApplicationStore();

    useEffect(listenScreenWidth, []);

    return <AppRouter />;
}

export default App;
