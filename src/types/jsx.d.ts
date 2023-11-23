type WebComponentTagName =
    | 'wired-base'
    | 'wired-button'
    | 'wired-calendar'
    | 'wired-card'
    | 'wired-checkbox'
    | 'wired-combo'
    | 'wired-dialog'
    | 'wired-divider'
    | 'wired-elements'
    | 'wired-fab'
    | 'wired-icon-button'
    | 'wired-image'
    | 'wired-input'
    | 'wired-item'
    | 'wired-lib'
    | 'wired-link'
    | 'wired-listbox'
    | 'wired-progress'
    | 'wired-radio-group'
    | 'wired-radio'
    | 'wired-search-input'
    | 'wired-slider'
    | 'wired-spinner'
    | 'wired-tab'
    | 'wired-tabs'
    | 'wired-textarea'
    | 'wired-toggle'
    | 'wired-video'

type WebComponent = {
  [k in WebComponentTagName]: DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >
}

declare namespace JSX {
  interface IntrinsicElements extends WebComponent {}
}