require("@babel/register")({ extensions: [".js", ".ts"] });

const { default: excitedCells } = require("./src/excitedCells");

excitedCells([1, 0, 1, 1], 2);
