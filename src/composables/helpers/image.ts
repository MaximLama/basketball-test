import { baseUrl } from '@/constants/constants'

export default function useImage(path: string | undefined) {
  return path ? baseUrl + path : undefined
}
