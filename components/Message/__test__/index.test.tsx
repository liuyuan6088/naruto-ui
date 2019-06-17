import message from '../index'

describe('render message', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    message.destroy()
    jest.useRealTimers()
  })

  // top
  it('should be able to config top', () => {
    message.config({
      top: 100,
      transitionName: ''
    })
    message.info({
      content: 'top 100px'
    })
    // @ts-ignore
    expect(document.querySelectorAll('.naruto-information')[0].style.top).toBe('100px')
  })

  // maxCount
  it('should be able to config maxCount', () => {
    message.config({
      maxCount: 5,
      transitionName: ''
    })
    for (let i = 0; i < 10; i += 1) {
      message.info({
        content: 'test'
      })
    }
    message.info({
      content: 'test'
    })
    expect(document.querySelectorAll('.naruto-message').length).toBe(5)
    expect(document.querySelectorAll('.naruto-message')[4].textContent).toBe('test')
    jest.runAllTimers()
    expect(document.querySelectorAll('.naruto-message').length).toBe(0)
  })

  // 销毁 close
  it('should be able to hide manually', () => {
    message.config({
      transitionName: ''
    })
    const hide1 = message.info({
      content: 'whatever',
      duration: 0
    })
    const hide2 = message.info({
      content: 'whatever',
      duration: 0
    })
    expect(document.querySelectorAll('.naruto-message').length).toBe(2)
    hide1()
    jest.runAllTimers()
    expect(document.querySelectorAll('.naruto-message').length).toBe(1)
    hide2()
    jest.runAllTimers()
    expect(document.querySelectorAll('.naruto-message').length).toBe(0)
  })

  // 销毁全部
  it('should be able to destroy globally', () => {
    message.config({
      transitionName: ''
    })
    message.info({
      content: 'whatever',
      duration: 0
    })
    message.info({
      content: 'whatever',
      duration: 0
    })
    expect(document.querySelectorAll('.naruto-message').length).toBe(2)
    message.destroy()
    expect(document.querySelectorAll('.naruto-message').length).toBe(0)
  })
})
