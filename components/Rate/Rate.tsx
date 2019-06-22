import * as React from 'react'
import cx from 'classnames'
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import { primaryName } from '../utils/constant'
import { IRateProps } from './type'
import './style/index.less'

const { useState, useCallback, useEffect, useRef } = React

let refList = []

const defaultProps = {
  prefixCls: `${primaryName}-rate`,
  count: 5,
  character: <Icon type="star-fill" />,
  defaultValue: 0,
  allowClear: true,
  allowHalf: false,
  disabled: false
}

const isOverHalf = (node: any, e: any, index: number) => {
  const nodeWidth = node.getBoundingClientRect().width
  const nodeLeft = node.getBoundingClientRect().left
  const isOverHalf = (e.clientX - nodeLeft) / nodeWidth >= 0.5
  const currentIndex = isOverHalf ? index : index - 0.5
  return {
    currentIndex,
    isOverHalf
  }
}

const Rate: React.FC<IRateProps> = props => {
  const {
    prefixCls,
    count,
    defaultValue,
    value,
    character,
    wrapperClassName,
    onChange,
    onHoverChange,
    allowClear,
    disabled,
    allowHalf,
    tooltips,
    activeColor,
    disabledColor,
    className,
    style
  } = props

  refList = Array.from({ length: count }, () => useRef(null))
  const [activeIndex, setActiveIndex] = useState<number>(value || defaultValue)
  const [temporaryIndex, setTemporaryIndex] = useState<number>(value || defaultValue)

  useEffect(() => {
    if (value) {
      setActiveIndex(value)
      setTemporaryIndex(value)
    }
  }, [value])

  const wrapperClasses = cx(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled
    },
    wrapperClassName
  )

  const getStarClasses = useCallback(
    (index: number) => {
      const isZero = allowHalf ? temporaryIndex + 0.5 < index : temporaryIndex < index
      const isActive = temporaryIndex === index || temporaryIndex + 0.5 === index
      const isFull = temporaryIndex > index
      const isHalf = allowHalf && temporaryIndex + 0.5 === index
      const classesColor = {
        cx: cx(
          `${prefixCls}-star`,
          {
            [`${prefixCls}-star-zero`]: isZero,
            [`${prefixCls}-star-active`]: isActive,
            [`${prefixCls}-star-full`]: isFull,
            [`${prefixCls}-star-half`]: isHalf
          },
          className
        ),
        type: '',
        color: []
      }
      if (isZero) {
        classesColor.type = 'isZero'
        classesColor.color = [disabledColor]
      }
      if (isActive) {
        classesColor.type = 'isActive'
        classesColor.color = [activeColor]
      }
      if (isFull) {
        classesColor.type = 'isFull'
        classesColor.color = [activeColor]
      }
      if (isHalf) {
        classesColor.type = 'isHalf'
        classesColor.color = [activeColor, disabledColor]
      }
      return classesColor
    },
    [temporaryIndex, activeIndex, value]
  )

  const toggle = (index: number) => {
    if (disabled) {
      return
    }
    setTemporaryIndex(index)
  }

  const handleStarMouseEnter = (index: number) => (e: any) => {
    if (disabled) {
      return
    }
    const node = refList[index - 1].current
    const targetIndex = allowHalf ? isOverHalf(node, e, index).currentIndex : index
    toggle(targetIndex)
    if (onHoverChange) {
      onHoverChange(targetIndex)
    }
  }

  const handleStarMouseMove = (index: number) => (e: any) => {
    // e.persist()
    if (disabled || !allowHalf) {
      return
    }
    if (e && refList[index - 1]) {
      const node = refList[index - 1].current
      const currentIndex = isOverHalf(node, e, index).currentIndex
      if (currentIndex !== temporaryIndex) {
        toggle(currentIndex)
      }
    }
  }

  const handleStarClick = (index: number) => (e: any) => {
    if (disabled) {
      return
    }
    const node = refList[index - 1].current
    const targetIndex = allowHalf ? isOverHalf(node, e, index).currentIndex : index
    if (onChange) {
      onChange(targetIndex)
    }
    if (!value) {
      if (allowClear && targetIndex === activeIndex) {
        setActiveIndex(0)
        toggle(0)
        return
      }
      setActiveIndex(targetIndex)
    }
    toggle(targetIndex)
  }

  const handleMouseLeave = () => {
    toggle(activeIndex)
  }

  const renderStar = () => {
    const starNode = (color: any[]) => {
      const colorStyle1 = color[0] ? { color: color[0] } : {}
      const colorStyle2 = color[1] ? { color: color[1] } : {}
      return (
        <React.Fragment>
          <div style={colorStyle1} className={`${prefixCls}-star-first`}>
            {character}
          </div>
          <div
            style={color.length === 2 ? colorStyle2 : colorStyle1}
            className={`${prefixCls}-star-second`}
          >
            {character}
          </div>
        </React.Fragment>
      )
    }
    return Array.from({ length: count }, (_, k) => {
      const classesColor = getStarClasses(k + 1)
      const node = starNode(classesColor.color)
      return (
        <li
          ref={refList[k]}
          className={classesColor.cx}
          key={k}
          style={style}
          onMouseEnter={handleStarMouseEnter(k + 1)}
          onMouseMove={handleStarMouseMove(k + 1)}
          onClick={handleStarClick(k + 1)}
        >
          {tooltips ? <Tooltip title={tooltips[k] || ''}>{node}</Tooltip> : node}
        </li>
      )
    })
  }

  return (
    <ul className={wrapperClasses} onMouseLeave={handleMouseLeave}>
      {renderStar()}
    </ul>
  )
}

Rate.defaultProps = defaultProps

export default Rate
