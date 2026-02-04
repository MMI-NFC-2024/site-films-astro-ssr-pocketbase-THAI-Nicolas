/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("editor1462424745")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(4, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1462424745",
    "maxSize": 0,
    "name": "synopsiss",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
