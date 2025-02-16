import { jsx as _jsx } from "react/jsx-runtime";
import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ loadMore }) => {
    return (_jsx("button", { className: s.load_more, onClick: loadMore, children: "Load More" }));
};
export default LoadMoreBtn;
