import instance from "./axios";

export type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  const res = await instance.post("/api/user/login", payload);
  return res.data;
}
export type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

export async function registerUser(payload: SignupPayload) {
  const res = await instance.post("/api/user/register", payload);
  return res.data;
}
