import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { COLORS } from '../utils/colors';
import { textScale } from '../utils/scaling';

interface Props {
  onPress?: () => void;
  label?: string;
  icon?: React.ReactNode;
}

const IconButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.7}
      onPress={props.onPress}>
      {props.icon}
      <Text style={styles.labelStyle}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: textScale(12)
  },
  labelStyle: {
    color: COLORS.white,
    fontSize: textScale(10),
    fontWeight: '700',
    lineHeight: textScale(11.93),
    marginTop: textScale(4),
  },
});
