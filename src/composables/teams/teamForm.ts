import type TeamRequest from '@/api/dto/teams/TeamRequest'
import { toTypedSchema } from '@vee-validate/yup'
import { isAxiosError, type AxiosError } from 'axios'
import { useForm } from 'vee-validate'
import { watch } from 'vue'
import { number, object, string } from 'yup'
import useScrollToError from '../helpers/scrollToError'
import useUploadImage from '../helpers/uploadImage'

export default function useTeamForm(props: {
  submit: (values: TeamRequest) => Promise<void>
  error: (e: AxiosError) => void
  team?: TeamRequest
}) {
  const initialValues = {
    name: '',
    foundationYear: undefined,
    division: undefined,
    conference: undefined,
    imageUrl: undefined
  }

  const { handleSubmit, isSubmitting, setFieldError, setFieldValue, errors, resetForm } =
    useForm<TeamRequest>({
      validationSchema: toTypedSchema(
        object({
          name: string().required().min(3).max(100),
          foundationYear: number().required().integer().min(1900).max(new Date().getFullYear()),
          division: string().required(),
          conference: string().required(),
          imageUrl: string().required()
        })
      ),
      initialValues
    })

  watch(
    () => props.team,
    (newTeam) => {
      if (newTeam) {
        resetForm({ values: newTeam })
      }
    }
  )

  const uploadImage = useUploadImage('imageUrl', setFieldValue, setFieldError, errors)

  const onSubmit = handleSubmit(
    async (values) => {
      try {
        await props.submit(values)
      } catch (e) {
        if (isAxiosError(e)) {
          props.error(e)
          useScrollToError(errors)
        }
      }
    },
    ({ errors }) => useScrollToError(errors)
  )

  return { isSubmitting, uploadImage, onSubmit, setFieldError }
}
