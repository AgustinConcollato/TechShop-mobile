import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator()

const ProfileNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation
