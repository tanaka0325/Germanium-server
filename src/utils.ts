export function formatDate(date: Date) {
  const y = date.getUTCFullYear()
  const m = zeroPadding(date.getUTCMonth() + 1, 2)
  const d = zeroPadding(date.getUTCDate(), 2)
  // const hour = zeroPadding(date.getUTCHours(), 2)
  // const min = zeroPadding(date.getUTCMinutes(), 2)
  // const sec = zeroPadding(date.getUTCSeconds(), 2)
  return `${y}-${m}-${d}`
}

export function zeroPadding(num, length) {
  return ("0000000000" + num).slice(-length)
}
