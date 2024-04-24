const apiConfig = {
    baseUrl: 'https://api.themovieedb.org/3/',
    apiKey: '6a5fa2aa71d234b5f1b196ce04746bc5',
    originalImage: (imagePath) =>`https://image.tmdb.org/t/p/original/${imagePath}`,
    w500lImage: (imagePath) =>`https://image.tmdb.org/t/p/w500/${imagePath}`
}
export default apiConfig;