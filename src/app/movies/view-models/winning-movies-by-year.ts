export interface WinningMoviesByYear {
    winnerCount: number,
    year: number
}

export interface YearsWithMultipleWinningMovies {
    years: Array<WinningMoviesByYear>
}
