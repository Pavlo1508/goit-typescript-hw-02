import axios from "axios";
export const fetchImages = async ({ searchQuery, page, }) => {
    const ACCESS_KEY = "2__11CiSBhHE3VaeWeDapG7I_hRaTxEI5jDLOKXZbv8";
    try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                query: searchQuery,
                page: page,
                per_page: 10,
                click_id: ACCESS_KEY,
            },
        });
        return response.data.results;
    }
    catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
export default fetchImages;
