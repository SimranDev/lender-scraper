export const removeNulls = <T extends object>(obj: T): Partial<T> =>
  Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== null)) as Partial<T>
