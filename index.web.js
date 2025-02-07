import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';

AppRegistry.registerComponent(appName, () => App);

const rootTag = document.getElementById('root');
const root = createRoot(rootTag);
root.render(<App />);
