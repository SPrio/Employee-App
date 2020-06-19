import {StyleSheet, Dimensions, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  flatListContainer: {marginTop: 20, paddingEnd: 10},
  itemView: {justifyContent: 'center', marginBottom: 10},
  itemText: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    width: Dimensions.get('window').width,
  },
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  MainContainer_For_Show_EmployeeList_Activity: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    marginLeft: 5,
    marginRight: 5,
  },

  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 5,
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#cc600e',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
