import { useUserStore } from '@/stores/user'
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { bool, object, ref, string } from 'yup'
import useSaveToLocalStorage from '../helpers/saveToLocalStorage'
import { RouteNamesEnum } from '@/router/router.types'
import { isAxiosError } from 'axios'
import useScrollToError from '../helpers/scrollToError'

interface SignUpFormRequest {
  name: string
  login: string
  password: string
  confirmPassword: string
  agreement: boolean
}

export default function useRegister() {
  const { handleSubmit, isSubmitting, setFieldError, errors } = useForm<SignUpFormRequest>({
    validationSchema: toTypedSchema(
      object({
        name: string().required().max(100).min(3).default('name'),
        login: string().required().max(100).min(6).default('login'),
        password: string().required().max(100).min(8).default('password'),
        confirmPassword: string()
          .required()
          .oneOf([ref('password')])
          .default('password'),
        agreement: bool().required().isTrue().default(true)
      })
    )
  })

  const userStore = useUserStore()
  const router = useRouter()

  const onSubmit = handleSubmit(
    async (values) => {
      try {
        const userResponse = await userStore.register({
          userName: values.name,
          login: values.login,
          password: values.password
        })
        useSaveToLocalStorage(userResponse)
        router.push({ name: RouteNamesEnum.teams })
      } catch (e) {
        if (isAxiosError(e)) {
          if (e.response?.status === 409) {
            setFieldError('login', 'Login is already taken')
            useScrollToError(errors)
          }
        }
      }
    },
    ({ errors }) => useScrollToError(errors)
  )

  return { isSubmitting, onSubmit }
}
