// @ts-ignore  
import monsters from '../../objects/monsters';

const monsterKeys = Object.keys(monsters).sort();

const getMonsterListByParent = (parent: string) => {
  if (parent && isFamily(parent)) {
    const familyKeys = monsterKeys.filter((monsterName) => monsters[monsterName].family === parent);
    return familyKeys.map((monsterId) => monsters[monsterId].name);
  } else {
    const parentData = monsters[parent];
    return parentData ? [parentData.name] : undefined;
  };
};

const getMonsterNameById = (monsterId: string) => isFamily(monsterId) ? monsterId : monsters[monsterId]?.name;

const monsterNames = () => monsterKeys.map((monsterId) => monsters[monsterId].name);

const getMonsterByName = (name: string) => {
  const key = monsterKeys.filter((monsterName) => monsters[monsterName].name === name)[0];
  return monsters[key];
};

const formatParentString = (parentArray: Array<string>) => {
  return parentArray?.join(' , ');
};

const isFamily = (family: string) => family?.indexOf('_') === 0;

const formatFamilyName = (family: string) => family.charAt(1).toUpperCase() + family.slice(2);

const getIdByName = (name: string) => {
  return monsterKeys.filter((key) => monsters[key].name === name)[0];
};

export {
  formatFamilyName,
  formatParentString,
  getIdByName,
  getMonsterByName,
  getMonsterListByParent,
  getMonsterNameById,
  isFamily,
  monsterNames
};