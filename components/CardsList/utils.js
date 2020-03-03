export const getItemAnimatedProperties = (index, yOffset, SCREEN_HEIGHT) => {
  const CURRENT_SCREEN_HEIGHT = index * SCREEN_HEIGHT;
  const NEXT_SCREEN_HEIGHT = (index + 1) * SCREEN_HEIGHT;
  const AFTER_NEXT_SCREEN_HEIGHT = (index + 2) * SCREEN_HEIGHT;
  const PREV_SCREEN_HEIGHT = (index - 1) * SCREEN_HEIGHT;
  const BEFORE_PREV_SCREEN_HEIGHT = (index - 2) * SCREEN_HEIGHT;
  const HALF_SCREEN_HEIGHT = SCREEN_HEIGHT / 2;

  const paddingTop = yOffset.interpolate({
    inputRange: [
      CURRENT_SCREEN_HEIGHT,
      NEXT_SCREEN_HEIGHT,
      AFTER_NEXT_SCREEN_HEIGHT
    ],
    outputRange: [0, SCREEN_HEIGHT - 90, 0]
  });

  const paddingBottom = yOffset.interpolate({
    inputRange: [
      BEFORE_PREV_SCREEN_HEIGHT,
      PREV_SCREEN_HEIGHT,
      CURRENT_SCREEN_HEIGHT
    ],
    outputRange: [0, SCREEN_HEIGHT - 90, 0]
  });

  const fullTextOpacity = yOffset.interpolate({
    inputRange: [
      CURRENT_SCREEN_HEIGHT - HALF_SCREEN_HEIGHT,
      CURRENT_SCREEN_HEIGHT,
      CURRENT_SCREEN_HEIGHT + HALF_SCREEN_HEIGHT
    ],
    outputRange: [0, 1, 0]
  });

  const shortTextOpcaity = yOffset.interpolate({
    inputRange: [
      NEXT_SCREEN_HEIGHT - HALF_SCREEN_HEIGHT,
      NEXT_SCREEN_HEIGHT,
      NEXT_SCREEN_HEIGHT + HALF_SCREEN_HEIGHT
    ],
    outputRange: [0, 1, 0]
  });

  const upperTextOpcaity = yOffset.interpolate({
    inputRange: [
      PREV_SCREEN_HEIGHT - HALF_SCREEN_HEIGHT,
      PREV_SCREEN_HEIGHT,
      PREV_SCREEN_HEIGHT + HALF_SCREEN_HEIGHT
    ],
    outputRange: [0, 1, 0]
  });

  return {
    paddingTop,
    paddingBottom,
    fullTextOpacity,
    shortTextOpcaity,
    upperTextOpcaity
  };
};
