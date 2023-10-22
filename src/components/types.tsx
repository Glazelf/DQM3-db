import { ChangeEvent, ChangeEventHandler } from 'react';

export type MonsterSet = {
  [key: string]: string;
};

export type MonsterNode = {
  acquired: boolean;
  id: string;
  name: string;
  parent: string;
  parentData: string;
  parentOptions?: Array<Array<string>>;
  selectChange: ChangeEventHandler<HTMLSelectElement>;
  selectedParentSet?: string;
  setAcquired: ChangeEventHandler<HTMLInputElement>;
  setSelectedParentSet: Function;
}