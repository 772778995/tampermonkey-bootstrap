export default (jqEl: JQuery<HTMLElement>, val?: string) => {
  if (val) jqEl.val(val)
  const evt = new Event('change')
  // @ts-ignore
  evt.persist = () => {}
  // @ts-ignore
  evt.isPropagationStopped = () => {}
  const [ele] = jqEl
  ele.dispatchEvent(evt)
  const prop = Object.keys(ele).find((p) =>
    p.startsWith('__reactEventHandlers')
  )
  if (prop) ele[prop!].onChange(evt)
  return jqEl
}
