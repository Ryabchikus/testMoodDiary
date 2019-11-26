import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Interface} from '../../constants/graphics';

import styles from './styles';

type Props = {
  title: string,
  withBackButton?: boolean,
  handleBackButton?: Function,
  containerStyle?: Object,
  titleStyle?: Object,
};

export default function Header(props: Props) {
  const {
    withBackButton = false,
    title,
    handleBackButton,
    containerStyle = {},
    titleStyle = {},
  } = props;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <View style={styles.buttonsWrapper}>
        {withBackButton ? (
          <TouchableOpacity
            onPress={handleBackButton}
            style={styles.buttonContainer}>
            <Image
              source={Interface.BACK}
              style={styles.buttonIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.titleContainer}>
        {title ? (
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        ) : null}
      </View>
      <View style={styles.buttonsWrapper} />
    </View>
  );
}
