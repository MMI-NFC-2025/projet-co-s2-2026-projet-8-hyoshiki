/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2104829451")

  // update collection data
  unmarshal({
    "name": "souscriptions"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2104829451")

  // update collection data
  unmarshal({
    "name": "souscription"
  }, collection)

  return app.save(collection)
})
