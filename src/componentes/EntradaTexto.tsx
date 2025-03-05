// Importa os componentes FormControl e Input do Native Base
import { FormControl, Input } from "native-base";
// Importa o React
import React from "react";

// Define a interface para as propriedades do componente EntradaTexto
interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
}

// Define o componente EntradaTexto
export function EntradaTexto({label, placeholder, secureTextEntry = false}: InputProps): JSX.Element {
    return (
        // Container do campo de entrada com margem superior
        <FormControl mt={3}>
            {/* Renderiza o rótulo do campo de entrada, se fornecido */}
            {label && <FormControl.Label>{label}</FormControl.Label>}
            {/* Renderiza o campo de entrada de texto */}
            <Input
                placeholder={placeholder} 
                size='lg'
                w="100%"
                borderRadius='lg'
                bgColor='gray.100'
                secureTextEntry={secureTextEntry}
                shadow={3}
            />
        </FormControl>
    )
}