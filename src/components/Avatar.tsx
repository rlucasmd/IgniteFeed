import { HTMLProps } from "react";
import styles from "./Avatar.module.css";



interface AvatarProps extends HTMLProps<HTMLImageElement> {
  outlineBorder?: boolean;
}

function Avatar({ outlineBorder, ...rest }: AvatarProps) {
  return (
    <img
      {...rest}
      className={!outlineBorder ? styles.avatar : styles.outlinedBorder}
    />
  );
}

export { Avatar };