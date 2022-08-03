export const parseToNumber = (num: string | number) => {
  const number = removeComma(num)
  if (Number.isNaN(Number(number))) {
    return 0
  } else {
    return Number(number)
  }
}

export const removeComma = (num?: string | number | BigInt) => {
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
export const changeInputWidth = (target: HTMLInputElement) => {
  if (target) {
    const fakeInput = document.querySelector<HTMLInputElement>('.fakeInput')
    if (fakeInput) {
      fakeInput.value = target.value
      fakeInput.style.fontSize = getComputedStyle(target).fontSize
      fakeInput.style.fontWeight = getComputedStyle(target).fontWeight
      const width = fakeInput.scrollWidth + 10
      target.style.width = width + 'px'
      fakeInput.value = ''
    }
  }
}
