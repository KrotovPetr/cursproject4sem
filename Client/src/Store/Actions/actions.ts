import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUserData = () => (dispatch: AppDispatch) => {
//     try{
//         dispatch(userSlice.actions.userFetchSend());
//         dispatch(userSlice.actions.userFetchSuccess("all is well"));
//     } catch (e) {
//         dispatch(userSlice.actions.userFetchError());
//     }
// }

export const fetchUserData = createAsyncThunk(
    'user/fetchData',
    async (_: void, thunkAPI) => {
        try {
            return await fetch(
                'https://jsonplaceholder.typicode.com/todos/1'
            ).then((response) => response.json());
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetch Error!');
        }
    }
);
