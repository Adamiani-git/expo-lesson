import { View, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = () => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
            <View style={{ flex: 1, paddingEnd: 8, flexDirection: "row", borderRadius: 8, backgroundColor: "#edebeb", alignItems: "center", paddingHorizontal: 8, marginEnd: 8 }}>
                <Ionicons name="search" size={24} color="#4b0082" />
                <TextInput placeholder='Search...' style={{ flex: 1, height: 40, padding: 5, marginStart: 10 }} keyboardType="default" />
            </View>
            <View>
                <Ionicons name="ios-settings-outline" size={30} color="#4b0082" />
            </View>
        </View>
    )
}

export default Search