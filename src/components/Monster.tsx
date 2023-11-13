import React, { FC, useState, useEffect } from 'react';
// @ts-ignore  
import monsters from '../../objects/monsters';
import { 
  formatParentString, 
  getIdByName,
  getMonsterByName, 
  getMonsterListByParent,
  monsterNames,
} from '../helpers/monsterDataHelper';
import ImageWithFallback from './ImageWithFallback';
import Parents from './Parents';
import ParentSelector from './ParentSelector';
import { MonsterNode } from './types';

interface MonsterProps {
  id: string;
  parent: string;
  setSelectedNode: Function;
  selectedNode: MonsterNode;
  updateMonsterSet: Function;
};

const Monster: FC<MonsterProps> = ({ id, parent, setSelectedNode, selectedNode, updateMonsterSet }) => {
  const [selectedValue, setSelectedValue] = useState<string>(parent);
  const [selectedParentSet, setSelectedParentSet] = useState<string | undefined>(undefined);
  const [parentOptions, setParentOptions] = useState<Array<Array<string>> | undefined>(undefined);
  const [acquired, setAcquired] = useState<boolean>(false);
  const parentData = getMonsterByName(parent);

  if (!selectedNode) {
    console.log('something went wrong ' + id);
    return (<></>);
  }

  useEffect(() => {
    if (acquired) {
      setParentOptions(undefined);
      setSelectedParentSet(undefined);
    }
    if (selectedValue && updateMonsterSet) {
      setParentOptions(undefined);
      setSelectedParentSet(undefined);
      updateMonsterSet(id, selectedValue);
      const parents = getMonsterByName(selectedValue)?.synthesis;
      if (parents) {
        if (Array.isArray(parents[0])) {
          if (parents.length > 1) {
            setParentOptions(parents);
          } else {
            setSelectedParentSet(formatParentString(parents[0]));
          }
        } else {
          setSelectedParentSet(formatParentString(parents));
        };
      };
    };
  }, [selectedValue, updateMonsterSet, acquired]);

  useEffect(() => {
    if (parentData) {
      setSelectedParentSet(formatParentString(parentData.synthesis));
    }
  }, [parentData]);

  useEffect(() => {
    if (id === selectedNode.id) {
      selectNode();
    }
  }, [acquired, id, parent, selectedNode.id, selectedValue])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const setMonsterAcquired = () => {
    setAcquired(!acquired);
  };

  const selectNode = () => {
    const nodeInfo: MonsterNode = {
      acquired: acquired,
      id: id,
      name: selectedValue,
      parent: parent,
      parentData: parentData,
      parentOptions: parentOptions,
      selectChange: handleSelectChange,
      selectedParentSet: selectedParentSet,
      setAcquired: setMonsterAcquired,
      setSelectedParentSet: setSelectedParentSet,
    };
    setSelectedNode(nodeInfo);
  }

  const generatedClassName = "monster-container" + (selectedNode.id === id ? " selected-node" : "");

  return (
    <div>
      <div className={generatedClassName} onClick={selectNode}>
        <ImageWithFallback
          alt={selectedValue}
          src={getIdByName(selectedValue) || selectedValue}
        />
      </div>
      {selectedParentSet && !acquired &&
        <Parents
          id={id}
          selected={selectedParentSet}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          updateMonsterSet={updateMonsterSet}
        />
      }
    </div>
  );
};

export default Monster;