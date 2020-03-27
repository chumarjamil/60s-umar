import React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from './ProfileScreen';
import NewTask from './NewTask';


const MainNavigator = createStackNavigator(
    {
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#459CE9',
                },
                headerTintColor: '#fff',
    
                title: 'Profile',
                headerTitleAlign: 'center',
                headerLeft: (
                ) => <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Image
                            source={require('./assets/home.png')}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: '#FFF', fontSize: 10 }}>HOME</Text>
                    </View>,
                headerRight: (
    
                ) => <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                        <Image
                            source={require('./assets/gallery_icon.png')}
                            style={{ width: 30, height: 22, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: '#FFF', fontSize: 10 }}>GALLERY</Text>
                    </View>
            },
    
        },
        NewTask : {
            screen : NewTask,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#459CE9',
                },
                headerTintColor: '#fff',
    
                title: 'New Tasks',
                headerTitleAlign: 'left',
                headerLeft: (
                ) => <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                        <Image
                            source={require('./assets/back_icon.png')}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }}
                        />
                        
                    </View>,
                headerRight: (
    
                ) => <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-evenly', marginRight: 16 }}>
                            
                            <Text style={{ color: '#FFF', fontSize: 16, marginRight: 20 }}>CANCEL</Text>
                        <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>SAVE</Text>
                    </View>
            },
        }
        
},{
    initialRouteName : 'NewTask',
}
);

const App = createAppContainer(MainNavigator);

export default App;