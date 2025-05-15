export const fetchgiphy = async (gifname) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Hv0iHm35KopBPrli6ZdzwSbwOWUSJTPb&q=${gifname}&limit=5`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}