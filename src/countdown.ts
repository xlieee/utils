export type Callback = (
  curCount: number,
  initialCount: number,
  initialText?: string
) => any

export default (
  perSecondCallback: Callback,
  opts: {
    initialCount: number
    initialText?: string
  },
  immediate: Boolean = true
): void | ((cb: Callback) => any) => {
  const { initialCount, initialText } = opts
  if (initialCount < 1 || /\./.test(String(initialCount))) {
    return console.error('initialCount必须是正整数！')
  }
  let curCount = initialCount
  immediate && perSecondCallback(curCount, initialCount, initialText)

  let countdownTimer: any = setInterval(() => {
    if (!curCount) {
      clearInterval(countdownTimer)
      countdownTimer = null
    } else {
      curCount--
      perSecondCallback(curCount, initialCount, initialText)
    }
  }, 1000)

  return (cb: Callback) => {
    if (countdownTimer) {
      clearInterval(countdownTimer)
    }
    cb(curCount, initialCount, initialText)
  }
}
