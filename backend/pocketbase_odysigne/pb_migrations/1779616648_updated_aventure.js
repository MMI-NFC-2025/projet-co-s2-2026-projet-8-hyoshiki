/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1578665554")

  // update collection data
  unmarshal({
    "name": "aventures"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1578665554")

  // update collection data
  unmarshal({
    "name": "aventure"
  }, collection)

  return app.save(collection)
})
