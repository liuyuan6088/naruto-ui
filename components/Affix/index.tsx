import * as React from 'react'
import { IAffixProps } from './type'
import cx from 'classnames'
import { primaryName } from '../utils/constant'
import { throttle } from 'lodash'

const { useRef, useState, useEffect } = React
const prefixCls = `${primaryName}-affix`

type ScrollElement = Window | HTMLElement

interface Payload {
  props: IAffixProps
  placeholderRef: any
  wrapperRef: any
  scrollElm: ScrollElement
  fixed: boolean
  setFixed: (a: boolean) => void
  setPositionStyle: (a: object) => void
}

const handleScroll = ({
  props,
  placeholderRef,
  wrapperRef,
  scrollElm,
  fixed,
  setFixed,
  setPositionStyle
}: Payload) => {
  const { offsetTop, offsetBottom, onChange } = props
  const rect = placeholderRef.current.getBoundingClientRect()
  let { top, bottom } = rect
  const style: React.CSSProperties = {}
  let containerTop = 0 // 容器距离视口上侧的距离
  let containerBottom = 0 // 容器距离视口下侧的距离

  if (scrollElm !== window) {
    const containerRect = (scrollElm as HTMLElement).getBoundingClientRect()
    containerTop = containerRect.top
    containerBottom = containerRect.bottom

    top = top - containerTop // 距离容器顶部的距离
    bottom = containerBottom - bottom // 距离容器底部的距离
  } else {
    bottom = window.innerHeight - bottom
  }

  if (top <= offsetTop || bottom <= offsetBottom) {
    if (!fixed) {
      style.position = 'fixed'
      style.top = offsetTop !== undefined ? offsetTop + containerTop : null
      style.bottom =
        offsetBottom !== undefined
          ? scrollElm !== window
            ? window.innerHeight - (containerBottom - offsetBottom)
            : bottom
          : null

      // 在子节点移开父节点后保持原来占位
      const { width, height } = wrapperRef.current.getBoundingClientRect()
      placeholderRef.current.style.height = `${height}px`
      placeholderRef.current.style.width = `${width}px`
      if (onChange) {
        onChange(true)
      }
      setFixed(true)
      setPositionStyle(style)
    }
  } else {
    if (fixed) {
      style.position = 'relative'
      if (onChange) {
        onChange(false)
      }
      setFixed(false)
      setPositionStyle(style)
    }
  }
}

const Affix: React.FC<IAffixProps> = props => {
  const { target, offsetTop, offsetBottom, style, className, children } = props
  const [positionStyle, setPositionStyle] = useState<object>({})
  const [fixed, setFixed] = useState<boolean>(false)

  const placeholderRef = useRef(null)
  const wrapperRef = useRef(null)

  let scrollElm: ScrollElement = window

  const payload: Payload = {
    props,
    placeholderRef,
    wrapperRef,
    scrollElm,
    fixed,
    setFixed,
    setPositionStyle
  }

  useEffect(() => {
    if (target) {
      scrollElm = target()
      payload.scrollElm = target()
    }

    const scroll = throttle(() => handleScroll(payload), 20)

    handleScroll(payload)
    scrollElm.addEventListener('scroll', scroll)

    return () => {
      scrollElm.removeEventListener('scroll', scroll)
    }
  }, [offsetTop, offsetBottom, fixed])

  const classes = cx(prefixCls, className)

  return (
    <div ref={placeholderRef} style={style} className={classes}>
      <div ref={wrapperRef} style={positionStyle}>
        {children}
      </div>
    </div>
  )
}

export default Affix
