import { createMachine } from "xstate";

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    states: {
      initial: {
        on: {
          START: {
            target: "search",
            actions: "imprimirInicio",
          },
        },
      },
      search: {
        entry: "imprimirEntrada",
        exit: "imprimirSalida",
        on: {
          CONTINUE: "passengers",
          CANCEL: "initial",
        },
      },
      tickets: {
        on: {
          FINISH: "initial",
        },
      },
      passengers: {
        on: {
          DONE: "tickets",
          CANCEL: "initial",
        },
      },
    },
  },
  {
    actions: {
      imprimirInicio: () => console.log("Imprimir Inicio"),
      imprimirEntrada: () => console.log("Imprimir Entrada a search"),
      impirmirSalida: () => console.log("Imprimir Salida del search"),
    },
  }
);

export default bookingMachine;
