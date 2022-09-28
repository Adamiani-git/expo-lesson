import { View, Text, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const FeaturedCard = (props) => {
    return (
        <View style={{ width: 240, height: 200, marginHorizontal: 10, overflow: "hidden", borderRadius: 10, backgroundColor: "white" }}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 240, height: 120, marginBottom: 5 }} />
            <Text style={{ fontWeight: "bold", fontSize: 18, lineHeight: 30 }}>{props.title}</Text>
            <View style={{ flexDirection: "row" }}>
                <Ionicons name="star" size={18} color="black" />
                <Text style={{ marginHorizontal: 8 }}>{props.rank}</Text>
                <Text style={{ marginEnd: 8 }}>|</Text>
                <Text>{props.offer_type}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Ionicons name="location-outline" size={18} color="black" />
                <Text style={{ marginStart: 8 }}>{props.location}</Text>
            </View>
        </View>
    )
}

export default FeaturedCard