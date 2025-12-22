"use client";

import { useUIStore } from "@/store/ui";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthModal() {
  const { isAuthOpen, closeAuth, authMode, setAuthMode } = useUIStore();

  if (!isAuthOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={closeAuth}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">
            {authMode === "login" ? "Login" : "Sign up"}
          </p>

          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={closeAuth}
          >
            ✕
          </button>
        </div>

        <div className="mt-4">
          {authMode === "login" ? <LoginForm /> : <SignupForm />}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          {authMode === "login" ? (
            <p>
              Don’t have an account?{" "}
              <button
                className="text-[#4fbf8b] font-medium"
                onClick={() => setAuthMode("signup")}
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                className="text-[#4fbf8b] font-medium"
                onClick={() => setAuthMode("login")}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
