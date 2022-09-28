import { View, Text, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
    return (
        <View >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View className="#f1f1f1">
                    <Image source={{ uri: "https://picsum.photos/200" }} style={{ borderRadius: 20, width: 40, height: 40 }} />
                </View>
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    <Text style={{ color: 'indigo', fontWeight: "300" }}>Delivery Now!</Text>
                    <Text style={{ color: "indigo", fontWeight: "bold", fontSize: 18, lineHeight: 18 }}>
                        Current Location
                        <Ionicons name="chevron-down" size={24} color="#4b0082" />
                    </Text>
                </View>
                <View>
                    <Ionicons name="person-outline" size={32} color="#4b0082" />
                </View>
            </View>
        </View>
    )
}

export default Header

