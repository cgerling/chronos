export function percentageOf (fraction, total) {
  return (fraction * 100) / total || 0
}

export function asPercent (number = 0) {
  return `${number} %`
}
