import axios from "axios";

type FetchImagesParams = {
  searchQuery: string;
  page: number;
};

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description?: string;
};

type FetchImagesResponse = Image[];

export const fetchImages = async ({
  searchQuery,
  page,
}: FetchImagesParams): Promise<FetchImagesResponse> => {
  const ACCESS_KEY = "2__11CiSBhHE3VaeWeDapG7I_hRaTxEI5jDLOKXZbv8";
  try {
    const response = await axios.get<{ results: FetchImagesResponse }>(
      "https://api.unsplash.com/search/photos",
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        params: {
          query: searchQuery,
          page: page,
          per_page: 10,
          click_id: ACCESS_KEY,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;
