import type { DefineComponent } from 'vue'
import type { RouteLocationAsRelativeGeneric } from 'vue-router'

type IconComponent = DefineComponent<{}, {}, any>

export default interface PrimaryMenuItemProps {
  svg: IconComponent
  href: RouteLocationAsRelativeGeneric
  baseRoute: RouteLocationAsRelativeGeneric
  name: string
}
