export function isValid(...args: any[]) {
  return args.every(Boolean)
}