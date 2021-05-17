const obj = {
  _name: [], // ['name', length][]
  set name(val) {
    val = val.split(", ");
    let newArr = [];
    for (const element in val) {
      newArr[element] = [val[element], val[element].length];
    }
    this._name = newArr;
  },
  get name() {
    return this._name;
  },
};

obj.name = "Vrezh, Artavazd";
console.log(obj.name); // [['Vrezh', 7], ['Artavazd',10]]
