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

  state = {
    DateTimePicker_2: new Date(""),
    TextInput_5: "",
    TextInput_6: "",
    CheckBox_8: true,
    CheckBox_9: true
  }

  render = () => (
    <View>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_2}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_2: selectedDate })
        }
      />
      <Text style={styles.Text_3}>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        style={styles.TextInput_6}
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <Icon name="object-group" style={styles.Icon_7} />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_8}
        onPress={nextChecked => this.setState({ CheckBox_8: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_9}
        onPress={nextChecked => this.setState({ CheckBox_9: nextChecked })}
      />
      <Text style={styles.Text_10}>Sample text content</Text>
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
  TextInput_6: {},
  View_1: {},
  DateTimePicker_2: {},
  Text_3: {},
  Button_4: {},
  TextInput_5: {},
  TextInput_6: { height: 100 },
  Icon_7: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 20,
    color: "#1831af",
    backgroundColor: "#dce87d",
    textDecorationLine: "overline",
    textTransform: "uppercase",
    lineHeight: 26
  },

  CheckBox_8: {},
  CheckBox_9: {},
  View_1: {},
  DateTimePicker_2: {},
  Text_3: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    textAlign: "center"
  },
  Button_4: {},
  TextInput_5: { textAlign: "center" },
  TextInput_6: { height: 100, textAlign: "right" },
  Icon_7: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderWidth: 3,
    borderRadius: 20,
    color: "#1831af",
    backgroundColor: "#dce87d",
    textDecorationLine: "overline",
    textTransform: "uppercase",
    lineHeight: 26
  },
  CheckBox_8: {},
  CheckBox_9: {},
  Text_10: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    textAlign: "center"
  }
})
