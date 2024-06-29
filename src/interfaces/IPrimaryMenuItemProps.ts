import type { DefineComponent } from 'vue'

type IconComponent = DefineComponent<{}, {}, any>

export default interface IPrimaryMenuItemProps {
  svg: IconComponent
  href: string
  name: string
}
