import Form from "./components/Form"
import { FormProvider } from './context/FormContext'

function App() {

  return (
    <FormProvider>
      <Form />
    </FormProvider>
  )

}

export default App;
