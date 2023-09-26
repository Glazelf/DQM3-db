import { getLocation, getRecipee } from "../infastructure/repository";

export class MonsterNode {
        public monsterId: string = "";
        public location: string = "";
        public monsterA: any = null;
        public monsterB: any = null;
}

export function howToGet(monster : string) : any {
    let node = new MonsterNode();
    node.monsterId = monster;
    let location = getLocation(monster)
    if (location.length != 0) {
        node.location = location;
        return node
    }
    let recipee = getRecipee(monster)
    if (recipee == null) {
        return
    }

    node.monsterA = howToGet(recipee.a);
    node.monsterB = howToGet(recipee.b);
    return node;
}