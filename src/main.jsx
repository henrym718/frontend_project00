import './index.css';
import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/authProvider';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </QueryClientProvider>
);
