import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.Routes";

export default function Routes(){
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}