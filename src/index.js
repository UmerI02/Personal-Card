import { createRoot } from 'react-dom/client';
import './index.css'
import Card from './components/card';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Card/>)