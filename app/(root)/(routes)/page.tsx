import { UserButton } from "@clerk/nextjs";
import Modal from "@/components/modal"

const SetupPage = () => {
  return (
    <div>
      <Modal
        title="Create your store"
        description="This is the store modal"
        isOpen
        onClose={() => {}}
      >This is the store modal</Modal>
    </div>
  );
};

export default SetupPage;
