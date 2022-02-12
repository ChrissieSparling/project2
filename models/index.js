const User = require('./User');
const Artist = require('./Artist');
const Liked_Artist = require('./Liked_Artist');
const Registry = require('./Registry');
const Art_Piece = require('./Art_Piece');
const Category = require('./Category');
const Art_Piece_Category = require('./Art_Piece_Category');


// Links Users  and  Artists  through: Liked_Artist
// hasMany method means "target" is foreignKey and "source" is primaryKey EX: USER is our source (PK) liked_artist is (FK)
User.hasMany(Liked_Artist);

// belongsTo means the "source" is (PK) target is (FK)
// ex: user is the source (PK) it belongsToMany Artist which is the target (FK)
Artist.belongsToMany(User, { through: Liked_Artist})



// cs - added from here  - cs 02/12/2022
// defining registry in the erd
Registry.belongsToMany(Art_Piece)
Art_Piece.hasMany(Registry)

// get user to registry
User.belongsToMany(Registry)
Registry.belongsToMany(User)

// get artPiece to registry
Registry.hasMany(Art_Piece)
Art_Piece.hasMany(Registry)


//  start up next level  - art piece - 
Art_Piece.hasMany(Artists)
Artist.belongsToMany(Art_Piece)

Art_Piece.belongsToMany(Category, { through: Art_Piece_Category })
Category.hasMany(Art_Piece)


// console.log("test")

module.exports = { 
    User, 
    Artist, 
    Liked_Artist, 
    Registry, 
    Art_Piece,
    Category,
    Art_Piece_Category, 
};
