import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonPropsInterface} from './props.interface';
import {Style} from './style';

const styles = StyleSheet.create(Style);

export default function ButtonNativeComponent({
  text,
  onClick,
  color,
  textColor,
}: ButtonPropsInterface) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, !!color && {backgroundColor: color}]}
        onPress={onClick}
        activeOpacity={0.8}>
        <Text style={[styles.buttonText, !!textColor && {color: textColor}]}>
          NATIVE {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
