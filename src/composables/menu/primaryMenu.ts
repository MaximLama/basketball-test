import type IPrimaryMenuItemProps from '@/interfaces/PrimaryMenuItemProps'
import TeamsIcon from '@/components/Icons/TeamsIcon.vue'
import PlayersIcon from '@/components/Icons/PlayersIcon.vue'
import { RouteNamesEnum } from '@/router/router.types'
import { ref } from 'vue'
import useOnResizeWindow from '../helpers/onResizeWindow'

export default function usePrimaryMenu() {
  const navLinks: IPrimaryMenuItemProps[] = [
    {
      svg: TeamsIcon,
      href: { name: RouteNamesEnum.teams },
      baseRoute: { name: RouteNamesEnum.teamsBase },
      name: 'Teams'
    },
    {
      svg: PlayersIcon,
      href: { name: RouteNamesEnum.players },
      baseRoute: { name: RouteNamesEnum.playersBase },
      name: 'Players'
    }
  ]

  const isMobileMenuShown = ref(false)

  const toggleMainMenu = () => {
    isMobileMenuShown.value = !isMobileMenuShown.value
    const body = document.getElementsByTagName('body').item(0)
    isMobileMenuShown.value ? body?.classList.add('no-scroll') : body?.classList.remove('no-scroll')
  }

  const hideMainMenu = () => {
    isMobileMenuShown.value = false
    const body = document.getElementsByTagName('body').item(0)
    body?.classList.remove('no-scroll')
  }

  useOnResizeWindow(() => {
    if (isMobileMenuShown.value && window.innerWidth > 1050) {
      hideMainMenu()
    }
  })

  return { navLinks, isMobileMenuShown, toggleMainMenu, hideMainMenu }
}
