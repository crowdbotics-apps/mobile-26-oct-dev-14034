import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { DateTimePicker_2: new Date(""), TextInput_5: "", TextInput_6: "" }

  render = () => (
    <View>
      <DateTimePicker
        date={this.state.DateTimePicker_2}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_2: selectedDate })
        }
      />
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  DateTimePicker_2: {},
  View_1: {},
  DateTimePicker_2: {},
  Text_3: {},
  Button_4: {},
  TextInput_5: {},
  TextInput_6: {}
})
