import type PlayerRequest from '@/api/dto/players/PlayerRequest'
import type PlayerFormProps from '@/interfaces/PlayerFormProps'
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { computed, watch } from 'vue'
import { date, number, object, string } from 'yup'
import useUploadImage from '../helpers/uploadImage'
import { isAxiosError } from 'axios'
import useScrollToError from '../helpers/scrollToError'

export default function usePlayerForm(props: PlayerFormProps) {
  const initialValues = {
    name: '',
    number: undefined,
    position: '',
    team: undefined,
    birthday: undefined,
    height: undefined,
    weight: undefined,
    avatarUrl: undefined
  }

  const { handleSubmit, isSubmitting, setFieldError, setFieldValue, errors, resetForm } =
    useForm<PlayerRequest>({
      validationSchema: toTypedSchema(
        object({
          name: string().required().min(3).max(100),
          number: number().required().integer().positive(),
          position: string().required(),
          team: number().required().integer().positive(),
          birthday: date().required().max(new Date()),
          height: number().required().integer().positive(),
          weight: number().required().integer().positive(),
          avatarUrl: string().required()
        })
      ),
      initialValues
    })

  const formatDate = (date: Date) => {
    return (
      date.getFullYear().toString().padStart(4, '0') +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0')
    )
  }

  watch(
    () => props.player,
    (newPlayer) => {
      if (newPlayer) {
        if (typeof newPlayer.birthday === 'string') {
          newPlayer.birthday = formatDate(new Date(newPlayer.birthday))
        }
        resetForm({ values: newPlayer })
      }
    }
  )

  const uploadImage = useUploadImage('avatarUrl', setFieldValue, setFieldError, errors)

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

  const position = computed(() => props.player?.position)
  const team = computed(() => props.player?.team)

  return { uploadImage, onSubmit, isSubmitting, position, team, setFieldError }
}
