interface SignUpProps {
  className?: string;
  onClick?: () => void;
  handleCloseModal?: () => void;
}

const SignUp = ({ 
    className = "",
    onClick,
    handleCloseModal }: SignUpProps) => {
  return (
    <div>
      <div className="w-full flex justify-end pt-1 pr-3">
        <button
          onClick={handleCloseModal}
          className="text-gray-600 cursor-pointer hover:text-black text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>
      </div>
      <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
      <p className="text-gray-600 text-center mb-4">
        Please sign in to your account
      </p>

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md my-5 hover:bg-blue-700 transition cursor-pointer">
        Sign In
      </button>
      <hr className="" />
      <p className="text-sm text-gray-500 text-center my-4">
        Don't have an account?
        <span className="text-blue-600 cursor-pointer hover:underline ml-1">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SignUp;
