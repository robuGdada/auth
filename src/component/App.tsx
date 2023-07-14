import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import { useRegistration } from "@/hooks/useRegistration";
import { TUser } from "@/types/TUser";

interface CredentialResponse {
  /** This field is the returned ID token */
  credential?: string;
  /** This field sets how the credential is selected */
  select_by?:
    | "auto"
    | "user"
    | "user_1tap"
    | "user_2tap"
    | "btn"
    | "btn_confirm"
    | "brn_add_session"
    | "btn_confirm_add_session";
  clientId?: string;
}
const App = () => {
  const router = useRouter();
  const { mutate } = useRegistration();

  const handleGoogleLoginSuccess = async (credentialResponse: any) => {
    console.log("credentialResponse:", credentialResponse);
    const tokenId = credentialResponse;
    console.log("tokenIdResponse:", tokenId);

    if (!tokenId) {
      console.log("Token ID is missing");
      return;
    }

    const newUser: TUser = {
      googleToken: tokenId.credential,
    };
    console.log("NewResponse:", newUser);

    try {
      mutate(newUser, {
        onSuccess: (data) => {
          console.log("User created:", data);
          router.push("/registration");
        },
        onError: (error) => {
          console.log("Failed to create user:", error);
        },
      });
    } catch (error) {
      console.log("Registration failed:", error);
    }
  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");
  };
  const CLIENT_ID =
    "452008793601-ep24gi1v4lorccsqe7a3aj30la2beufi.apps.googleusercontent.com";
  console.log("clientId::", CLIENT_ID);
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginError}
      />
    </GoogleOAuthProvider>
  );
};

export { App };
