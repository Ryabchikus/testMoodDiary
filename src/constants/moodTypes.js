import {Icons} from './graphics';
import {Base, Accents} from './colors';

export const MOOD_TYPES_ARR = [
  {
    key: 'happy',
    icon: Icons.HAPPY,
  },
  {
    key: 'calm',
    icon: Icons.CALM,
  },
  {
    key: 'swings',
    icon: Icons.SWINGS,
  },
  {
    key: 'sad',
    icon: Icons.SAD,
  },
  {
    key: 'depressed',
    icon: Icons.DEPRESSED,
  },
];

export const SUBMOOD_TYPES_ARR = [
  {
    subMoodKey: 'anxiety',
    intensity: 0,
  },
  {
    subMoodKey: 'stress',
    intensity: 0,
  },
];

export const INTENSITY_NAMES = [
  'missing',
  'light',
  'medium',
  'heavy',
  'unbearable',
];

export const INTENSITY_COLORS = [
  Base.SECONDARY,
  Accents.YELLOW_LIGHT,
  Accents.ORANGE_LIGHT,
  Accents.ORANGE_DARK,
  Accents.RED,
];
