import { Box, FileUpload } from '@chakra-ui/react'

export const FileUploadForm= () => {
    return (
    <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={10}>
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <FileUpload.DropzoneContent>
          <Box>Drag and drop files here</Box>
          <Box color="fg.muted">.png, .jpg up to 5MB</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
