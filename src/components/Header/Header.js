import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Interface} from '../../constants/graphics';

import styles from './styles';

type Props = {
  children: Object,
  title: string,
  withBackButton: boolean,
  handleBackButton?: Function,
};

export default function Header(props: Props) {
  const {withBackButton, title, handleBackButton} = props;

  return (
    <View style={styles.container}>
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
      <View style={styles.titles}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
      </View>
      <View style={styles.buttonsWrapper} />
    </View>
  );
}
