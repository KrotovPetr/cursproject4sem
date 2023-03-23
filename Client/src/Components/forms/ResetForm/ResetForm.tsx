import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
// import {loginAPI} from "../../../Store/ApiQuery/UserService";

interface  IFormInput {
    email: string
}

const ResetForm = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    // const [resetUserPassword]  = loginAPI.useCreateLoginMutation();
    // const onSubmit: SubmitHandler<IFormInput> = (data) => {
    //     resetUserPassword(data);
    // };
    return (
        <div>

        </div>
    );
};

export default ResetForm;