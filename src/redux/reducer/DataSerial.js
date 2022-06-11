import { getMovies } from "../../api/getMovies"

const SERIAL_SET = "SERIAL_SET"
const MOVIES_TOP = "MOVIES_TOP"
const MOVIES_ALL = "MOVIES_ALL"
const LOADER = "LOADER"
const DATA_MOVIES = 'DATA_MOVIES'
const CLEAR_MOVIES = 'CLEAR_MOVIES'

const initState = {
    movies: [],
    visibleTopMovies: 3,
    loader: false,
    dataMovies: { date: { year: '', moon: '', day: "" }, nameMoon: "" },
    infoBlockMovies: []
}

const DataSerial = (state = initState, action) => {

    switch (action.type) {
        case LOADER:
            return {
                ...state,
                loader: action.loader
            }
        case DATA_MOVIES:
            return {
                ...state,
                dataMovies: {
                    date: action.date,
                    nameMoon: action.nameMoon
                }
            }
        case CLEAR_MOVIES:
            return {
                ...state,
                infoBlockMovies: []
            }

        case SERIAL_SET: {
            let arrMoviesTop = [];
            for (let i = 0; i < state.visibleTopMovies; i++) {
                if (action.movies[i])
                    arrMoviesTop.push(action.movies[i])
            }
            return {
                ...state,
                movies: action.movies,
                infoBlockMovies: [
                    ...state.infoBlockMovies,
                    {
                        date: action.date,
                        movies: arrMoviesTop,
                        number: action.movies.length - state.visibleTopMovies
                    }
                ]
            }
        }

        case MOVIES_TOP: {
            let newArr = state.infoBlockMovies.map(e => {
                if (e.date === action.date) {
                    let arrMoviesTop = [];
                    for (let i = 0; i < state.visibleTopMovies; i++) {
                        if (e.movies[i])
                            arrMoviesTop.push(e.movies[i])
                    }
                    return { ...e, movies: arrMoviesTop, number: e.movies.length - 3 }
                }
                else
                    return { ...e }
            })
            return {
                ...state,
                infoBlockMovies: newArr
            }
        }

        case MOVIES_ALL:
            let newArr = state.infoBlockMovies.map(e => e.date === action.date ? ({ ...e, movies: action.movies, number: 3 }) : ({ ...e }));
            return {
                ...state,
                infoBlockMovies: newArr,
            }

        default:
            return state
    }
}

export default DataSerial

const loader = (loader) => ({ type: LOADER, loader })
const dataMovies = (date, nameMoon) => ({ type: DATA_MOVIES, date, nameMoon })

export const getMoviesTop = (date) => ({ type: MOVIES_TOP, date })

export const setSerial = (movies, date) => ({ type: SERIAL_SET, movies, date })
export const setALLSerial = (movies, date) => ({ type: MOVIES_ALL, movies, date })

export const clearMovies = () => ({ type: CLEAR_MOVIES })

export const getMoviesAll = (date) => {
    return async (dispatch) => {
        dispatch(loader(true))
        let oneDataMovies = await getMovies(date)
        dispatch(setALLSerial(oneDataMovies, date))
        dispatch(loader(false))
    }
}
export const setDateSerial = (date) => {
    return async (dispatch) => {

        console.log(123)

        let moon = date.moon + 1,
            day = date.day,
            moonString = moon < 10 ? '0' + moon : moon, dayString = day < 10 ? '0' + day : day,
            movies_date = date.year + '-' + moonString + '-' + dayString;

        const nameMoon = new Date(date.year, date.moon).toLocaleString("ua", { month: "long" });

        dispatch(loader(true))
        dispatch(dataMovies(date, nameMoon))
        let oneDataMovies = await getMovies(movies_date)
        dispatch(setSerial(oneDataMovies, movies_date))
        dispatch(loader(false))
    }
}

