export default function useRemoveUserFromLocalStorage() {
  localStorage.removeItem('name')
  localStorage.removeItem('avatarUrl')
  localStorage.removeItem('token')
}
