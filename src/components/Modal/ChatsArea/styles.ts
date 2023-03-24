import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 14,
  },
  chat: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  text: {
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONTS.FAMILY.PRIMARY.REGULAR,
    fontSize: THEME.FONTS.SIZE.MD,
    paddingHorizontal: 16,
    paddingBottom: 8,
  }
});