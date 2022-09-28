import { View, Text, ScrollView } from 'react-native'
import ArrowRight from '../../components/ArrowRight'

import FeaturedCard from '../../components/FeaturedCard'
import SectionHeader from '../../components/SectionHeader'

const FeaturedList = () => {
    return (
        <View style={{ marginTop: 5 }}>
            <SectionHeader title="Featured" description="Small Text" />
            <ScrollView horizontal style={{ flexDirection: "row" }} showsHorizontalScrollIndicator={false}>
                <FeaturedCard title="Machakhela" rank="4.5" Featured_type="Sushi" location="Rustaveli str" />
                <FeaturedCard title="Machakhela" />
                <FeaturedCard title="Machakhela" />
                <FeaturedCard title="Machakhela" />
                <FeaturedCard title="Machakhela" />
            </ScrollView>
            <ArrowRight />
        </View>
    )
}

export default FeaturedList