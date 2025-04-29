
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm';
function App() {

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold text-gray-500">Registration Form with Controlled Components</h1>
      <RegistrationForm /> 
      
      <h1 className="text-center mt-10 text-3xl font-bold text-gray-500">Registration Form with Formik</h1>
      <FormikForm /> 
    </div>
  );
}

export default App;