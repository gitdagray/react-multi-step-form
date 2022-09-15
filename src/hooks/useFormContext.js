import { useContext } from "react"
import FormContext from "../context/FormContext"

const useFormContext = () => {
    return useContext(FormContext)
}

export default useFormContext