import Billing from "./Billing"
import OptIn from "./OptIn"
import Shipping from "./Shipping"
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Billing />,
        1: <Shipping />,
        2: <OptIn />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs