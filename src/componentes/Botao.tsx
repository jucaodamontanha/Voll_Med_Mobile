// Importa os componentes Button e IButtonProps do Native Base
import { Button, IButtonProps } from 'native-base';
// Importa o tipo ReactNode do React
import { ReactNode } from "react";

// Define a interface para as propriedades do componente Botao
interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

// Define o componente Botao
export function Botao({ children, autoSize = false, color, ...rest }: ButtonProps){

  return (
    // Renderiza o componente Button com estilos personalizados e propriedades adicionais
    <Button
      w={autoSize ? 'auto' : '100%'}
      bg={color || 'blue.800'}
      mt={10}
      borderRadius="lg"
      _text={{ color: 'white' }}
      {...rest}
    >
      {/* Renderiza o conteúdo passado como children */}
      {children}
    </Button>
  );
};