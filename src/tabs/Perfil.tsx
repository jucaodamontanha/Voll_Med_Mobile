import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
    return (
        // Container principal com rolagem
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                {/* Exibe o título da tela de perfil */}
                <Titulo color="blue.500">Meu Perfil</Titulo>
                {/* Exibe o avatar do usuário */}
                <Avatar size="xl" source={{ uri: "https://avatars.githubusercontent.com/u/62408720?v=4" }} mt={5} />
                {/* Exibe o título da seção de informações pessoais */}
                <Titulo color="blue.500">Informações Pessoais</Titulo>
                {/* Exibe o nome do usuário */}
                <Titulo fontSize="lg" mb={1}>Lineker Xavier</Titulo>
                {/* Exibe a data de nascimento do usuário */}
                <Text>01/01/2001</Text>
                {/* Exibe a localização do usuário */}
                <Text>São Paulo</Text>

                {/* Divisor para separar seções */}
                <Divider mt={5}/>

                {/* Exibe o título da seção de histórico médico */}
                <Titulo color="blue.500" mb={1}>Historico medico</Titulo>
                {/* Exibe o histórico médico do usuário */}
                <Text>Bronquite</Text>
                <Text>Sinuzite</Text>
            </VStack>
        </ScrollView>
    );
}