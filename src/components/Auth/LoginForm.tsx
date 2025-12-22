"use client";

import { useForm } from "react-hook-form";

type LoginValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>();

  const onSubmit = async (values: LoginValues) => {
    console.log("login submit:", values);
    // بعداً اینجا api login رو می‌زنیم
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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

      <button
        disabled={isSubmitting}
        className="w-full h-11 rounded-md bg-[#4fbf8b] text-white font-medium hover:opacity-90 transition disabled:opacity-60"
      >
        {isSubmitting ? "Loading..." : "Login"}
      </button>
    </form>
  );
}
