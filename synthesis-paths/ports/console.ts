
import {howToGet, MonsterNode} from "../app/get_fusion_tree";

let tree = howToGet("Red Dragon");
recursivePrint(tree, 0);

function tabbedLinePrint(msg : string, depth : number) {
    console.log('\n'+"  ".repeat(depth) + msg)
}

function recursivePrint(node : MonsterNode, depth : number) {
    let line = node.monsterId + ": ";
    if(node.location.length != 0) {
        line += "found in " + node.location
        tabbedLinePrint(line, depth)
        return
    }
    tabbedLinePrint(line 
        + node.monsterA.monsterId + " + " + node.monsterB.monsterId
        , depth)
    if(node.monsterA != null) {
        recursivePrint(node.monsterA, depth + 1);
    }
    if(node.monsterB != null) {
        recursivePrint(node.monsterB, depth + 1);
    }
}