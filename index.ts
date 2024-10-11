// Import the tmdbScrape function
import tmdbScrape from "vidsrc.ts"; 

const runScraper = async () => {
    try {
        // Example usage for a movie
        const movieData = await tmdbScrape("76479", "movie");
        console.log("Movie Data:", movieData);

        // Example usage for a TV series
        const tvData = await tmdbScrape("TMDB_ID", "tv", 1, 1);
        console.log("TV Series Data:", tvData);
    } catch (error) {
        console.error("Error during scraping:", error);
    }
};

// Run the scraper
runScraper();
