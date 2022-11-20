export type TodoType = {
  id: number;
  text: string;
  color: "gray";
  checked: boolean;
};

export type ObjectIndexType = {
  [key: string]: number | undefined;
};
