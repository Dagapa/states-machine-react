import { createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "inicial",
  states: {
    inicial: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUAR: "passengers",
        CANCEL: "inicial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "inicial",
      },
    },
    tickets: {
      on: {
        FINISH: "inicial"
      },
    },
  },
});

export default bookingMachine