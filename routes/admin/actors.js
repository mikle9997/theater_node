const express = require('express');
const router = express.Router();
const db = require('../db');

router.get( '/', async ( req, res, next ) => {
  const actors = await db.actors.getAll();
  res.render('admin/actors', { actors });
});

router.get( '/add', async ( req, res, next ) => {
  res.render('admin/add-actor', );
});

router.post( '/add', async ( req, res, next ) => {
  const { name, secname, role, img } = req.body;  
  await db.actors.insertActor( name, secname, role, img );
  res.send();
});

router.delete('/', async ( req, res, next ) => {
  const { id } = req.body;
  await db.actors.deleteActor( id );
  res.send();
});

router.get('/edit/:id', async ( req, res, next ) => {
  const id = req.params.id;
  const actor = (await db.actors.getById( id ))[0];  
  if (actor == null) {
    res.redirect('/');
  }
  res.render('admin/edit-actor', { actor });
});

router.put('/edit', async ( req, res, next ) => {
  const { id, name, secname, role, img } = req.body;
  await db.actors.updateActor( id, name, secname, role, img );
  res.send();
});

module.exports = router;
