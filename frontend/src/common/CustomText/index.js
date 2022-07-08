import React from 'react';
import {Text} from "react-native";

const CustomText = ({styles, children, numberOfLines, adjustsFontSizeToFit}) => {
    return (
        <Text
            style={styles}
            numberOfLines={numberOfLines}
            adjustsFontSizeToFit={adjustsFontSizeToFit}
        >
            {children}
        </Text>
    );
};

export default CustomText;
