import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/Colors";

const createStyles = () => 
StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    text: {
        fontSize: RFValue(20),
        fontWeight: '300',
        color: Colors.BLACK
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        width: RFValue(200),
        marginBottom: RFValue(20)
    }
});

export default createStyles;    