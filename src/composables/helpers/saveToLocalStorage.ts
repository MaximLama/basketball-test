export default function useSaveToLocalStorage<T extends object>(obj: T): void {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      if (value !== undefined && value !== null) {
        localStorage.setItem(key, JSON.stringify(value))
      }
    }
  }
}
