import { FC } from "react";


interface LoadMoreBtnProps{
  onClickButton: () => void;
}

const LoadMoreBtn:FC<LoadMoreBtnProps> = ({ onClickButton}) => {
    return (
        <>
            <button type="button" id="load_btn"   onClick={onClickButton}>Load more</button>
            
        </>
        
  )
}

export default LoadMoreBtn