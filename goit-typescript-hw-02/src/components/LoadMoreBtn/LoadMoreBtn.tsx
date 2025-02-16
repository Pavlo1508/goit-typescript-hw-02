import { FC } from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button className={s.load_more} onClick={loadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
