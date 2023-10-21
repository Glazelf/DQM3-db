import React, { FC } from 'react';
import Monster from './Monster';
import { MonsterNode } from './types';
import { getMonsterNameById } from '../helpers/monsterDataHelper';

interface ParentsProps {
  id: string;
  selected: string;
  selectedNode: MonsterNode;
  setSelectedNode: Function;
  updateMonsterSet: Function;
};

const Parents: FC<ParentsProps> = ({ id, selected, selectedNode, setSelectedNode, updateMonsterSet }) => {
  return (
    <div>
      <div className="set">
        <Monster 
          id={`${id}L`}
          parent={getMonsterNameById(selected.split(',')[0].trim())} 
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          updateMonsterSet={updateMonsterSet} 
        />
      </div>
      <div className="set">
        <Monster 
          id={`${id}R`}
          parent={getMonsterNameById(selected.split(',')[1].trim())}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          updateMonsterSet={updateMonsterSet} 
        />
      </div>
    </div>
  );
};

export default Parents;