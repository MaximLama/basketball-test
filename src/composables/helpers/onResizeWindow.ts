import { onMounted, onUnmounted } from 'vue'

export default function useOnResizeWindow(fn: (e: Event) => void) {
  onMounted(() => {
    window.addEventListener('resize', fn)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', fn)
  })
}
