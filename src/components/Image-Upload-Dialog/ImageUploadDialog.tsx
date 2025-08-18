import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { FileUploadForm } from "../File-Upload/File-Upload";
import { useImageUploadContext } from "./hook/useImageUploadContext";

export const ImageUploadDialog = () => {
  const { OpenDialog, setOpenDialog } =
    useImageUploadContext()._useImageUploadDialog;

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog.Root
      onEscapeKeyDown={handleClose}
      onInteractOutside={handleClose}
      open={OpenDialog}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <FileUploadForm />
            </Dialog.Body>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={handleClose} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
