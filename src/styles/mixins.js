import { css } from 'styled-components/macro'

const mixins = {
  flexColumns: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,
}

export default mixins
