import { css } from 'styled-components'

const sizes = {
  desktopXL: 1440,
  desktop: 1000,
  tablet: 768,
  phablet: 600,
  phoneXL: 480,
  phone: 400,
  tinyPhone: 330,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

// This creates a media template for each of the sizes, so you can do this in your components:

// const Container = styled.div`
//   color: #333;
//   ${media.desktop`padding: 0 18px;`}
//   ${media.tablet`padding: 0 18px;`}
//   ${media.phablet`padding: 0 10px;`}
//   ${media.phone`padding: 0 3px;`}
// `

export default media
