import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button ,StatusBar,Platform,SafeAreaView,TouchableOpacity} from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { height: 2,
                   weight: 80,
                   bmi:0,
                   text:"underweight"
                 };
  }

  
  handleclick = () => {
    const height = this.state.height
    const weight = this.state.weight
    const calculated_bmi = weight/(height*height)*10000
    this.setState({bmi:calculated_bmi})
    
  }



  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.safearea}/>
        <Text style={styles.paragraph}>
          BMI Calculator
        </Text>
       
          <TextInput 
                     placeholder="Please put in your height in centimeters"
                     style={styles.textinput}
                     onChangeText={(new_height) => this.setState({height:new_height})}
                     />
          <TextInput
                     placeholder="Please put in your weight in kg"
                     style={styles.textinput}
                     onChangeText={(new_weight) => this.setState({weight:new_weight})}
                     />
                     
          <Text style={styles.paragraph}>
            {this.state.bmi>=25?"overweight"+". "+this.state.bmi:"underweight"+". "+this.state.bmi}
          </Text>
          
          <Button onPress={this.handleclick} title="Calculate BMI"/>
          

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
   
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  safearea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
});
