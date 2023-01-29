import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
    name: "userData",
    initialState: {
        image: "https://art-gallery-latam.api.hbo.com/images/e254b881-7855-462d-9f27-0fb60e26a1d4/avatar?size=250x250&format=png",
        id: "",
        name: "",
    },
    reducers: {
        initUserData: (state, action) => {
            return action.payload;
        },
        setUserProfileImage: (state, action) => {
            state.image = action.payload;
        },
        removeProfileImage: (state, action) => {
            state.image = "";
        },

        removeUserData: (state, action) => {
            return{
                image: "",
                id: "",
                name: "",
            }
        }


    },
});

export const { initUserData, setUserProfileImage, removeProfileImage,removeUserData } =
    userData.actions;
export default userData.reducer;
