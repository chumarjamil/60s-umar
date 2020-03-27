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
    TextInput,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ViewPager from '@react-native-community/viewpager';
import * as Progress from 'react-native-progress';
import { KeyboardAvoidingView } from 'react-native';

export default class NewTask extends React.Component {

    state = {
        currentPosition: 0,
        fillAmount: 0,
        scenario_color: '#1452a3',
        script_color: 'white',
        rehearse_color: 'white',
        deliver_color: 'white',

        scenario_color_label: 'white',
        script_color_label: '#8BBEF1',
        rehearse_color_label: '#8BBEF1',
        deliver_color_label: '#8BBEF1',

        indicator_a: 100,
        indicator_b: 0,
        indicator_c: 0,
        indicator_d: 0,

    }

    onPageSelected = (e: PageSelectedEvent) => {
        console.log(e.nativeEvent.position);
        if (e.nativeEvent.position == 0) {

            this.setState({
                fillAmount: 0.25,
                script_color: 'white',
                rehearse_color: 'white',
                deliver_color: 'white',

                script_color_label: '#8BBEF1',
                rehearse_color_label: '#8BBEF1',
                deliver_color_label: '#8BBEF1',

                indicator_a: 100,
                indicator_b: 0,
                indicator_c: 0,
                indicator_d: 0,


            })
        }
        else if (e.nativeEvent.position == 1) {
            this.setState({
                fillAmount: 0.5,
                script_color: '#1452a3',
                rehearse_color: 'white',
                deliver_color: 'white',

                script_color_label: 'white',
                rehearse_color_label: '#8BBEF1',
                deliver_color_label: '#8BBEF1',

                indicator_a: 0,
                indicator_b: 100,
                indicator_c: 0,
                indicator_d: 0,

            })
        }
        else if (e.nativeEvent.position == 2) {
            this.setState({
                fillAmount: 0.75,
                script_color: '#1452a3',
                rehearse_color: '#1452a3',
                deliver_color: 'white',

                script_color_label: 'white',
                rehearse_color_label: 'white',
                deliver_color_label: '#8BBEF1',

                indicator_a: 0,
                indicator_b: 0,
                indicator_c: 100,
                indicator_d: 0,


            })
        }
        else if (e.nativeEvent.position == 3) {
            this.setState({
                fillAmount: 1,
                script_color: '#1452a3',
                rehearse_color: '#1452a3',
                deliver_color: '#1452a3',

                script_color_label: 'white',
                rehearse_color_label: 'white',
                deliver_color_label: 'white',

                indicator_a: 0,
                indicator_b: 0,
                indicator_c: 0,
                indicator_d: 100,


            })
        }
    };

    render() {
        return (

            <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#E2EEFE' }}>
                <ImageBackground style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
                    source={require('./assets/background.jpeg')}
                    imageStyle={{ borderBottomLeftRadius: 100 / 2, borderBottomRightRadius: 100 / 2 }}
                >
                    <View style={{ height: 45, justifyContent: 'center' }}>
                        <Progress.Bar progress={this.state.fillAmount}
                            width={null}
                            height={45}
                            borderRadius={30}
                            animated={true}
                            color={'rgba(255, 255, 255, 1)'}
                            unfilledColor={'rgba(139, 190, 241, 1)'}
                            borderColor={'rgba(139, 190, 241, 1)'}
                            style={{ marginLeft: 20, marginRight: 20 }}
                        >
                        </Progress.Bar>
                        <View style={{ width: '100%', position: 'absolute', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 2 }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Image

                                    source={require('./assets/scenario_icon.png')}
                                    style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: this.state.scenario_color }}
                                >
                                </Image>
                                <View style={{ width: 20, height: 3, backgroundColor: '#F1B57E', opacity: this.state.indicator_a }}></View>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Image source={require('./assets/script_icon.png')}
                                    style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: this.state.script_color }}
                                >
                                </Image>
                                <View style={{ width: 20, height: 3, backgroundColor: '#F1B57E', opacity: this.state.indicator_b }}></View>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Image source={require('./assets/rehearse_icon.png')}
                                    style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: this.state.rehearse_color }}
                                >
                                </Image>
                                <View style={{ width: 20, height: 3, backgroundColor: '#F1B57E', opacity: this.state.indicator_c }}></View>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Image source={require('./assets/video_icon.png')}
                                    style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: this.state.deliver_color }}
                                >
                                </Image>
                                <View style={{ width: 20, height: 3, backgroundColor: '#F1B57E', opacity: this.state.indicator_d }}></View>
                            </View>
                        </View>
                    </View>


                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 12, color: this.state.scenario_color_label }}>SCENARIO</Text>
                        <Text style={{ fontSize: 12, color: this.state.script_color_label }}>SCRIPT</Text>
                        <Text style={{ fontSize: 12, color: this.state.rehearse_color_label }}>REHEARSE</Text>
                        <Text style={{ fontSize: 12, color: this.state.deliver_color_label }}>DELIVER</Text>
                    </View>
                </ImageBackground>


                <ViewPager style={styles.viewPager} initialPage={0}
                    onPageSelected={this.onPageSelected}
                >
                    <View key="1">
                        <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', }}>
                            <View style={{ flex: 3, flexDirection: 'column', marginLeft: 20, marginRight: 20,  justifyContent: 'space-around' }}>
                                <Text style={{marginTop: 20}}>Task Title</Text>
                                <View style={{ marginTop: 22, height: 60, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', flexDirection: 'row' }}>
                                    <TextInput style={{ flex: 1, backgroundColor: '#FFF', }} />
                                </View>

                                <Text style={{marginTop: 20}}>Audience</Text>
                                <View style={{ marginTop: 22, height: 60, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', flexDirection: 'row' }}>
                                    <TextInput style={{ flex: 1, backgroundColor: '#FFF', }} />
                                </View>

                                <Text style={{marginTop: 20}}>Situation</Text>
                                <View style={{ marginTop: 22,height: 60, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', flexDirection: 'row' }}>
                                    <TextInput style={{ flex: 1, backgroundColor: '#FFF', }} />
                                </View>

                                <Text style={{marginTop: 20}}>Keywords</Text>
                                <View style={{marginTop: 22, height: 60, backgroundColor: '#FFF', borderRadius: 8, alignItems: 'center', flexDirection: 'row' }}>
                                    <TextInput style={{ flex: 1, backgroundColor: '#FFF', }} />
                                </View>


                            </View>
                            <View style={{ flex: 1 }}></View>
                        </View>
                    </View>
                    <View key="2">
                        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#E2EEFE' }}>
                            <Text>Script</Text>
                        </View>
                    </View>

                    <View key="3">
                        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#E2EEFE' }}>
                            <Text>REHEARSE</Text>
                        </View>
                    </View>

                    <View key="4">
                        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#E2EEFE' }}>
                            <Text>Deliver</Text>
                        </View>
                    </View>
                </ViewPager>




            </View>
        )
    }


}

const styles = StyleSheet.create({
    viewPager: {
        flex: 3,
    },
});