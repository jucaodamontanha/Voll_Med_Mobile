import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/Logo.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { Depoimentos } from "../utils/mok";

export default function Principal() {

  return (
    // Container principal com rolagem
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        {/* Exibe a logo do aplicativo */}
        <Image source={Logo} alt="Logo" mt={10} />
        {/* Exibe o título de boas-vindas */}
        <Titulo color="blue.500">Boas-vindas!</Titulo>

        {/* Caixa de entrada para busca de especialidade e localização */}
        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
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

        {/* Título da seção de depoimentos */}
        <Titulo color="blue.800" alignSelf="center">Depoimentos</Titulo>
        {/* Lista de depoimentos */}
        <VStack space={3} divider={<Divider />} w="100%">
          {
            Depoimentos.map(depoimento => (
              <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                {/* Texto do depoimento */}
                <Text color="gray.300" fontSize="md" textAlign="justify">
                  {depoimento.text}
                </Text>
                {/* Título do depoimento */}
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">
                  {depoimento.titulo}
                </Text>
              </Box>
            ))
          }
        </VStack>
      </VStack>
    </ScrollView>
  );
}