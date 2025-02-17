import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import fetchImages from "../../services/api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
function App() {
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isError, setIsError] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const getImagesList = async (query, currentPage) => {
        try {
            setIsLoading(true);
            const data = await fetchImages({ searchQuery: query, page: currentPage });
            setImages((prev) => (currentPage === 1 ? data : [...prev, ...data]));
            setIsError(!data.length);
        }
        catch (error) {
            console.error(error);
            setIsError(true);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleSearchClick = () => {
        setImages([]);
        setPage(1);
        setIsError(false);
        getImagesList(searchQuery, 1);
    };
    const handleSearchChange = (newSearchQuery) => {
        setSearchQuery(newSearchQuery);
    };
    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        getImagesList(searchQuery, nextPage);
    };
    const openModal = (data) => {
        const modalData = {
            fullPhotoUrl: data.urls.regular,
            altText: data.alt_description,
        };
        setModalData(modalData);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
    };
    return (_jsxs(_Fragment, { children: [_jsx(SearchBar, { onSearchChanged: handleSearchChange, onSearchClick: handleSearchClick }), isError && _jsx(ErrorMessage, {}), _jsx(ImageGallery, { imagesList: images, onImageClick: openModal }), isLoading && _jsx(Loader, {}), images.length > 0 && !isLoading && (_jsx(LoadMoreBtn, { loadMore: handleLoadMore })), _jsx(ImageModal, { isOpen: isModalOpen, modalData: modalData, onClose: closeModal })] }));
}
export default App;
