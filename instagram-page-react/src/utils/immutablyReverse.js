// lodash
import _reverse from "lodash/reverse";

const immutablyReverse = (array) => {
    return _reverse(array?.slice())
};

export default immutablyReverse;