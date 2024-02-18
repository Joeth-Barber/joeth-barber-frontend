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
        <h1 className="text-white/70 font-bold text-[1.5rem]">Cadastre-se</h1>
        <form className="w-full max-h-full flex flex-col py-[2rem] space-y-6">
          <div className="w-full flex items-center gap-4">
            <div className="flex flex-col space-y-0">
              <label className="text-white/70">Nome</label>
              <input
                className="bg-transparent border-b border-solid border-gray outline-none text-white/50 py-2 placeholder:text-gray"
                type="text"
                placeholder="Digite o seu nome"
                {...register("name")}
              />
              <span className="text-red-500 text-[14px] py-2">
                {errors.name?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-0">
              <label className="text-white/70">Apelido</label>
              <input
                className="bg-transparent border-b border-solid border-gray outline-none text-white/50 py-2 placeholder:text-gray"
                type="text"
                placeholder="Digite o seu apelido"
                {...register("nickname")}
              />
              <span className="text-red-500 text-[14px] py-2">
                {errors.nickname?.message}
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-0">
            <label className="text-white/70">E-mail</label>
            <input
              className="bg-transparent border-b border-solid border-gray outline-none text-white/50 py-2 placeholder:text-gray"
              type="email"
              placeholder="Digite o seu e-mail"
              {...register("email")}
            />
            <span className="text-red-500 text-[14px] py-2">
              {errors.email?.message}
            </span>
          </div>
          <div className="flex flex-col space-y-0">
            <label className="text-white/70">Celular</label>
            <input
              className="bg-transparent border-b border-solid border-gray outline-none text-white/50 py-2 placeholder:text-gray"
              type="email"
              placeholder="(XX) XXXXX-XXXX"
              {...register("phone")}
            />
            <span className="text-red-500 text-[14px] py-2">
              {errors.phone?.message}
            </span>
          </div>
          <div className="w-full flex items-center gap-4">
            <div className="flex flex-col space-y-0">
              <label className="text-white/70">Nova senha</label>
              <input
                className="bg-transparent border-b border-solid border-gray outline-none text-white/50 py-2 placeholder:text-gray"
                type="password"
                placeholder="Digite o seu nome"
                {...register("password")}
              />
              <span className="text-red-500 text-[14px] py-2">
                {errors.password?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-0">
              <label className="text-white/70">Confirmar senha</label>
              <input
                className="bg-transparent border-b border-solid border-gray outline-none text-white/50 py-2 placeholder:text-gray"
                type="password"
                placeholder="Digite o seu apelido"
                {...register("cfPassword")}
              />
              <span className="text-red-500 text-[14px] py-2">
                {errors.cfPassword?.message}
              </span>
            </div>
          </div>
        </form>
        <div className="flex flex-col text-center space-y-2">
          <button
            onClick={() => handleSubmit(onSubmit)()}
            className="bg-blue w-full text-white font-medium p-2 rounded-[10px] hover:bg-blue/60 duration-150"
          >
            Cadastrar
          </button>
          <span className="text-white/50">ou</span>
          <button className="bg-white flex items-center justify-center gap-2 w-full font-medium p-2 rounded-[10px]">
            <Image
              src="/google-icon.svg"
              alt="Google icon"
              width={24}
              height={24}
            />
            Cadastre-se com Google
          </button>
        </div>
        <div className="w-full text-center pt-[1.5rem]">
          <Link href="/login">
            <span className="text-[16px] text-white">
              Já tem uma conta? <strong className="underline">Entrar</strong>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
