import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  TextLayoutEventData,
  ImageBackground,
	Image,
} from 'react-native';
import CommonPostHeader from './CommonPostHeader';
import {COLORS} from '../utils/colors';
import {
  height,
  moderateScale,
  textScale,
  verticalScale,
  width,
} from '../utils/scaling';
import {imagePath} from '../utils/imagePath';
import IconButton from './IconButton';
import {IcComment, IcLike} from '../assets';
import LinearGradient from 'react-native-linear-gradient';

const dummy = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
};

const Stories = [
  {isActive: true},
  {isActive: false},
  {isActive: false},
  {isActive: false},
];

const Post = () => {
  const [showFullText, setShowFullText] = React.useState<boolean>(false);
  const [lengthMore, setLengthMore] = React.useState<boolean>(false);

  const onTextLayout = React.useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      setLengthMore(e.nativeEvent.lines.length > 2);
    },
    [],
  );

  const toggleNumberOfLines = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.postContainer}>
      <CommonPostHeader />
      <View style={styles.descriptionCotainer}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={showFullText ? 2 : undefined}
          style={styles.textDescription}>
          {dummy.description}
          {lengthMore ? (
            <Text onPress={toggleNumberOfLines} style={{color: COLORS.white}}>
              {showFullText ? ' ...Read less' : ' ...Read more'}
            </Text>
          ) : null}
        </Text>
      </View>
      <ImageBackground
        source={imagePath.ex_image}
        borderRadius={textScale(12)}
        style={styles.imageStyle}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.30)', 'rgba(0,0,0,0.40)']}
          style={styles.linearGradient}>
          <View style={styles.storyBand}>
            {Stories.map((item, index) => {
              return (
                <View
                  key={index + 1}
                  style={[
                    styles.storyLine,
                    {
                      backgroundColor: item.isActive
                        ? COLORS.white
                        : COLORS.storyUnseen,
                      marginLeft: index == 0 ? 0 : moderateScale(4),
                    },
                  ]}
                />
              );
            })}
          </View>
          <View style={styles.cardFooter}>
            <IconButton label={'Like'} icon={<IcLike />} />
            <IconButton label={'Comments'} icon={<IcComment />} />
          </View>
        </LinearGradient>
      </ImageBackground>
			<View style={styles.likeView}>
				<View style={styles.row}>
					<Image style={styles.likeImage} source={imagePath.dummyLike} />
					<Image style={[styles.likeImage, styles.overLap]} source={imagePath.dummyLike} />
				</View>
				<Text style={styles.textLike}><Text style={styles.textLikeRed}>Liked by</Text> ranita_pawar <Text style={styles.textLikeRed}>and</Text> 6,418 others.</Text>
			</View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    width: width,
  },
  descriptionCotainer: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(12),
  },
  textDescription: {
    color: COLORS.description,
    fontSize: textScale(12),
    lineHeight: textScale(14.32),
    fontWeight: '700',
  },
  imageStyle: {
    width: width,
    height: height / 1.5,
    backgroundColor: COLORS.imageBackground,
    borderRadius: textScale(12),
    justifyContent: 'space-between',
  },
  storyLine: {
    backgroundColor: COLORS.white,
    height: textScale(3),
    flex: 1,
    borderRadius: moderateScale(8),
  },
  storyBand: {
    flexDirection: 'row',
    flex: 1,
    height: textScale(3),
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(8),
  },
  cardFooter: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: moderateScale(16),
  },
  linearGradient: {
    flex: 1,
    borderRadius: textScale(12),
    justifyContent: 'space-between',
  },
	row: {
		flexDirection: 'row',
	},
	likeView: {
		flexDirection: 'row',
		marginHorizontal: moderateScale(20),
		marginVertical: verticalScale(8),
		gap: textScale(20),
		alignItems: 'center',
	},
	likeImage: {
		height: textScale(20),
		width: textScale(20),
		borderColor: COLORS.white,
		borderWidth: textScale(1),
		borderRadius: textScale(12),
	},
	overLap: {
		position: 'absolute',
		marginLeft: textScale(12),
	},
	textLike: {
		fontSize: textScale(12),
		color: COLORS.white,
		lineHeight: textScale(14.32),
		fontWeight: '700',
	},
	textLikeRed: {
		color: COLORS.redText,
	},
});
