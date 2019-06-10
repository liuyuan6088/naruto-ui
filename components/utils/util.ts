/** 判断是否有滚动条 */
export const hasScrollBar = () => {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
}

/** 获取滚动条的宽度 */
export const getScrollBarWidth = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText =
    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
  document.body.appendChild(scrollDiv)
  const scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollBarWidth
}