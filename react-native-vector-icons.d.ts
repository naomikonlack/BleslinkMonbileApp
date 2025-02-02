declare module 'react-native-vector-icons/FontAwesome' {
  import { Icon } from 'react-native-vector-icons/Icon';
  const FontAwesome: typeof Icon;
  export default FontAwesome;
}

declare module 'react-native-vector-icons/Icon' {
  import { Component } from 'react';
  import { TextStyle, ViewStyle } from 'react-native';

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: TextStyle | ViewStyle;
  }

  export class Icon extends Component<IconProps> {}
}
