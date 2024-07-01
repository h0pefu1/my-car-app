import { View, Text } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'

const possibleTag = [{name:"daily"},{name:"weekend"}]
import RNPickerSelect from 'react-native-picker-select';
const AddNewCar = () => {
  return (

    <View style={{flex:1,alignContent:"center",padding:12,gap:4}}>
  
      <Card>

   <Card.Cover source={{ uri: 'https://picsum.photos/700' }}/>

      </Card>
   <View>
<Card>
  <Card.Content>
    <View>
      <TextInput
      label={"Car name"}
      mode='outlined'
      style={{borderRadius:20}}
      outlineStyle={{borderRadius:20}}
      />
      <TextInput
      label={"Odometr"}
      mode='outlined'
      style={{borderRadius:20}}
      outlineStyle={{borderRadius:20}}
      />
        <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
    />
    </View>
  </Card.Content>
</Card>
   </View>
   <Card>
    <Button>
      Add additional Info
    </Button>
   </Card>
   <View>
    <Text>
      Add additional info(Motor Info,)
    </Text>
    <Text>
      Tags (Favoirete,Weekend,Daily,Project)
    </Text>
    <Text>
      Last oil change
    </Text>
   </View>
    </View>
  )
}

export default AddNewCar