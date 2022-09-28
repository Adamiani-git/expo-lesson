import { View, Text } from 'react-native'
import React from 'react'

const SectionHeader = (props) => {
    return (
        <View style={{ paddingStart: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.title}</Text>
            <Text>{props.description}</Text>
        </View>
    )
}

export default SectionHeader