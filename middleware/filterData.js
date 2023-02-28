// // Middleware personnalisé pour filtrer les données utilisateur
// function filterData(req, res, next) {
//     // Exclure les propriétés que vous ne voulez pas inclure dans la réponse JSON
//     const filteredData = {
//       id: req.user.id,
//       name: req.user.name,
//       email: req.user.email,
//     };
//     // Ajouter les données filtrées à l'objet de la requête
//     req.filteredData = filteredData;
//     next();
// }
  
// module.exports = filterData;