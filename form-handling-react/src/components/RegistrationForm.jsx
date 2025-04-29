import { useState } from "react";

function RegistrationForm() {
  

  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Form Submitted:", username , email , password);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}
          className=" flex flex-col justify-self-center p-6 bg-red-50 shadow-xl mt-4"
    >
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          className="border-b-2 border-gray-400 ml-2 hover:border-gray-500 m-3"
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className="border-b-2 border-gray-400 ml-2 hover:border-gray-500 m-3"

        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          className="border-b-2 border-gray-400 ml-2 hover:border-gray-500 m-3"

        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <button type="submit"
                      className="border-2 border-purple-300 rounded-lg flex justify-self-center p-2 bg-purple-100 hover:bg-purple-200 active:scale-95"
                
        >
          Submit
        </button>
      </div>
      {submitted && <p>Form submitted successfully!</p>}
    </form>
  );
}

export default RegistrationForm;
