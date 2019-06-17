import * as React from 'react'
const defaultEvents = ['mousedown', 'touchstart']

export function useClickOutSide(
  refs: React.RefObject<HTMLElement | null>[],
  onClickAway: (event: KeyboardEvent) => void,
  events: string[] = defaultEvents
) {
  React.useEffect(() => {
    const handler = event => {
      const test = refs.map(ref => {
        return ref.current && !ref.current.contains(event.target)
      })
      if (test.every(Boolean)) {
        onClickAway(event)
      }
    }

    for (const eventName of events) {
      window.addEventListener(eventName, handler)
    }

    return () => {
      for (const eventName of events) {
        window.removeEventListener(eventName, handler)
      }
    }
  }, [refs, onClickAway])
}

// useEffect是异步的，useLayoutEffect是同步的
// 有问题，很自然想到异步，说到异步又想到了requestIdleCallback，
// 这个函数就是浏览器空闲的时候执行callback。类似于requestAnimationFrame，
// 只是requestIdleCallback把优先级放低了。说到requestAnimationFrame就想到了平均60fps
//，接着1000/60 就是16.66666，所以每一帧的间隔大约是16ms左右。
// 最后，问题来源就这样暴露出来了，当interval间隔大于屏幕一帧时间，
// 用useEffect此定时器不会有问题，反之则是interval会在useEffect之前多执行一次造成问题的出现。
export const useEnhancedEffect = window !== undefined ? React.useLayoutEffect : React.useEffect
