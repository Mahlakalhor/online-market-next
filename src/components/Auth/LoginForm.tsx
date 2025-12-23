"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login, type LoginPayload } from "@/api/auth";
import { useUIStore } from "@/store/ui";

type LoginValues = LoginPayload;

export default function LoginForm() {
  const closeAuth = useUIStore((s) => s.closeAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = data?.token;
      if (token) localStorage.setItem("token", token);

      closeAuth();
    },
  });

  const onSubmit = (values: LoginValues) => {
    mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          className="w-full border border-gray-300 rounded-md px-3 h-11 outline-none"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-md px-3 h-11 outline-none"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
      </div>

      {error ? (
        <p className="text-xs text-red-500">
          Login failed. Check email/password.
        </p>
      ) : null}

      <button
        disabled={isPending}
        className="w-full h-11 rounded-md bg-[#4fbf8b] text-white font-medium hover:opacity-90 transition disabled:opacity-60"
      >
        {isPending ? "Loading..." : "Login"}
      </button>
    </form>
  );
}