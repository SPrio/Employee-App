import React from 'react';

import {View, Alert, TextInput, Text, TouchableOpacity} from 'react-native';

import styles from './Styles';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.state = {
      TextInput_Employee_Name: '',
      TextInput_Employee_Salary: '',
      TextInput_Employee_Age: '',
    };
  }

  InsertEmployee = () => {
    fetch('http://dummy.restapiexample.com/api/v1/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.TextInput_Employee_Name,

        salary: this.state.TextInput_Employee_Salary,

        age: this.state.TextInput_Employee_Age,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        if (responseJson.status == 'success') {
          Alert.alert('Record is succesfully Submitted');
        } else {
          Alert.alert('Something went wrong!');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  GoTo_Show_EmployeeList_Activity_Function = () => {
    this.props.navigation.navigate('Second');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}>
          {' '}
          Employee Submit Form{' '}
        </Text>

        <TextInput
          placeholder="Enter Employee Name"
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_Employee_Name: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          keyboardType="numeric"
          placeholder="Enter Employee Salary"
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_Employee_Salary: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          keyboardType="numeric"
          placeholder="Enter Employee Age"
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_Employee_Age: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertEmployee}>
          <Text style={styles.TextStyle}> Insert Employee Record </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Show_EmployeeList_Activity_Function}>
          <Text style={styles.TextStyle}> Show All Employee Details </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
