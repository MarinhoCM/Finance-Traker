"use client";

import HeaderCard from "@/components/HeaderCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  FinancesListSection
} from "@/components/FinancesListSection";
import { useState } from "react";

export default function Home() {
  const [isExpense, setExpense] = useState();

  return (
    <>
      <div className="gap-10 grid justify-center align-center mt-10">
        <Header>
          <HeaderCard className="rounded-[10px] bg-[#212121] p-8 w-[80rem]">
            <h1 className="font-mono text-center text-2xl">
              Registro de Despesas / Entradas
            </h1>
          </HeaderCard>
        </Header>
      </div>
      <div className="flex justify-center pt-10">
        <div className="flex gap-6 p-6 border-[4px] border-double border-gray-500 rounded-lg">
          <Button
            className="font-mono text-md h-[4rem] cursor-pointer"
            variant="green"
            size="extra"
          >
            Entradas
          </Button>
          <Button
            className="font-mono text-md h-[4rem] cursor-pointer"
            variant="destructive"
            size="extra"
          >
            Despesas
          </Button>
        </div>
      </div>
      <section className="w-1/2 mx-auto pt-15 h-1/2">
        <FinancesListSection />
      </section>
    </>
  );
}
