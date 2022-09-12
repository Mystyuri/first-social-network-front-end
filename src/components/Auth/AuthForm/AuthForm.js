import React, {useState} from 'react';
import css from "./AuthForm.module.css"
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";


const AuthForm = ({logic, authAction, error, imgCaptchaUrl}) => {
    let [state, getState] = useState()
    let navigator = useNavigate()

    const info = {
        textLength: 55
    }

    // FormLogic
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: "onChange"});
    const onSubmit = async data => {
        getState(1)
        await authAction(data)
        reset({
            password: "",
            captcha: "",
        })
        getState(0)
        logic === true && navigator(-1)
    };
    // ///////

    return (
        <div className={css.AuthForm}>
            <div className={css.background} onClick={() => navigator(-1)}></div>
            <div className={css.block}>
                <form className={css.form} onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <span data-error={error}>{error}</span>
                    </div>
                    <div data-error={errors?.email?.message}>
                        <input type="email" placeholder=" " disabled={logic} {...register("email", {
                            required: "обязательное поле",
                            maxLength: {value: info.textLength, message: `Не более ${info.textLength} символов`},
                            // pattern: {value: /^\S+@\S+$/i}
                        })} />
                        <label data-error={errors?.email?.message}>Email</label>
                    </div>
                    <div data-error={errors?.password?.message}>
                        <input type="password" placeholder=" " disabled={logic} {...register("password", {
                            required: "обязательное поле",
                            maxLength: 100,
                        })} />
                        <label data-error={errors?.password?.message}>Password</label>
                    </div>
                    {imgCaptchaUrl && <img src={imgCaptchaUrl} alt={imgCaptchaUrl}/>}
                    {imgCaptchaUrl &&  <div data-error={errors?.password?.message}>
                        <input type="captcha" placeholder=" " disabled={logic} {...register("captcha", {
                        required: "обязательное поле",
                        maxLength: 100,
                    })} />
                        <label data-error={errors?.captcha?.message}>Captcha</label>
                        </div>
                    }

                    <div>
                        <input type="checkbox" disabled={logic} {...register("rememberMe", {})} />
                        <span style={{"color":"var(--text-color-alt)"}}>Remember me</span>
                    </div>
                    <div>
                        <input type="submit" value={state === 1 ? "" : "Login"} style={{"width": "75px"}}
                               disabled={!isValid || state === 1}/>
                    </div>
                    {/*<a target="_blank" href="https://social-network.samuraijs.com/signUp">New Login</a>*/}
                </form>
            </div>
        </div>
    );
};

export default AuthForm;