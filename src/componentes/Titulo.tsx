// Importa os componentes Text e ITextProps do Native Base
import { Text, ITextProps } from "native-base"
// Importa o tipo ReactNode do React
import { ReactNode } from "react"

// Define a interface para as propriedades do componente Titulo
interface TituloProps extends ITextProps {
    children: ReactNode
}

// Define o componente Titulo
export function Titulo({children, ...rest}: TituloProps) {
    return (
        // Renderiza o componente Text com estilos personalizados e propriedades adicionais
        <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
        {...rest}
      >
       {/* Renderiza o conteúdo passado como children */}
       {children}
      </Text>
    )
}