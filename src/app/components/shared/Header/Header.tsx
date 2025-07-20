import { Content } from "./components";

import styles from "./Header.module.scss";

interface HeaderProps {
  onBack?: () => void;
}

const Header = ({ onBack }: HeaderProps) => {
  return (
    <div className={styles["container"]}>
      <Content />
    </div>
  );
};

export default Header;
