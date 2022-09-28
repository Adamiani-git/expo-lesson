import { View, Text, Image, TouchableOpacity } from 'react-native'

const CategoriesCard = (props) => {
    return (
        <TouchableOpacity >
            <View style={{ paddingHorizontal: 5 }}>
                <Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 80, height: 70, borderRadius: 10 }} />
                <Text style={{
                    position: "absolute", bottom: 5, left: 10, color: "white", fontWeight: "bold", textShadowColor: 'black',
                    textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10
                }} >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoriesCard