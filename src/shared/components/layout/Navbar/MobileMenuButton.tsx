import { IoReorderThreeOutline } from "react-icons/io5";
import { useModalStore } from "@/store/useModalStore"; 
import Button from "../../ui/Button";
import styles from "./Navbar.module.scss";
import { ModalState } from "@/store/useModalStore";

export default function MobileMenuButton() {
    const openModal = useModalStore((state: ModalState) => state.openModal);

    const handleOpenMenu = () => {
        openModal('MOBILE_MENU');
    };

    return (
        <div className={styles.mobileMenuBtnWrapper}>
            <Button.link onClick={handleOpenMenu} aria-label="Open menu">
                <IoReorderThreeOutline size={35} color='black' />
            </Button.link>
        </div>
    );
}