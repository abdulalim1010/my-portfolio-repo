import toast from "react-hot-toast";
import UseAuth from "./UseAuth";

const GoogleLoginButton = () => {
  const { signInWithGoogle } = UseAuth();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (result) => {
        const user = result.user;
        console.log("Google Sign In successful:", user);
        toast.success(`Welcome ${user.displayName || "User"}!`);

        // ✅ Save to MongoDB
        await fetch("https://my-portfolio-server-theta-ivory.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: user.displayName || "No Name",
            email: user.email,
            role: "user", // default
          }),
        });

        // Optional: redirect
        // navigate("/dashboard");
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
