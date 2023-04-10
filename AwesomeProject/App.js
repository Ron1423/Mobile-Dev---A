import React from 'react' //library
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import UserList from './src/screens/UserList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import CoreComponents from './src/CoreComponents'
//import LoginPage from './src/Login';

const Stack = createNativeStackNavigator();

//function component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "SignIn" component={SignIn}/>
        <Stack.Screen name = "Register" component={Register}/>
        <Stack.Screen name = "UserList" component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    //<Register title = "REGISTRATION"/>
    //<CoreComponents title = "This is Props!!!" subtitle = "Welcome to React Native!"/>
    //<LoginPage title = "WELCOME"/>
  );
}
//Export
export default App;
