//Dependency imports
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { nanoid } from "nanoid";

type Countdown = {
  id: string;
  title: string;
  date: any;
  color: string;
};

type State = {
  countdowns: Countdown[];
  addCountdown: (countdown: Countdown) => void;
};

const countdownStore = (set: any) => ({
  countdowns: [] as Countdown[],
  addCountdown: (countdown: Countdown) => {
    const newCountdown = { ...countdown, id: nanoid() };
    set((state: State) => ({
      countdowns: [...state.countdowns, newCountdown],
    }));
  },
  deleteCountdown: (id: string) => {
    set((state: State) => ({
      countdowns: state.countdowns.filter((cd) => cd.id !== id),
    }));
  },
});

const useCountdownStore = create(
  devtools(persist(countdownStore, { name: "countdowns" }))
);

export default useCountdownStore;
