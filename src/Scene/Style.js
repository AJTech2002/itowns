/**
 * Generated On: 2015-10-5
 * Class: Style
 * Description: Description du style du Node. Le style et contenue sont les deux éléments permettant de convertir le Node pour le moteur graphique.
 */

var Description = require('Description');

function Style() {
    //Constructor

    this.color = null;
    this.sizeLine = null;

}

Style.prototype = new Description();


module.exports = {
    Style: Style
};
