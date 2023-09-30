// @ts-ignore  
import monsters from '../../objects/monsters';
import synthesis from '../../util/synthesis';

const monsterKeys = Object.keys(monsters).sort();

const getMonsterListByParent = (parent: string) => {
  if (parent && parent.indexOf('_') === 0) {
    const familyKeys = monsterKeys.filter((monsterName) => monsters[monsterName].family === parent);
    return familyKeys.map((monster_key) => monsters[monster_key].name);
  } else {
    const parentData = monsters[parent];
    return parentData ? [parentData.name] : undefined;
  };
};

const monsterNames = () => monsterKeys.map((monster_key) => monsters[monster_key].name);

const getMonsterByName = (name: string) => {
  const key = monsterKeys.filter((monsterName) => monsters[monsterName].name === name)[0];
  return monsters[key];
};

export { getMonsterByName, getMonsterListByParent, monsterNames }; 