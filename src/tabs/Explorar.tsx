import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";

export default function Explorar(){
  return(
    // Container principal com rolagem
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        {/* Caixa de entrada para busca de especialidade e localização */}
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
          />
          <EntradaTexto
            placeholder="Digite sua localização"
          />
          {/* Botão para realizar a busca */}
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        {/* Título da seção de resultados da busca */}
        <Titulo color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
        {/* Lista de resultados da busca */}
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsulta 
              especialidade="Cardiologia"
              foto="https://avatars.githubusercontent.com/u/62408720?v=4"
              nome="Dr. Cunha"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}