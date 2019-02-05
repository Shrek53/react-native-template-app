import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button
} from "react-native";
import Swiper from "react-native-swiper";
import Theme from "../constants/Theme";

const renderPagination = (index = 0, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>
          {index + 1} of {total}
        </Text>
      </Text>
    </View>
  );
};

export default class RiddleDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    let riddle_group=this.props.navigation.getParam("riddle_group");
    let riddle_group_length=riddle_group.length;
    this.state = {
      riddle_group: riddle_group,
      riddle_group_pos: 0,
      riddle: riddle_group[0],
      riddle_group_length:riddle_group_length
    };
  }
  static navigationOptions = {
    header: null,
  };

  level_btn_clicked = ()=>{
    if (this.state.riddle_group_pos < this.state.riddle_group_length-1) {
    this.setState({
      riddle: this.state.riddle_group[this.state.riddle_group_pos + 1],
      riddle_group_pos: this.state.riddle_group_pos + 1
    });
    }
    else{
      this.props.navigation.navigate("RiddleLevelsStack");
    }
  };
  render() {
    console.log(this.state);
    return (
      <View style={styles.middle}>
        <View style={styles.question_block}>
          <Text style={styles.question}>{this.state.riddle.question}</Text>
        </View>
        <View style={styles.answers_block}>
          {this.state.riddle.options.map(item => (
            <View style={styles.answer_button_wrapper} key={item}>
              <Button
                title={item}
                style={styles.answer_button}
                onPress={this.level_btn_clicked}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  question_block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  question: {
    fontSize: 24
  },
  answers_block: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  answer_button_wrapper: {
    padding: 10
  },
  answer_button: {}
});
