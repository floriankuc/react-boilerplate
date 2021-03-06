import { css } from 'styled-components'

import MontserratBlack from '../fonts/Montserrat/Montserrat-Black.ttf'
import MontserratBold from '../fonts/Montserrat/Montserrat-Bold.ttf'
import MontserratExtraBold from '../fonts/Montserrat/Montserrat-ExtraBold.ttf'
import MontserratExtraLight from '../fonts/Montserrat/Montserrat-ExtraLight.ttf'
import MontserratLight from '../fonts/Montserrat/Montserrat-Light.ttf'
import MontserratMedium from '../fonts/Montserrat/Montserrat-Medium.ttf'
import MontserratRegular from '../fonts/Montserrat/Montserrat-Regular.ttf'
import MontserratSemiBold from '../fonts/Montserrat/Montserrat-SemiBold.ttf'
import MontserratThin from '../fonts/Montserrat/Montserrat-Thin.ttf'

const FontFaces = css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBlack});
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraBold});
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBold});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraLight});
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThin});
    font-weight: 100;
    font-style: normal;
  }
`

export default FontFaces
