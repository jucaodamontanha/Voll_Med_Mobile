import { VStack, Divider, ScrollView } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consultas() {
    return (
        // Container principal com rolagem
        <ScrollView p={5}>
            {/* Título da tela de consultas */}
            <Titulo color="blue.500"> Minhas Consultas</Titulo>
            {/* Botão para agendar uma nova consulta */}
            <Botao mt={5} mb={5}>Agendar Nova Consulta</Botao>
            {/* Título da seção de próximas consultas */}
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}> Proximas Consultas</Titulo>
            {/* Cartão de consulta agendada */}
            <CardConsulta
                nome="Dr. Fulano"
                foto="https://avatars.githubusercontent.com/u/62408720?v=4"
                especialidade="Cardiologista"
                data="10/10/2021"
                foiAgendado
            />
            {/* Divisor para separar seções */}
            <Divider mt={5} />
            {/* Título da seção de consultas passadas */}
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}> Consultas Passadas</Titulo>
            {/* Cartões de consultas passadas */}
            <CardConsulta
                nome="Dr. Fulano"
                foto="https://avatars.githubusercontent.com/u/62408720?v=4"
                especialidade="Cardiologista"
                data="10/10/2021"
                foiAtendido
            />
            <CardConsulta
                nome="Dr. Fulano"
                foto="https://avatars.githubusercontent.com/u/62408720?v=4"
                especialidade="Cardiologista"
                data="10/10/2021"
                foiAtendido
            />
            <CardConsulta
                nome="Dr. Fulano"
                foto="https://avatars.githubusercontent.com/u/62408720?v=4"
                especialidade="Cardiologista"
                data="10/10/2021"
                foiAtendido
            />
            <CardConsulta
                nome="Dr. Fulano"
                foto="https://avatars.githubusercontent.com/u/62408720?v=4"
                especialidade="Cardiologista"
                data="10/10/2021"
                foiAtendido
            />
            <CardConsulta
                nome="Dr. Fulano"
                foto="https://avatars.githubusercontent.com/u/62408720?v=4"
                especialidade="Cardiologista"
                data="10/10/2021"
                foiAtendido
            />
        </ScrollView>
    );
}