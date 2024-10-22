import {  forwardRef, InputHTMLAttributes } from "react";
import { Error } from "../../../Components";
import style from "./TextInputField.module.css"
interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement>
{
ErrorContent?:string
}
const  TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>((props : TextInputFieldProps , ref) =>
{
    const {ErrorContent ,...rest}  = props;
    return ( <>
    <input ref={ref} className={style["input-field"]}  {...rest} />
    <Error content={ErrorContent} />
    </>
    );
})
export default TextInputField;