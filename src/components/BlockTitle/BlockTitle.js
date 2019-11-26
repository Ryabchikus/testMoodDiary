// @flow

import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

type Props = {
  title: string,
  subTitle?: string,
  containerStyle?: Object,
  titleStyle?: Object,
  subTitleStyle: Object,
};

export default function BlockTitle(props: Props) {
  const {
    title = null,
    subTitle = null,
    containerStyle,
    titleStyle,
    subTitleStyle,
  } = props;

  if (!title) {
    return null;
  }

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      <Text style={[styles.subTitleStyle, subTitleStyle]}>{subTitle}</Text>
    </View>
  );
}
