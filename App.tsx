import { useNavigation } from "@react-navigation/native";
import Routes from "./src/routes";

const navigation = useNavigation()

function handleAddClick() {
    navigation.navigate('add')
}
export default function App() {
  return (
    <>
      <Routes />
    </>
  )
}