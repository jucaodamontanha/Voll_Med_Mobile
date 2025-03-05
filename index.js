// Importa a função registerRootComponent do pacote 'expo'
import { registerRootComponent } from 'expo';

// Importa o componente principal do aplicativo
import App from './App';

// A função registerRootComponent registra o componente principal do aplicativo
// Isso garante que, independentemente de você carregar o aplicativo no Expo Go ou em uma build nativa,
// o ambiente será configurado de forma apropriada
registerRootComponent(App);
