import EditProfile from 'components/editProfile/EditProfile'
import { useAppSelector } from 'hooks/hooks'
import { profilesSelectors } from 'features/profiles/selectors'
import { ModalSwitchProfileProps } from 'types/profile'
import { Modal } from 'antd'

const ModalSwitchProfile = ({
  visible,
  handleSwitchProfile,
  handleCancel
}: ModalSwitchProfileProps) => {
  const profiles = useAppSelector(profilesSelectors.selectAll)

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
