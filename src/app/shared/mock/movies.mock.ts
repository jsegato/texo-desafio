import { MovieList } from "../../movies/view-models/movie";

export const moviesAllMock: MovieList =
{
    content: [
        {
            id: 1,
            year: 1980,
            title: "Can't Stop the Music",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "Allan Carr"
            ],
            winner: true
        },
        {
            id: 2,
            year: 1980,
            title: "Cruising",
            studios: [
                "Lorimar Productions",
                "United Artists"
            ],
            producers: [
                "Jerry Weintraub"
            ],
            winner: false
        },
        {
            id: 3,
            year: 1980,
            title: "The Formula",
            studios: [
                "MGM",
                "United Artists"
            ],
            producers: [
                "Steve Shagan"
            ],
            winner: false
        },
        {
            id: 4,
            year: 1980,
            title: "Friday the 13th",
            studios: [
                "Paramount Pictures"
            ],
            producers: [
                "Sean S. Cunningham"
            ],
            winner: false
        },
        {
            id: 5,
            year: 1980,
            title: "The Nude Bomb",
            studios: [
                "Universal Studios"
            ],
            producers: [
                "Jennings Lang"
            ],
            winner: false
        },
        {
            id: 6,
            year: 1980,
            title: "The Jazz Singer",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "Jerry Leider"
            ],
            winner: false
        },
        {
            id: 7,
            year: 1980,
            title: "Raise the Titanic",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "William Frye"
            ],
            winner: false
        },
        {
            id: 8,
            year: 1980,
            title: "Saturn 3",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "Stanley Donen"
            ],
            winner: false
        },
        {
            id: 9,
            year: 1980,
            title: "Windows",
            studios: [
                "United Artists"
            ],
            producers: [
                "Mike Lobell"
            ],
            winner: false
        },
        {
            id: 10,
            year: 1980,
            title: "Xanadu",
            studios: [
                "Universal Studios"
            ],
            producers: [
                "Lawrence Gordon"
            ],
            winner: false
        },
        {
            id: 11,
            year: 1981,
            title: "Mommie Dearest",
            studios: [
                "Paramount Pictures"
            ],
            producers: [
                "Frank Yablans"
            ],
            winner: true
        },
        {
            id: 12,
            year: 1981,
            title: "Endless Love",
            studios: [
                "PolyGram",
                "Universal Studios"
            ],
            producers: [
                "Dyson Lovell"
            ],
            winner: false
        },
        {
            id: 13,
            year: 1981,
            title: "Heaven's Gate",
            studios: [
                "United Artists"
            ],
            producers: [
                "Joann Carelli"
            ],
            winner: false
        },
        {
            id: 14,
            year: 1981,
            title: "The Legend of the Lone Ranger",
            studios: [
                "Associated Film Distribution",
                "Universal Studios"
            ],
            producers: [
                "Walter Coblenz"
            ],
            winner: false
        },
        {
            id: 15,
            year: 1981,
            title: "Tarzan, the Ape Man",
            studios: [
                "MGM",
                "United Artists"
            ],
            producers: [
                "John Derek"
            ],
            winner: false
        }
    ],
    pageable: {
        sort: {
            unsorted: true,
            sorted: false,
            empty: true
        },
        offset: 0,
        pageSize: 15,
        pageNumber: 0,
        paged: true,
        unpaged: false
    },
    totalPages: 14,
    totalElements: 206,
    last: false,
    size: 15,
    number: 0,
    sort: {
        unsorted: true,
        sorted: false,
        empty: true
    },
    first: true,
    numberOfElements: 15,
    empty: false
}

