import { Platform } from 'react-native';
import colors from './colors';

const stackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
};

export default stackNavOptions;
