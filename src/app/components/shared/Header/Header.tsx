import { Content } from "./components";

import styles from "./Header.module.scss";

interface HeaderProps {
  onBack?: () => void;
  onGameSelected: (id: number) => void;
}

const Header = ({ onBack, onGameSelected }: HeaderProps) => {
  return (
    <div className={styles["container"]}>
      <Content onGameSelected={onGameSelected} />
    </div>
  );
};

export default Header;
