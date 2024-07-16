import { uploadImage as uploadImageRequest } from '@/api/uploadImage'
import { isAxiosError } from 'axios'
import useScrollToError from './scrollToError'

export default function useUploadImage(
  name: string,
  setFieldValue: Function,
  setFieldError: Function,
  errors: object
) {
  return async (file: File | null) => {
    if (file) {
      try {
        setFieldValue(name, await uploadImageRequest(file))
      } catch (e) {
        if (isAxiosError(e)) {
          if (e.response?.status === 400) {
            setFieldError(name, 'Image upload error')
            useScrollToError(errors)
          }
        }
      }
    } else {
      setFieldValue(name, '')
    }
  }
}
