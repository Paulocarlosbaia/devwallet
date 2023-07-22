import {
    createNativeStackNavigator
} from '@react-navigation/native-stack'
import Home from '../screens/home'
import Add from '../screens/add'

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='add' component={Add} />
        </Navigator>
    )
}