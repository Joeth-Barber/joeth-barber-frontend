"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthValidationSchema } from "../_validations/auth";
import Link from "next/link";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthValidationSchema),
  });

  const onSubmit = (data: any) => {
    console.log("data:", data);
  };

  return (
    <div className="w-full py-[8rem] lg:py-0 lg:h-screen lg:flex lg:items-center lg:justify-center">
      <div className="container mx-auto">
        <h1 className="text-white/70 font-bold text-[1.5rem]">Entrar</h1>
        <form className="w-full max-h-full flex flex-col py-[2rem] space-y-6">
          <div className="flex flex-col space-y-0">
            <label className="text-white/70">E-mail</label>
            <input
              className="bg-transparent border-b border-solid border-gray outline-none text-gray py-2 placeholder:text-gray"
              type="text"
              placeholder="Digite o seu e-mail"
              {...register("email")}
            />
            <span className="text-red-500 text-[14px] py-2">
              {errors.email?.message}
            </span>
          </div>
          <div className="flex flex-col space-y-0">
            <label className="text-white/70">Senha</label>
            <input
              className="bg-transparent border-b border-solid border-gray outline-none text-gray py-2 placeholder:text-gray"
              type="password"
              placeholder="Digite a sua senha"
              {...register("password")}
            />
            <span className="text-red-500 text-[14px] py-2">
              {errors.password?.message}
            </span>
          </div>
        </form>
        <div className="flex flex-col text-center space-y-2">
          <button
            onClick={() => handleSubmit(onSubmit)()}
            className="bg-blue w-full text-white font-medium p-2 rounded-[10px] hover:bg-blue/60 duration-150"
          >
            Entrar
          </button>
          <span className="text-white/50">ou</span>
          <button className="bg-white flex items-center justify-center gap-2 w-full font-medium p-2 rounded-[10px]">
            <Image
              src="/google-icon.svg"
              alt="Google icon"
              width={24}
              height={24}
            />
            Entrar com Google
          </button>
        </div>
        <div className="w-full text-center pt-[1.5rem]">
          <Link href="/register">
            <span className="text-[16px] text-white">
              Ainda não tem uma conta?{" "}
              <strong className="text-blue">Cadastre-se</strong>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
