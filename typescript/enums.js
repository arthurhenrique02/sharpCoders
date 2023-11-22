// enum is a 'list' that limits user`s choice
var Programming_langs;
(function (Programming_langs) {
    Programming_langs[Programming_langs["JavaScript"] = 0] = "JavaScript";
    Programming_langs[Programming_langs["Python"] = 1] = "Python";
    Programming_langs[Programming_langs["C#"] = 2] = "C#";
    Programming_langs[Programming_langs["TypeScript"] = 3] = "TypeScript";
})(Programming_langs || (Programming_langs = {}));
console.log(Programming_langs.Python);
