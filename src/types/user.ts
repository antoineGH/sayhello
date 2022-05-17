export interface ModalEditPasswordProps {
  visible: boolean
  handleCancel: () => void
  confirmLoading: boolean
  handleOk: (password: string) => void
}
