import { ImgHTMLAttributes } from 'react';
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  user: string;
}

const Avatar = ({ hasBorder = true, user, ...props }: AvatarProps) => {
  console.log(props);
  
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={`https://github.com/${user}.png`} 
      {...props}
    />
  )
}

export default Avatar