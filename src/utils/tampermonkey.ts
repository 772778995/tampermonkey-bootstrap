/* eslint-disable */

declare var unsafeWindow: Window
let win: Window
if (typeof unsafeWindow !== 'undefined') {
  win = unsafeWindow
} else {
  win = window
}
export { win }
