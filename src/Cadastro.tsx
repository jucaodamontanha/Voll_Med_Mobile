import { VStack, Image, Text, Box, Link, Checkbox, ScrollView } from 'native-base'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  // Estado para controlar a seção atual do formulário
  const [numSecao, setNumSecao] = useState(0);
  
  // Função para avançar para a próxima seção
  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }

  // Função para voltar para a seção anterior
  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1)
    }
  }

  return (
    // Container principal com rolagem
    <ScrollView flex={1} p={5}>
      {/* Exibe a logo do aplicativo */}
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      {/* Exibe o título da seção atual */}
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {/* Renderiza os campos de entrada de texto da seção atual */}
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>
      <Box>
        {/* Exibe o texto para selecionar o plano */}
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
          Selecione o plano:
        </Text>
        {/* Renderiza os checkboxes da seção atual */}
        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>
      {/* Botão para voltar para a seção anterior, se não estiver na primeira seção */}
      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}
      {/* Botão para avançar para a próxima seção */}
      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>
    </ScrollView>
  );
}