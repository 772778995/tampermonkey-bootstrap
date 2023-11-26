export default (jqEl: JQuery<HTMLElement>, val?: string) => {
  if (val) jqEl.val(val)
  const evt = new Event('change')
  // @ts-ignore
  evt.persist = () => {}
  // @ts-ignore
  evt.isPropagationStopped = () => {}
  ;[...jqEl].forEach((ele) => {
    ele.dispatchEvent(evt)

    const handleChangeList: ((evt: Event) => any)[] = []

    // 如果是 react
    const reactProp = Object.keys(ele).find((p) =>
      p.startsWith('__reactEventHandlers')
    )
    if (reactProp) {
      const reactHandleChange = ele[reactProp].onChange
      handleChangeList.push(reactHandleChange)
    }
    // 如果是 Vue2 ElementUI
    else {
      let leftNum = 5
      let el = ele
      while (leftNum) {
        leftNum--
        const vm = (el as any).__vue__ || {}
        Object.keys(vm)
          .filter((key) => key.startsWith('handle'))
          .forEach((key) => {
            const handle = vm[key]
            if (handle) handleChangeList.push(handle)
          })
        el = el.parentNode as HTMLElement
      }
    }

    handleChangeList.forEach((handle) => handle(evt))
  })
  return jqEl
}
