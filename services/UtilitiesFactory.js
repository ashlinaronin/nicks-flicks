/* I don't think this is strictly necessary to look up by id.
** We could assume the items are stored in the factory array
** in numerical order. However, for the future when we begin
** interfacing with databases and a back-end, and we're not sure
** how the data is stored, it's probably a good idea to not
** assume we know where a particular item is. */

flicks.factory('UtilitiesFactory', function() {
    return {
        findById: function(collection, id) {
            for(var i = 0; i < collection.length; i++) {
                if (collection[i].id == id) {
                    return collection[i];
                }
            }
            return null;
        }
    };
});
