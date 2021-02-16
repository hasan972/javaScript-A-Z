//make variable function and and call this module from another file

export let text = "Welcome to Module";

export function setText (change){
  text = change;
}

//Anojther way

let tex = "Welcome the another way";
export {tex as massage};
//Another way

export let t = "One another way";
