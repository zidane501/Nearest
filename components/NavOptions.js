import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [{
    id: 123,
    title: "Create",
    screen: "CreateScreen",
    url: 'https://images.unsplash.com/photo-1540535099023-85e352781693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' //'../Pics/create.jpeg'
},
{
    id: 456,
    title: "Search",
    screen: "GeoMapScreen",
    url: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhcmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'//'../Pics/search.jpeg'
}
]
const NavOptions = () => {
  const navigation = useNavigation()  
  return (
    
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return(
            <TouchableOpacity onPress={()=> navigation.navigate(item.screen)} style={tw`p-2 pl-4 pb-8 pt-4 bg-gray-200 m-2 w-40 content-center`}>
                <View>
                    <Image 
                        style={{width: 120, height: 120, resizeMode: 'contain'}}
                        source={{uri: item.url}}    
                    />
                    <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
                    <Icon name="arrowright" color="white" type="antdesign" style={tw`p-2 bg-black rounded-full w-10 mt-4`} />
                </View>
            </TouchableOpacity>)
        }}

    />
  );
};

export default NavOptions;

