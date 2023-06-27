"use client";

import axios, { AxiosError } from "axios";
import { ReactNode, createContext, useState } from "react";
import { api } from "src/services/api";

interface User {
  name: string;
  email: string;
  phone: string;
  id: string;
}

interface authContextType {
  user: User;
  signIn: (data: any) => typeof data;
  signUp: (data: any) => void;
  setUser: (data: any) => void;
  userIsLogged: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as authContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  async function userTokenUpdate(token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  function signUp(data: any) {
    try {
      fetch("https://back4food-1ifogmmqz-lorenzocoracini.vercel.app/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((data) => {
          if (data.ok) {
            return data.json();
          } else {
            throw new Error("Cadastro não foi realizado.");
          }
        })
        .then((data) => {
          if (data) {
            alert("Seu cadastro foi feito com sucesso!");
          }
        });
    } catch (error) {
      alert(error);
    }
  }

  async function signIn(data: any) {
    try {
      const res = await axios.post(
        "https://back4food-1ifogmmqz-lorenzocoracini.vercel.app/login",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      await userTokenUpdate(res.data.token);

      return res;
    } catch (error: any) {
      if (error.response.status == 400) {
        throw Error("Email ou senha inválidos.");
      } else {
        throw Error("Não foi possível entrar no momento.");
      }
    }
  }

  async function userIsLogged() {
    checkTokenValidity();
  }

  const checkTokenValidity = () => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      fetch("https://back4food-1ifogmmqz-lorenzocoracini.vercel.app/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => setUser(data))
        .catch((error) => {
          localStorage.removeItem("jwtToken");
        });
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signUp, setUser, userIsLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}
