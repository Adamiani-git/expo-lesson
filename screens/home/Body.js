import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesList from './CategoriesList'
import OffersList from './OffersList'
import FeaturedList from './FeaturedList'
import Ionicons from '@expo/vector-icons/Ionicons';


const Body = () => {
    return (
        <ScrollView style={{ backgroundColor: "#edebeb", paddingBottom: 150 }}>

            <View style={{ paddingTop: 10, }}>
                <CategoriesList />

                <OffersList />

                <FeaturedList />

            </View>
        </ScrollView>
    )
}

export default Body