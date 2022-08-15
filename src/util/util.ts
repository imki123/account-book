export const parseToNumber = (num: string | number) => {
  const number = removeComma(num)
  if (Number.isNaN(Number(number))) {
    return 0
  } else {
    return Number(number)
  }
}

export const removeComma = (num?: string | number | BigInt) => {
  if (!num) return ''
  return String(num).replace(/,/g, '')
}

export const localeNumber = (num: string | number) => {
  return Number(removeComma(num)).toLocaleString()
}

export const isNumber = (num: string | number) => {
  return !isNaN(Number(removeComma(num)))
}

// BigInt
export const parseToBigInt = (num: string | BigInt) => {
  const number = removeComma(num)
  if (isBigInt(number)) {
    return BigInt(number)
  } else {
    return BigInt(0)
  }
}

export const localeBigInt = (num: string | BigInt) => {
  return BigInt(removeComma(num)).toLocaleString()
}

export const isBigInt = (num?: string | BigInt | number) => {
  try {
    if (typeof num === 'number') return false
    BigInt(removeComma(num))
    return true
  } catch (e) {
    return false
  }
}

// fake input 사용해서 input size 변경
export const changeInputWidth = (
  target: HTMLInputElement | HTMLSelectElement,
  select = false,
) => {
  if (target) {
    let fakeInput = document.querySelector<HTMLInputElement>('.fakeInput')
    if (select) {
      fakeInput = document.querySelector<HTMLInputElement>('.fakeSelect')
    }
    if (fakeInput) {
      const option = fakeInput.querySelector('option')
      if (option) option.innerHTML = target.value
      fakeInput.value = target.value
      fakeInput.style.fontSize = getComputedStyle(target).fontSize
      fakeInput.style.fontWeight = getComputedStyle(target).fontWeight
      const width = fakeInput.scrollWidth + 10
      target.style.width = width + 'px'
      fakeInput.value = ''
      if (option) option.innerHTML = ''
    }
  }
}

export const addSnackBar = (
  message: string,
  duration = 2000,
  animationTime = 500,
) => {
  const snackBar = document.createElement('div')
  const defaultStyle = `
    position: fixed;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%);
    opacity: 0;
    background: #777;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 14px;
    transition: bottom ${animationTime}ms, opacity ${animationTime}ms;
  `
  snackBar.style.cssText = defaultStyle
  snackBar.innerText = message
  document.body.appendChild(snackBar)
  setTimeout(() => {
    snackBar.style.cssText =
      defaultStyle +
      `
    bottom: 20px;
    opacity: 0.9;
    `
  }, 100)
  setTimeout(() => {
    snackBar.style.cssText = defaultStyle
  }, duration)
  setTimeout(() => {
    if (snackBar) snackBar.remove()
  }, duration + animationTime)
}
