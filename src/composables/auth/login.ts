import { useUserStore } from '@/stores/user'
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { object, string } from 'yup'
import useSaveToLocalStorage from '@/composables/helpers/saveToLocalStorage'
import { RouteNamesEnum } from '@/router/router.types'
import { isAxiosError } from 'axios'
import useScrollToError from '@/composables/helpers/scrollToError'

export default function useLogin() {
  const { handleSubmit, isSubmitting, setFieldError, errors } = useForm({
    validationSchema: toTypedSchema(
      object({
        login: string().required(),
        password: string().required()
      })
    )
  })

  const userStore = useUserStore()
  const router = useRouter()

  const onSubmit = handleSubmit(
    async (values) => {
      try {
        const userResponse = await userStore.login(values)
        useSaveToLocalStorage(userResponse)
        router.push({ name: RouteNamesEnum.teams })
      } catch (e) {
        if (isAxiosError(e)) {
          if (e.response?.status === 401) {
            setFieldError('login', 'Invalid login or password')
            useScrollToError(errors)
          }
        }
      }
    },
    ({ errors }) => useScrollToError(errors)
  )

  return { isSubmitting, onSubmit }
}
