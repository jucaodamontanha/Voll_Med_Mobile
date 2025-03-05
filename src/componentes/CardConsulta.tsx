import { Text, Avatar, VStack, Row } from 'native-base';
import { Botao } from './Botao';

// Define a interface para as propriedades do componente CardConsulta
interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

// Define o componente CardConsulta
export function CardConsulta({
nome,
foto,
especialidade,
data,
foiAtendido,
foiAgendado
}: CardProps){  
    return(
        // Container principal do cartão de consulta
        <VStack w="100%" bg={foiAtendido ? 'blue.100': 'white'}
         p={4}  borderRadius="lg" shadow={2} mb={5}>
            {/* Container para a foto e informações da consulta */}
            <VStack flexDir="row">
                {/* Exibe a foto do médico */}
                <Avatar size="lg" source={{ uri:foto }} />
                <VStack pl={4}>
                    {/* Exibe o nome do médico */}
                    <Text fontSize="md" bold>{nome}</Text>
                    {/* Exibe a especialidade do médico */}
                    <Text>{especialidade}</Text>
                    {/* Exibe a data da consulta */}
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            {/* Botão para agendar ou cancelar a consulta */}
            <Botao mt={4}>
              {foiAgendado ? "Cancelar" : "Agendar Consulta"}
            </Botao>
        </VStack>
    )
}