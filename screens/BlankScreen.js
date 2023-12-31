import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const BlankScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return <ScreenContainer hasSafeArea={false} scrollable={false} />;
};

export default withTheme(BlankScreen);
