"use client";

import { useMemo, useState } from "react";

import { Calendar } from "@/app/_components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ptBR } from "date-fns/locale/pt-BR";
import { generateDayTimeList } from "../_helpers/hours";
import { Button } from "@/app/_components/ui/button";
import { Search } from "lucide-react";

const ReservaSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hour, setHour] = useState<String | undefined>();

  const handleDateClick = (date: Date | undefined) => {
    setDate(date);
    setHour(undefined);
  };

  const handleHourClick = (time: string) => {
    setHour(time);
  };

  const modifiersStyles = {
    selected: {
      backgroundColor: "#0057FF",
    },
  };

  const timeList = useMemo(() => {
    return date ? generateDayTimeList(date) : [];
  }, [date]);

  console.log(timeList);

  return (
    <section id="reserva" className="py-[6rem] bg-second_dark">
      <div className="container mx-auto flex flex-col space-y-[2rem]">
        <h2 className="text-center tracking-[.35rem] text-white/50 text-[1rem] font-medium uppercase">
          faça uma reserva
        </h2>
        <Card className="bg-dark border-none rounded-[10px]">
          <CardHeader>
            <h3 className="text-white text-[1rem]">
              Selecione um serviço, escolha a data e agende um horário
            </h3>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateClick}
              locale={ptBR}
              fromDate={new Date()}
              className="text-white border border-solid border-gray rounded-[10px]"
              modifiersStyles={modifiersStyles}
              styles={{
                head_cell: {
                  width: "100%",
                  textTransform: "capitalize",
                  borderTop: "1px solid #2C2C2C",
                  paddingTop: "10px",
                },
                cell: {
                  width: "100%",
                },
                button: {
                  width: "100%",
                  borderRadius: "4px",
                },
                nav_button_previous: {
                  width: "32px",
                  height: "32px",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "1px solid #2C2C2C",
                },
                nav_button_next: {
                  width: "32px",
                  height: "32px",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "1px solid #2C2C2C",
                },
                caption: {
                  textTransform: "capitalize",
                },
              }}
            />
            {date && (
              <div className="[&::-webkit-scrollbar]:hidden gap-4 flex items-center overflow-x-auto py-4 my-[2rem] border-t border-b border-solid border-gray">
                {timeList.map((time) => (
                  <Button
                    onClick={() => handleHourClick(time)}
                    className={
                      hour === time
                        ? "p-2 bg-blue rounded-[10px] border-none text-white"
                        : "p-2 rounded-[10px] bg-second_dark text-white"
                    }
                    key={time}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            )}
            <div className="w-full max-h-full flex flex-col">
              <div className="flex flex-col space-y-2">
                <p className="text-white">Selecione o serviço desejado</p>
                <div className="flex items-center">
                  <input
                    type="search"
                    placeholder="Buscar"
                    className="w-full bg-transparent border border-solid border-gray outline-none text-gray p-2 rounded-tl-[10px] rounded-bl-[10px] placeholder:text-gray"
                  />
                  <button className="w-fit p-2 bg-second_dark border border-solid border-gray rounded-tr-[10px] rounded-br-[10px] text-white">
                    <Search />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReservaSection;
