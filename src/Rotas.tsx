// Importa o React
import React from "react";

// Importa os componentes necessários para navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Cria um stack navigator
const Tab = createNativeStackNavigator();

// Importa os componentes de tela
import Login from './Login';
import Cadastro from './Cadastro';
import Tabs from './tabs';

// Função principal que define as rotas do aplicativo
export default function Rotas() {
    return (
        // Envolve o aplicativo com o NavigationContainer para gerenciar a navegação
        <NavigationContainer>
            {/* Define as telas do stack navigator */}
            <Tab.Navigator id={undefined}>
                {/* Define a tela de Login */}
                <Tab.Screen name="Login" component={Login} options={{ headerShown: false}} />
                {/* Define a tela de Cadastro */}
                <Tab.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false}}/>
                {/* Define a tela de Tabs */}
                <Tab.Screen name="Tabs" component={Tabs} options={{ headerShown: false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}