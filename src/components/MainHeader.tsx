import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale, textScale, verticalScale} from '../utils/scaling';
import {IcNotifications} from '../assets';
import {COLORS} from '../utils/colors';
import {imagePath} from '../utils/imagePath';

interface Props {
  label: string;
  onPressNotifications?: () => void;
  onPressProfile?: () => void;
};

const MainHeader: React.FC<Props> = (props) => {
  const {
    label,
    onPressNotifications,
    onPressProfile,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{label}</Text>
      <View style={styles.notificationsProfile}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressNotifications}>
          <IcNotifications height={textScale(20)} width={textScale(16)} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressProfile}>
          <Image style={styles.likeImage} source={imagePath.dummyLike} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(12),
  },
  heading: {
    fontWeight: '700',
    fontSize: textScale(20),
    color: COLORS.white,
  },
  notificationsProfile: {
    gap: textScale(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeImage: {
    height: textScale(20),
    width: textScale(20),
    borderColor: COLORS.white,
    borderWidth: textScale(1),
    borderRadius: textScale(12),
  },
});
