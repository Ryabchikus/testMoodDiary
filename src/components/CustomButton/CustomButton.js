import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

type Props = {
  buttonLabel?: String,
  containerStyle?: Object,
  buttonLabelStyle?: Object,
  disabled?: boolean,
  disabledContainerStyle?: Object,
  disabledButtonLabelStyle?: Object,
  onPress: Function,
};

export default function CustomButton(props: Props) {
  const {
    buttonLabel,
    containerStyle = {},
    buttonLabelStyle = null,
    disabled = false,
    disabledContainerStyle = {},
    disabledButtonLabelStyle = {},
    onPress = () => null,
  } = props;

  if (!buttonLabel) {
    return null;
  }

  return (
    <TouchableOpacity
      style={[
        styles.containerStyle,
        containerStyle,
        disabled ? styles.disabledContainerStyle : null,
        disabled ? disabledContainerStyle : null,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          buttonLabelStyle,
          disabled ? disabledButtonLabelStyle : null,
        ]}
        numberOfLines={1}>
        {buttonLabel}
      </Text>
    </TouchableOpacity>
  );
}
