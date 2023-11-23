import { AttributifyNames } from '../../node_modules/windicss/types/jsx'

type Prefix = '_'

declare module 'react' {
  interface HTMLAttributes
    extends Partial<Record<AttributifyNames<Prefix>, string>> {}

  interface Attributes
    extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}
