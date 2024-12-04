import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../utils/colors';
import {moderateScale, textScale, verticalScale} from '../utils/scaling';
import {imagePath} from '../utils/imagePath';
import {IcMenu, IcMusic} from '../assets';

interface Props {
  onPressMenu?: () => void;
};

const CommonPostHeader: React.FC<Props> = (props) => {
  const {
    onPressMenu
  } = props;

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileNameView}>
        <Image
          style={styles.profileImage}
          resizeMode="cover"
          source={imagePath.profile_img}
        />
        <View style={styles.flex}>
          <Text numberOfLines={1} style={styles.profileName}>
            {'Nitya'}
          </Text>
          <View style={styles.musicContainer}>
            <IcMusic height={textScale(12)} width={textScale(12)} />
            <Text numberOfLines={1} style={styles.musicText}>
              {'Karan Aujla . Haan Haan Haige aa'}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPressMenu}>
        <IcMenu width={textScale(15)} height={textScale(3)}/>
      </TouchableOpacity>
    </View>
  );
};

export default CommonPostHeader;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
  },
  profileNameView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
    flex: 1,
  },
  profileImage: {
    height: textScale(30),
    width: textScale(30),
    borderRadius: textScale(20),
  },
  profileName: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: textScale(12),
    lineHeight: textScale(14.32),
  },
  musicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
    flex: 1,
  },
  musicText: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: textScale(10),
    lineHeight: textScale(11.93),
    flexShrink: 1,
  },
});
