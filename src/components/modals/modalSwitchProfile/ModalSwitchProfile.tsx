import EditProfile from 'components/editProfile/EditProfile'
import { ModalSwitchProfileProps } from 'types/profile'
import { Modal } from 'antd'

const ModalSwitchProfile = ({
  visible,
  handleSwitchProfile,
  handleCancel,
  profiles
}: ModalSwitchProfileProps) => {
  return (
    <Modal
      className="modal_switch_profile"
      title="Select Profile"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <EditProfile
        profiles={profiles}
        isModal={true}
        handleSwitchProfile={handleSwitchProfile}
      />
    </Modal>
  )
}
export default ModalSwitchProfile
