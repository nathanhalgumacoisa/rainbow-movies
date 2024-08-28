import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Hobbies from "../screens/Hobbies";
import Filme from "../screens/Filme";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Hobbies" component={Hobbies} />
            <Stack.Screen name="Filmes" component={Filmes} />
        </Stack.Navigator>
    )
}
export default StackRoutes;