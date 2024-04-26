import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#eeeeee'},
  container: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  subText: {
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  topView: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  bottomView: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  dropdown: {
    marginTop: 15,
    marginBottom: 20,
    width: 350,
    height: 60,
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  dropdownInner: {
    //width: '100%',
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  inputText: {
    fontSize: 15,
  },
  symbol: {
    fontSize: 15,
  },

  //modal
  headerStyle: {
    height: '80%',
    marginTop: 'auto',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#ECEC',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 2,
  },
  outerModal: {
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  closeView: {
    alignSelf: 'flex-end',
    paddingBottom: 20,
    padding: 20,
    alignContent: 'center',
  },
  closeText: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '600',
    color: 'blue',
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: '#000',
    // borderBottomWidth: 0.2,
  },
  listText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 10,
  },
  //modal
  inputView: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 350,
    height: 60,
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 22,
    flexDirection: 'row',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginLeft: 15,
    width: 300,
    height: 60,
  },
  errorText: {
    color: 'red',
    paddingVertical: 3,
  },
});
