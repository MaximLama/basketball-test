import { useRouter, type RouteLocationAsRelativeGeneric } from 'vue-router'

export default function useAddButton(props: { to?: RouteLocationAsRelativeGeneric }) {
  const router = useRouter()

  const next = () => {
    if (props.to) router.push(props.to)
  }

  return next
}
