import React from 'react';

import {View, Alert, Text, FlatList, ActivityIndicator} from 'react-native';

import styles from './Styles';

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: {},
    };
  }

  static navigationOptions = {
    title: 'Employees',
  };

  componentDidMount() {
    return fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 'success') {
          this.setState(
            {
              data: json.data,
              isLoading: false,
            },
            function () {
              // In this block you can do something with new state.
            },
          );
        } else {
          Alert.alert('Something went wrong!');
        }
      })
      .catch((error) => console.error(error));
  }

  GetEmployeeIDFunction = (
    employee_id,
    employee_name,
    employee_salary,
    employee_age,
  ) => {
    this.props.navigation.navigate('Third', {
      ID: employee_id,
      NAME: employee_name,
      SALARY: employee_salary,
      AGE: employee_age,
    });
  };

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatListContainer}
          data={this.state.data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View style={styles.itemView}>
              <Text
                style={styles.itemText}
                onPress={this.GetEmployeeIDFunction.bind(
                  this,
                  item.id,
                  item.employee_name,
                  item.employee_salary,
                  item.employee_age,
                )}>
                ID: {item.id} {'\n'}
                Name: {item.employee_name}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Show;
