import React, { FC } from 'react';

import { getMonsterByName, getMonsterListByParent, monsterNames } from '../helpers/monsterDataHelper';
import { MonsterNode } from './types';
import ParentSelector from './ParentSelector';

interface MonsterInfoProps {
  selectedNode: MonsterNode;
}

const MonsterInfo: FC<MonsterInfoProps> = ({ selectedNode }) => {
  const {
    acquired,
    id,
    name,
    parent,
    parentData,
    parentOptions,
    selectChange,
    selectedParentSet,
    setAcquired,
    setSelectedParentSet,
  } = selectedNode;
  const monster = getMonsterByName(name);
  const fullList = getMonsterListByParent(parent) || monsterNames();

  if (id === '') {
    return (
      <div className="monster-details">
        Select a node
      </div>
    );
  }

  if (!monster && (name === '' || name.indexOf('_') === 0)) {
    return (
      <div className="monster-details">
        <select
          className='monster-details-select'
          value={name}
          onChange={selectChange}
          disabled={(!!parent && !!parentData) || acquired}
        >
          {fullList.map((monsterName: string) => (
            <option key={`family-${monsterName}`} value={monsterName}>{monsterName}</option>
          ))}
        </select>
      </div>
    );
  }

  if (!monster && name !== '') {
    return (
      <div className="monster-details">
        Monster Not Found!
      </div>
    );
  }

  return (
    <div className="monster-details">
      <div className="monster-name-and-drops">
        <div className="monster-details-overview">
          <h2>{monster.name}</h2>
          <h4> Number: {monster.number} Rank: {monster.rank}</h4>
          <h4> Description: {monster.description} </h4>
        </div>

        <div className="monster-details-drops">
          <h3>Drops</h3>
          <p>Normal Drop: {monster.drops?.normal}</p>
          <p>Rare Drop: {monster.drops?.rare}</p>
        </div>
        <select
          className="monster-detail-select"
          value={name}
          onChange={selectChange}
          disabled={(!!parent && !!parentData) || acquired}
        >
          {fullList.map((monsterName: string) => (
            <option key={`select-${monsterName}`} value={monsterName}>{monsterName}</option>
          ))}
        </select>
        {parentOptions && !acquired &&
          <ParentSelector
            parentOptions={parentOptions}
            selectedParentSet={selectedParentSet}
            setSelectedParentSet={setSelectedParentSet}
          />
        }
        <div className="acquired-container">
          <label>
            <input
              type="checkbox"
              checked={acquired}
              onChange={setAcquired}
            />
            Acquired?
          </label>
        </div>
      </div>

      <div className="monster-details-growth">
        <h3>Growth</h3>
        <table className="dragon-quest-table">
          <tbody>
            <tr>
              <td>HP</td>
              <td>MP</td>
              <td>ATK</td>
              <td>DEF</td>
              <td>AGI</td>
              <td>WIS</td>
            </tr>
            <tr>
              <td>{monster.growth?.hp}</td>
              <td>{monster.growth?.mp}</td>
              <td>{monster.growth?.atk}</td>
              <td>{monster.growth?.def}</td>
              <td>{monster.growth?.agi}</td>
              <td>{monster.growth?.wis}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="monster-talents-and-traits">
        <div className="monster-details-talents">
          <h3>Talents</h3>
          <ul>
            {monster.talents?.map((talent: string, index: number) => (
              <li key={index}>{talent}</li>
            ))}
          </ul>
        </div>

        <div className="monster-details-traits">
          <h3>Traits</h3>
          <h4>Small</h4>
          <ul>
            {Object.keys(monster.traits?.small || {}).map((trait: string, index: number) => (
              <li key={index}>
                {trait}: {monster.traits?.small[trait]}
              </li>
            ))}
          </ul>
          <h4>Large</h4>
          <ul>
            {Object.keys(monster.traits?.large || {}).map((trait: string, index: number) => (
              <li key={index}>
                {trait}: {monster.traits?.large[trait]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="monster-details-resistances">
        <h3>Resistances</h3>
        <table className="dragon-quest-table">
          <tbody>
            {Object.keys(monster?.resistances || {}).map((element: string, index: number) => (
              index % 4 === 0 ? (
                <tr key={index}>
                  <td>{element}:</td>
                  <td>{monster?.resistances[element]}%</td>
                  <td>{index + 1 < Object.keys(monster?.resistances).length ? Object.keys(monster?.resistances)[index + 1] + ": " + monster?.resistances[Object.keys(monster?.resistances)[index + 1]] + "%" : ""}</td>
                  <td>{index + 2 < Object.keys(monster?.resistances).length ? Object.keys(monster?.resistances)[index + 2] + ": " + monster?.resistances[Object.keys(monster?.resistances)[index + 2]] + "%" : ""}</td>
                </tr>
              ) : null
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonsterInfo;