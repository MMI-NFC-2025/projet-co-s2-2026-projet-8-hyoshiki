/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_202452309")

  // update collection data
  unmarshal({
    "name": "utilisateur"
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "number1694409183",
    "max": null,
    "min": null,
    "name": "streak_compteur",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "date509652151",
    "max": "",
    "min": "",
    "name": "derniere_connexion",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_202452309")

  // update collection data
  unmarshal({
    "name": "odysigne"
  }, collection)

  // remove field
  collection.fields.removeById("number1694409183")

  // remove field
  collection.fields.removeById("date509652151")

  return app.save(collection)
})
