import React from 'react';

import {View, Alert, TextInput, Text, TouchableOpacity} from 'react-native';

import styles from './Styles';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_Employee_ID: '',
      TextInput_Employee_Name: '',
      TextInput_Employee_Salary: '',
      TextInput_Employee_Age: '',
    };
  }

  componentDidMount() {
    // Received Employee Details Sent From Previous Activity and Set Into State.
    this.setState({
      TextInput_Employee_ID: this.props.navigation.state.params.ID,
      TextInput_Employee_Name: this.props.navigation.state.params.NAME,
      TextInput_Employee_Salary: this.props.navigation.state.params.SALARY,
      TextInput_Employee_Age: this.props.navigation.state.params.AGE,
    });
  }

  static navigationOptions = {
    title: 'Edit Employee Details',
  };

  UpdateEmployeeRecord = () => {
    fetch(
      'http://dummy.restapiexample.com/api/v1/update/' +
        this.state.TextInput_Employee_ID,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.TextInput_Employee_Name,

          salary: this.state.TextInput_Employee_Salary,

          age: this.state.TextInput_Employee_Age,
        }),
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status == 'success') {
          Alert.alert('Record succesfully updated');
        } else {
          Alert.alert('Something went wrong!');
        }
        // Showing response message coming from server updating records.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  DeleteEmployeeRecord = () => {
    fetch(
      'http://dummy.restapiexample.com/api/v1/delete/' +
        this.state.TextInput_Employee_ID,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status == 'success') {
          // Showing response message coming from server after inserting records.
          Alert.alert('Record successfully deleted');
        } else {
          Alert.alert('Something went wrong!');
        }
      })
      .catch((error) => {
        console.error(error);
      });

    this.props.navigation.navigate('First');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}>
          {' '}
          Edit Employee Details{' '}
        </Text>

        <TextInput
          placeholder="Employee Name"
          value={this.state.TextInput_Employee_Name}
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_Employee_Name: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          keyboardType="numeric"
          placeholder="Employee Salary"
          value={this.state.TextInput_Employee_Salary}
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_Employee_Salary: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          keyboardType="numeric"
          placeholder="Employee Age"
          value={this.state.TextInput_Employee_Age}
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_Employee_Age: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.UpdateEmployeeRecord}>
          <Text style={styles.TextStyle}> Update Employee Details </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.DeleteEmployeeRecord}>
          <Text style={styles.TextStyle}> Delete Employee Details </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Edit;
