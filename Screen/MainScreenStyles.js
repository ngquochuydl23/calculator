import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  screen_layout: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  border: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 7,
    justifyContent: 'flex-end',
  },
  display: {
    textAlign: 'left',
    fontWeight: '100',
  },
  result: {
    textAlign: 'right',
    fontSize: RFPercentage(4),
    fontWeight: '100',
  },
  mode: {
    color: 'green',
    fontSize: RFPercentage(2.3),
  }
});

export default styles;