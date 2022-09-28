import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


const ArrowRight = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 5, }}>
            <Ionicons name="arrow-forward" size={24} color="#4b0082" />
        </View>
    )
}

export default ArrowRight