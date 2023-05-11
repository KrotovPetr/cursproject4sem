
import {fetchUserData} from "../../Actions/actions";
import {userSlice} from "./userSlice";

const initialState: any = {
    isUserDataRequestSend: false,
    isUserDataRequestSuccess: false,
    isUserDataRequestError: false,
    userData: null,
    userToken: null,
    fetchErrorData: "",
    refreshToken:"",
    isLogin: false
}

// Arrange-Act-Assert-Teardown pattern
describe('user reducer tests', ()=>{
    it('should handle initial state', () => {
        expect(userSlice.reducer(undefined, { type: 'unknown' })).toEqual({
            isUserDataRequestSend: false,
            isUserDataRequestSuccess: false,
            isUserDataRequestError: false,
            isLogin:false,
            userData: null,
            userToken: null,
            fetchErrorData: "",
            refreshToken:""
        });
    });

    it('should handle fetchUserData pending', ()=>{
        const data = {isUserDataRequestSend: false,
            isUserDataRequestSuccess: false,
            isUserDataRequestError: false,}
        const action = fetchUserData.pending;
        const nextState: any = userSlice.reducer({...initialState, ...data}, action)

        expect(nextState).toEqual(expect.objectContaining({
            isUserDataRequestSend: true,
            isUserDataRequestSuccess: false,
            isUserDataRequestError: false,
        }))
    })

    it('should handle fetchUserData rejected', ()=>{//<--name
        const data = { //<---arrange
            ...initialState,
            isUserDataRequestSend: true,
            isUserDataRequestSuccess: false,
            isUserDataRequestError: false
        }

        const nextState: any = userSlice.reducer(data, fetchUserData.rejected)//<---act

        expect(nextState).toEqual(expect.objectContaining({//<--assert
            isUserDataRequestSend: false,
            isUserDataRequestSuccess: false,
            isUserDataRequestError: true,
        }))
    })

    it('should handle fetchUserData success', ()=>{
        const data = {isUserDataRequestSend: true,
            isUserDataRequestSuccess: false,
            isUserDataRequestError: false,}
        const actionData: string = "Some info about user";

        const nextState: any = userSlice.reducer({...initialState, ...data}, fetchUserData.fulfilled(actionData, "fulfilled"))

        expect(nextState).toEqual(expect.objectContaining({
            isUserDataRequestSend: false,
            isUserDataRequestSuccess: true,
            isUserDataRequestError: false,
            userData: actionData
        }));
    })
})

export {}
