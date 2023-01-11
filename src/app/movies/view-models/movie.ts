export interface Movie {
    id: number,
    year: number,
    title: string,
    studios: Array<string>,
    producers: Array<string>,
    winner: boolean
}

export interface MovieList {
    content: Array<Movie>,
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number
    numberOfElements: number
    pageable: {
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: true,
        sort: {
            unsorted: boolean,
            sorted: boolean,
            empty: boolean
        }
        unpaged: boolean
    }
    size: number,
    sort: {
        unsorted: boolean,
        sorted: boolean,
        empty: boolean
    }
    totalElements: number,
    totalPages: number,
}
