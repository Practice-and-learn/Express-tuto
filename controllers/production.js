const Production = require('../models/Production');



exports.createProduction = (req, res) => {
    delete req.body._id;
    const production = new Production({
    ...req.body
});
production.save()
    .then(() => res.status(201).json({ message: 'Production enregistré !'}))
    .catch(error => res.status(400).json({ error }));

}


exports.modifyProduction = (req, res) => {
    Production.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Production modifié'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteProduction = (req, res) => {
    Production.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Production supprimé'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOneProduction = (req, res) => {
    Production.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllProduction = (req, res) => {
    Production.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
}
