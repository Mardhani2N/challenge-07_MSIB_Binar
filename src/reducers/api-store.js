import apiConfig from "../config/api.json"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAsyncData = createAsyncThunk(
    "apiStore/getAsyncData",
    async () => {
        const listCars = await fetch(apiConfig.URL)
        const listCarsJson = await listCars.json()

        return listCarsJson
    }
)

export const apiStore = createSlice({
    name: "apiStore",
    initialState: {
        cars: [],
        filterCars: [],
        filter: {}
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
            state.filterCars = state.cars.filter(car => {
                let time = new Date(car.availableAt)
                let selectDate = new Date(state.filter.date)
                console.log(selectDate.getTime())
                return car.capacity === state.filter.passenger && selectDate.getTime() >= time.getTime();
            })

        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAsyncData.fulfilled, (state, action) => {
            let results = [...action.payload]
            let cars = []
            for (let i = 0; i < results.length; i++) {
                let item = results[i]
                item.image = item.image.replaceAll("./", apiConfig.IMAGE_BASE_URL + "/")
                cars.push(item)
            }
            state.cars = action.payload;
            state.filterCars = action.payload
        })
    }
})

export const { setFilter } = apiStore.actions
export default apiStore.reducer