// Framework imports

//Dependency imports
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { nanoid } from "nanoid";

type Countdown = {
  id: string;
  title: string;
  date: string;
  color: string;
};

type State = {
  countdowns: Countdown[];
  addCountdown: (countdown: Countdown) => void;
};

const countdownStore = (set: any) => ({
  countdowns: [] as Countdown[],
  addCountdown: (countdown: any) => {
    const newCountdown = { ...countdown, id: nanoid() };
    set((state: State) => ({
      countdowns: [...state.countdowns, newCountdown],
    }));
  },
});

const useCountdownStore = create(
  devtools(persist(countdownStore, { name: "countdowns" }))
);
export default useCountdownStore;
