export interface IAction<T> {
  type: string;
  payload: {
    [key: string]: T;
  };
}
