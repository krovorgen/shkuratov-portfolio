import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import './scss/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
