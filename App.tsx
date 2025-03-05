// Importa os componentes NativeBaseProvider e StatusBar do pacote 'native-base'
import { NativeBaseProvider, StatusBar } from 'native-base';

// Importa o tema personalizado do aplicativo
import { TEMAS } from './src/estilos/temas';

// Importa o componente de rotas do aplicativo
import Rotas from './src/Rotas';

// Função principal do aplicativo
export default function App() {
  return (
    // Envolve o aplicativo com o NativeBaseProvider e aplica o tema personalizado
    <NativeBaseProvider theme={TEMAS}>  
      {/* Configura a barra de status com a cor de fundo definida no tema */}
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      {/* Renderiza o componente de rotas */}
      <Rotas />
    </NativeBaseProvider>
  );
}

