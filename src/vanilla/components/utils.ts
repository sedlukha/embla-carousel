export function map(
  value: number,
  iStart: number,
  iStop: number,
  oStart: number,
  oStop: number,
): number {
  return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart))
}

export function mathSign(n: number): number {
  return !n ? 0 : n / Math.abs(n)
}

export function deltaAbs(valueB: number, valueA: number): number {
  return Math.abs(valueB - valueA)
}

export function factorAbs(valueB: number, valueA: number): number {
  if (valueB === 0 || valueA === 0) return 0
  if (Math.abs(valueB) <= Math.abs(valueA)) return 0
  const diff = deltaAbs(Math.abs(valueB), Math.abs(valueA))
  return Math.abs(diff / valueB)
}

export function roundToDecimals(decimalPoints: number): (n: number) => number {
  const pow = Math.pow(10, decimalPoints)
  return (n: number): number => Math.round(n * pow) / pow
}

export function debounce(callback: () => void, time: number): () => void {
  let timeout = 0
  return (): void => {
    window.clearTimeout(timeout)
    timeout = window.setTimeout(callback, time) || 0
  }
}

export function groupArray<GenericType>(
  array: GenericType[],
  size: number,
): GenericType[][] {
  const groups = []
  for (let i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size))
  }
  return groups
}

export function arrayKeys<GenericType>(array: GenericType): number[] {
  return Object.keys(array).map(Number)
}

export function removeClass(node: HTMLElement, className: string): void {
  const cl = node.getAttribute('class')
  if (className && cl && cl.indexOf(className) > -1)
    node.setAttribute('class', cl.replace(className, ''))
}

export function addClass(node: HTMLElement, className: string): void {
  const cl = node.getAttribute('class')
  if (className && cl && cl.indexOf(className) === -1)
    node.setAttribute('class', cl + ' ' + className)
}
