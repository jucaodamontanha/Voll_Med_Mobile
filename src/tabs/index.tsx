import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

// Cria um bottom tab navigator
const Tab = createBottomTabNavigator();

// Define as opções de estilo e cores da barra de navegação
const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339CFF",
    tabBarInactiveTintColor: "#fff",
}

// Array de objetos que define as abas do aplicativo
const tabs = [
    {
        name: "Principal",
        component: Principal,
        icon: "home"
    },
    {
        name: "Consultas",
        component: Consultas,
        icon: "calendar"
    },
    {
        name: "Explorar",
        component: Explorar,
        icon: "search"
    },
    {
        name: "Perfil",
        component: Perfil,
        icon: "person"
    }
]

export default function Tabs() {
    return (
        // Configura o Tab Navigator com as opções de tela e as abas definidas
        <Tab.Navigator id={undefined} screenOptions={screenOptions}>
            {tabs.map((tab) => (
                // Define cada aba com seu respectivo componente e ícone
                <Tab.Screen 
                    key={tab.name}
                    name={tab.name} 
                    component={tab.component}  
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name={tab.icon} size={size} color={color} />
                        )
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}