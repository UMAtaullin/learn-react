export  const requiredField = value => {
  if (value) return undefined

  return 'Field is required'
}

export const maxLength = (length) => (value) => {
  if (value.length > length) return `Max length 20`
  return undefined
}   