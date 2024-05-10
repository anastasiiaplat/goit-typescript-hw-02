import { CiSaveUp2 } from "react-icons/ci";
import { FC } from "react";
interface ScrollUpProps{
  onScrollBtn: () => void;
}
const ScrollUp:FC<ScrollUpProps> = ({onScrollBtn}) => {
  return (
    <div  onClick={onScrollBtn}><CiSaveUp2 size='50'/></div>
  )
}

export default ScrollUp