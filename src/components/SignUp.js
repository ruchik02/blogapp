import React,{useState} from 'react'

const SignUp = () => {
    const [userRegistration, setUserRegistration] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
      });
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({ ...userRegistration, [name]: value });
      };    
      const onSubmit = async (event) => {
        console.log("You are in submit");
        event.preventDefault();
      }        
  return (
        <div className="bg-grey-lighter flex flex-col w-[30%] m-auto">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form onSubmit={onSubmit} className="w-full">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                value={userRegistration.firstName}
                onChange={handleInput}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="firstName"
                placeholder="First Name"
              />
              <input
                value={userRegistration.lastName}
                onChange={handleInput}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastName"
                placeholder="Last Name"
              />


              <input
                value={userRegistration.email}
                onChange={handleInput}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                value={userRegistration.password}
                onChange={handleInput}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-[#00B0FF] text-white hover:bg-blue-700 focus:outline-none my-1"
              >
                Create Account
              </button>
              <div className="text-gray-600 mt-6 text-center">
                Already have an account?
                <a
                  className="no-underline border-b border-blue text-blue-700 ml-2"
                  href="../login"
                >
                  Log in
                </a>
                .
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default SignUp