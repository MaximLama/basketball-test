import http from '@/api/http/http'

async function uploadImage(file: File): Promise<string> {
  return (
    await http.post(
      'Image/SaveImage',
      {
        file
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
  ).data
}

export { uploadImage }
