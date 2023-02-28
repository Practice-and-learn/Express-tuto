const Worker = require('../models/Worker');



exports.createWorker = (req, res) => {
    delete req.body._id;
    const worker = new Worker({
    ...req.body
});
worker.save()
    .then(() => res.status(201).json({ message: 'worker enregistré !'}))
    .catch(error => res.status(400).json({ error }));

}


exports.modifyWorker = (req, res) => {
    Worker.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'worker modifié'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteWorker = (req, res) => {
    Worker.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'worker supprimé'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOneWorker = (req, res) => {
    Worker.findOne({ _id: req.params.id })
    .then(worker => res.status(200).json(worker))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllWorker = (req, res) => {
    Worker.find()
    .then(workers => res.status(200).json(workers))
    .catch(error => res.status(400).json({ error }));
}