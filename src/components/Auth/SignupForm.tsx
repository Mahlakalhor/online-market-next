"use client";

import { useForm } from "react-hook-form";
import { registerUser } from "@/api/auth";
import { useUIStore } from "@/store/ui";

type SignupValues = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const closeAuth = useUIStore((s) => s.closeAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignupValues>();

  const onSubmit = async (values: SignupValues) => {
    try {
      const data = await registerUser(values);

      if (data?.token) localStorage.setItem("token", data.token);

      closeAuth();
    } catch (err: any) {
      console.log(
        "REGISTER ERROR:",
        err?.response?.status,
        err?.response?.data
      );
      setError("root", {
        message: err?.response?.data?.message || "Register failed",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          className="w-full border border-gray-300 rounded-md px-3 h-11 outline-none"
          placeholder="name"
          {...register("name", { required: "name is required" })}
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          className="w-full border border-gray-300 rounded-md px-3 h-11 outline-none"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-md px-3 h-11 outline-none"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      {errors.root?.message && (
        <p className="text-sm text-red-500">{errors.root.message}</p>
      )}

      <button
        disabled={isSubmitting}
        className="w-full h-11 rounded-md bg-[#4fbf8b] text-white font-medium hover:opacity-90 transition disabled:opacity-60"
      >
        {isSubmitting ? "Loading..." : "Create account"}
      </button>
    </form>
  );
}
