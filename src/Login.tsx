import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo'
import { EntradaTexto } from './componentes/EntradaTexto';

export default function Login({ navigation }) {
  return (
    // Container principal com alinhamento e espaçamento
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      {/* Exibe a logo do aplicativo */}
      <Image source={Logo} alt="Logo Voll" />
      {/* Exibe o título da tela */}
      <Titulo>
        Faça login em sua conta!
      </Titulo>
      <Box>
        {/* Campo de entrada para o email */}
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
        />
        {/* Campo de entrada para a senha */}
        <EntradaTexto
          label='Senha'
          placeholder='Insira sua senha'
        />
      </Box>

      {/* Botão para realizar o login e navegar para a tela de Tabs */}
      <Button w="100%" mt={8} onPress={() => navigation.navigate('Tabs')}>Entrar</Button>

      {/* Link para recuperação de senha */}
      <Link href='https://google.com' mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        {/* Texto informativo */}
        <Text>Ainda nao tem cadastro?</Text>
        {/* Link para a tela de cadastro */}
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


