import React from 'react';
import css from "./FForm.module.css"
import {useForm} from "react-hook-form";

//Компонента формы ввода
const FForm = ({state, changeTextFormAction, addNewInfoAction, id}) => {
    // FormLogic
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: "onChange"});
    const onSubmit = async data => {
        data.text.trim() !== "" && addNewInfoAction({text: data.text.trim(), id})
        reset()
    };
    // ///////

    return <form className={css.fform} onSubmit={handleSubmit(onSubmit)}>
                <input type={"text"} {...register("text", {
                    required: "обязательное поле",
                })} />
                <input type="submit" value={"Post"}/>
        </form>
};

export default FForm;