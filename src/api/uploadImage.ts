import http from '@/api/http/http'

async function uploadImage(file: File): Promise<string> {
  const data = await http.post(
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
  console.log(data)
  return data.data
}

export { uploadImage }
