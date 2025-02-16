import { useState } from "react";
import fetchImages from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Loader } from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description?: string;
};

type ModalData = {
  fullPhotoUrl: string;
  altText: string;
};

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getImagesList = async (
    query: string,
    currentPage: number
  ): Promise<void> => {
    try {
      setIsLoading(true);
      const data = await fetchImages({ searchQuery: query, page: currentPage });
      setImages((prev) => (currentPage === 1 ? data : [...prev, ...data]));
      setIsError(!data.length);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchClick = (): void => {
    setImages([]);
    setPage(1);
    setIsError(false);
    getImagesList(searchQuery, 1);
  };

  const handleSearchChange = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  const handleLoadMore = (): void => {
    const nextPage = page + 1;
    setPage(nextPage);
    getImagesList(searchQuery, nextPage);
  };

  const openModal = (data: Image): void => {
    const modalData = {
      fullPhotoUrl: data.urls.regular,
      altText: data.alt_description,
    };
    setModalData(modalData);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <SearchBar
        onSearchChanged={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      {isError && <ErrorMessage />}
      <ImageGallery imagesList={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        modalData={modalData}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
