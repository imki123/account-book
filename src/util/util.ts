export const parseToNumber = (num: string | number) => {
  const number = removeComma(num)
  if (Number.isNaN(Number(number))) {
    return 0
  } else {
    return Number(number)
  }
}

export const removeComma = (num: string | number) => {
  return String(num).replace(/,/g, '')
}

export const localeNumber = (num: string | number) => {
  return Number(removeComma(num)).toLocaleString()
}

export const isNumber = (num: string | number) => {
  return !isNaN(Number(removeComma(num)))
}
