import { createMuiTheme } from '@material-ui/core/styles';

import { BracketColors } from './Bracket';

const BracketTheme = createMuiTheme({
  palette: {
    primary: {
      main: BracketColors.Primary,
    },
    text: {
      primary: BracketColors.Text,
      secondary: BracketColors.SecondaryText,
    },
    background: {
      paper: BracketColors.Background,
    },
  },
});

export default BracketTheme;
