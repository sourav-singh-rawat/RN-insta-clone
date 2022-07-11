import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';

export const ProfileAvatar = ({size, source, title}) => {
  //TODO: add bg-color according to title
  return (
    <Avatar
      rounded
      size={size}
      source={source}
      title={title}
      containerStyle={{backgroundColor: 'grey'}}
    />
  );
};

export const ProfileAvatarHighlighted = ({
  size,
  source,
  title,
  padding = 2,
  borderWidth = 2,
  borderColor = 'black',
}) => {
  return (
    <View
      style={{
        borderRadius: size / 1.5,
        padding: padding,
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}>
      <ProfileAvatar size={size} source={source} title={title} />
    </View>
  );
};

const styles = StyleSheet.create({});
