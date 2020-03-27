import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class ProfileScreen extends React.Component {


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'stretch', }}>
                <ImageBackground style={{ flex: 1, alignItems: 'stretch', flexDirection: 'column' }}
                    source={require('./assets/background.jpeg')}
                >

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'stretch' }}>

                            <Image style={{ width: 100, height: 100, borderRadius: 400 / 2, alignSelf: 'center', }}
                                source={require('./assets/user.jpg')}
                            ></Image>
                            <Text style={{ fontSize: 20, color: '#FFF', fontWeight: 'bold', alignSelf: 'center', }}>John Doe</Text>
                        </View>

                        <View style={{ flex: 1.5, flexDirection: 'column', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1.5 }}>
                                <View style={{ marginLeft: 20, marginRight: 10, borderRadius: 6, flex: 1, backgroundColor: '#FFF', flexDirection: 'column', alignItems: 'stretch' }}>
                                    <View style={{ flex: 1, backgroundColor: '#F4D6FC', borderBottomRightRadius: 100 / 2, borderTopLeftRadius: 6, borderTopRightRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#13539E', fontSize: 24, alignSelf: 'center', fontWeight: 'bold' }}>5</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'white', alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 6, borderBottomRightRadius: 6, justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', color: '#4A576A' }}>Task{"\n"}Completed</Text>
                                    </View>
                                </View>
                                <View style={{ borderRadius: 6, flex: 1, backgroundColor: '#FFF', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch' }}>
                                    <View style={{ flex: 1, backgroundColor: '#FCDBBB', borderBottomRightRadius: 100 / 2, borderTopLeftRadius: 6, borderTopRightRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#13539E', fontSize: 24, alignSelf: 'center', fontWeight: 'bold' }}>5</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'white', alignContent: 'center', alignItems: 'center', borderBottomLeftRadius: 6, borderBottomRightRadius: 6, justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', color: '#4A576A' }}>Gallery{"\n"}Videos</Text>
                                    </View>
                                </View>
                                <View style={{ marginRight: 20, marginLeft: 10, borderRadius: 6, flex: 1, backgroundColor: '#FFF', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch' }}>
                                    <View style={{ flex: 1, backgroundColor: '#BAF0ED', borderBottomRightRadius: 100 / 2, borderTopLeftRadius: 6, borderTopRightRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#13539E', fontSize: 24, alignSelf: 'center', fontWeight: 'bold' }}>8</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'white', alignContent: 'center', borderBottomLeftRadius: 6, borderBottomRightRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', color: '#4A576A' }}>Team{"\n"}Interactions</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 3, flexDirection: 'column', marginLeft: 15, marginRight: 15, justifyContent: 'flex-start' }}>

                            <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flex: 3}}>
                                <View style={{ marginTop: 10,marginBottom: 5,  flexDirection: 'row', borderRadius: 100, flex: 1, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                                    <Text style={{ textAlign: 'right', flex: 1, marginRight: 5, color: '#4A576A' }}>
                                        Company
                                </Text>
                                    <Text style={{ color: '#13539E', textAlign: 'left', flex: 1, marginLeft: 5, }}>
                                        Delvr
                                </Text>
                                </View>

                                <View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', borderRadius: 100, flex: 1, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                                    <Text style={{ textAlign: 'right', flex: 1, marginRight: 5, color: '#4A576A' }}>
                                        Company
                                </Text>
                                    <Text style={{ textAlign: 'left', flex: 1, marginLeft: 5, color: '#13539E' }}>
                                        Delvr
                                </Text>
                                </View>

                                <View style={{ marginTop: 5, marginBottom: 5,flexDirection: 'row', borderRadius: 100, flex: 1, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                                    <Text style={{ textAlign: 'right', flex: 1, marginRight: 5, color: '#4A576A' }}>
                                        Company
                                </Text>
                                    <Text style={{ textAlign: 'left', flex: 1, marginLeft: 5, color: '#13539E' }}>
                                        Delvr
                                </Text>
                                </View>

                                <View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', borderRadius: 100, flex: 1, width: '100%', backgroundColor: '#FFF', alignItems: 'center' }}>
                                    <Text style={{ textAlign: 'right', flex: 1, marginRight: 5, color: '#4A576A' }}>
                                        Company
                                </Text>
                                    <Text style={{ textAlign: 'left', flex: 1, marginLeft: 5, color: '#13539E' }}>
                                        Delvr
                                </Text>
                                </View>

                            </View>
                            <View style={{ flex: 1.2, justifyContent: 'flex-start' }}>
                            <View style={{ marginBottom: 8, borderRadius: 40, height: 55, width: 40, backgroundColor: '#FFF', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <Image
                                source={require('./assets/logout.png')}
                                style={{ width: 30, height: 30, resizeMode: 'contain' }}
                            />
                            <Text style={{ color: '#4A576A', fontSize: 10 }}>Logout</Text>
                        </View>
                            </View>
                        </View>

                    </View>

                </ImageBackground>
            </View>
        )
    }
}
