import { View, Text, ScrollView } from 'react-native'
import ArrowRight from '../../components/ArrowRight'
import CategoriesCard from '../../components/CategoriesCard'

const CategoriesList = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }} horizontal showsHorizontalScrollIndicator={false}>
                <CategoriesCard title="title1" />
                <CategoriesCard title="title2" />
                <CategoriesCard title="title3" />
                <CategoriesCard title="title4" />
                <CategoriesCard title="title5" />
                <CategoriesCard title="title6" />
                <CategoriesCard title="title7" />
                <CategoriesCard title="title8" />
                <CategoriesCard title="title9" />

            </ScrollView>
            <ArrowRight />
        </View>
    )
}

export default CategoriesList