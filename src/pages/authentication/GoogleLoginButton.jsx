import toast from "react-hot-toast";
import UseAuth from "./UseAuth";

const GoogleLoginButton  = () => {
  const { signInWithGoogle } = UseAuth(); // ✅ don't use AuthContext here

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google Sign In successful:", result.user);
        toast.success(`Welcome ${result.user.displayName || "User"}!`);
        // optional: navigate('/dashboard') if needed
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
        toast.error(error.message);
      });
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-4">
      Continue with Google 🟢
    </button>
  );
};

export default GoogleLoginButton;