export const winningMoviesMock: MovieList =
{
    content: [
        {
            id: 1,
            year: 1980,
            title: "Can't Stop the Music",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "Allan Carr"
            ],
            winner: true
        },
        {
            id: 11,
            year: 1981,
            title: "Mommie Dearest",
            studios: [
                "Paramount Pictures"
            ],
            producers: [
                "Frank Yablans"
            ],
            winner: true
        },
        {
            id: 16,
            year: 1982,
            title: "Inchon",
            studios: [
                "MGM"
            ],
            producers: [
                "Mitsuharu Ishii"
            ],
            winner: true
        },
        {
            id: 21,
            year: 1983,
            title: "The Lonely Lady",
            studios: [
                "Universal Studios"
            ],
            producers: [
                "Robert R. Weston"
            ],
            winner: true
        },
        {
            id: 26,
            year: 1984,
            title: "Bolero",
            studios: [
                "Cannon Films"
            ],
            producers: [
                "Bo Derek"
            ],
            winner: true
        },
        {
            id: 31,
            year: 1985,
            title: "Rambo: First Blood Part II",
            studios: [
                "Columbia Pictures"
            ],
            producers: [
                "Buzz Feitshans"
            ],
            winner: true
        },
        {
            id: 36,
            year: 1986,
            title: "Howard the Duck",
            studios: [
                "Universal Studios"
            ],
            producers: [
                "Gloria Katz"
            ],
            winner: true
        },
        {
            id: 37,
            year: 1986,
            title: "Under the Cherry Moon",
            studios: [
                "Warner Bros."
            ],
            producers: [
                "Bob Cavallo",
                "Joe Ruffalo",
                "Steve Fargnoli"
            ],
            winner: true
        },
        {
            id: 41,
            year: 1987,
            title: "Leonard Part 6",
            studios: [
                "Columbia Pictures"
            ],
            producers: [
                "Bill Cosby"
            ],
            winner: true
        },
        {
            id: 46,
            year: 1988,
            title: "Cocktail",
            studios: [
                "Touchstone Pictures"
            ],
            producers: [
                "Robert W. Cort",
                "Ted Field"
            ],
            winner: true
        },
        {
            id: 51,
            year: 1989,
            title: "Star Trek V: The Final Frontier",
            studios: [
                "Paramount Pictures"
            ],
            producers: [
                "Harve Bennett"
            ],
            winner: true
        },
        {
            id: 56,
            year: 1990,
            title: "The Adventures of Ford Fairlane",
            studios: [
                "20th Century Fox"
            ],
            producers: [
                "Joel Silver",
                "Steven Perry"
            ],
            winner: true
        },
        {
            id: 57,
            year: 1990,
            title: "Ghosts Can't Do It",
            studios: [
                "Triumph Releasing"
            ],
            producers: [
                "Bo Derek"
            ],
            winner: true
        },
        {
            id: 61,
            year: 1991,
            title: "Hudson Hawk",
            studios: [
                "TriStar Pictures"
            ],
            producers: [
                "Joel Silver"
            ],
            winner: true
        },
        {
            id: 66,
            year: 1992,
            title: "Shining Through",
            studios: [
                "20th Century Fox"
            ],
            producers: [
                "Carol Baum",
                "Howard Rosenman"
            ],
            winner: true
        }
    ],
    pageable: {
        sort: {
            unsorted: true,
            sorted: false,
            empty: true
        },
        offset: 0,
        pageSize: 15,
        pageNumber: 0,
        paged: true,
        unpaged: false
    },
    totalPages: 3,
    totalElements: 42,
    last: false,
    size: 15,
    number: 0,
    sort: {
        unsorted: true,
        sorted: false,
        empty: true
    },
    first: true,
    numberOfElements: 15,
    empty: false
}

export const loserMoviesMock: MovieList =
{
    content: [
        {
            id: 2,
            year: 1980,
            title: "Cruising",
            studios: [
                "Lorimar Productions",
                "United Artists"
            ],
            producers: [
                "Jerry Weintraub"
            ],
            winner: false
        },
        {
            id: 3,
            year: 1980,
            title: "The Formula",
            studios: [
                "MGM",
                "United Artists"
            ],
            producers: [
                "Steve Shagan"
            ],
            winner: false
        },
        {
            id: 4,
            year: 1980,
            title: "Friday the 13th",
            studios: [
                "Paramount Pictures"
            ],
            producers: [
                "Sean S. Cunningham"
            ],
            winner: false
        },
        {
            id: 5,
            year: 1980,
            title: "The Nude Bomb",
            studios: [
                "Universal Studios"
            ],
            producers: [
                "Jennings Lang"
            ],
            winner: false
        },
        {
            id: 6,
            year: 1980,
            title: "The Jazz Singer",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "Jerry Leider"
            ],
            winner: false
        },
        {
            id: 7,
            year: 1980,
            title: "Raise the Titanic",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "William Frye"
            ],
            winner: false
        },
        {
            id: 8,
            year: 1980,
            title: "Saturn 3",
            studios: [
                "Associated Film Distribution"
            ],
            producers: [
                "Stanley Donen"
            ],
            winner: false
        },
        {
            id: 9,
            year: 1980,
            title: "Windows",
            studios: [
                "United Artists"
            ],
            producers: [
                "Mike Lobell"
            ],
            winner: false
        },
        {
            id: 10,
            year: 1980,
            title: "Xanadu",
            studios: [
                "Universal Studios"
            ],
            producers: [
                "Lawrence Gordon"
            ],
            winner: false
        },
        {
            id: 12,
            year: 1981,
            title: "Endless Love",
            studios: [
                "PolyGram",
                "Universal Studios"
            ],
            producers: [
                "Dyson Lovell"
            ],
            winner: false
        },
        {
            id: 13,
            year: 1981,
            title: "Heaven's Gate",
            studios: [
                "United Artists"
            ],
            producers: [
                "Joann Carelli"
            ],
            winner: false
        },
        {
            id: 14,
            year: 1981,
            title: "The Legend of the Lone Ranger",
            studios: [
                "Associated Film Distribution",
                "Universal Studios"
            ],
            producers: [
                "Walter Coblenz"
            ],
            winner: false
        },
        {
            id: 15,
            year: 1981,
            title: "Tarzan, the Ape Man",
            studios: [
                "MGM",
                "United Artists"
            ],
            producers: [
                "John Derek"
            ],
            winner: false
        },
        {
            id: 17,
            year: 1982,
            title: "Annie",
            studios: [
                "Columbia Pictures"
            ],
            producers: [
                "Ray Stark"
            ],
            winner: false
        },
        {
            id: 18,
            year: 1982,
            title: "Butterfly",
            studios: [
                "Analysis Film Releasing"
            ],
            producers: [
                "Matt Cimber"
            ],
            winner: false
        }
    ],
    pageable: {
        sort: {
            unsorted: true,
            sorted: false,
            empty: true
        },
        offset: 0,
        pageSize: 15,
        pageNumber: 0,
        paged: true,
        unpaged: false
    },
    totalPages: 11,
    totalElements: 164,
    last: false,
    size: 15,
    number: 0,
    sort: {
        unsorted: true,
        sorted: false,
        empty: true
    },
    first: true,
    numberOfElements: 15,
    empty: false
}

