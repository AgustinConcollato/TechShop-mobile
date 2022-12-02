import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator()

const CartNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="ShopingCart">
            <Stack.Screen name="ShopingCart" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default CartNavigation
