import { View, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Search from './Search'
import Body from './Body'

const HomeScreen = () => {

    // const navigation = useNavigation()

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false
    //     })
    // }, [])

    return (
        <SafeAreaView style={Platform.OS === "android" && { marginTop: StatusBar.currentHeight }} >
            <View style={Platform.OS == "web" && { maxWidth: 1024, justifyContent: "center" }}>

                <View style={{ backgroundColor: "white", padding: 10 }}>
                    <Header />
                    <Search />
                </View>

                <Body />
            </View>

        </SafeAreaView >
    )
}

export default HomeScreen