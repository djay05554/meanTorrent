(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('collections.services')
    .factory('CollectionsService', CollectionsService);

  CollectionsService.$inject = ['$resource'];

  function CollectionsService($resource) {
    var collection = $resource('/api/collections/:collectionId', {
      collectionId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      searchCollectionInfo: {
        method: 'GET',
        url: '/api/search/collection/:language',
        params: {
          language: '@language'
        }
      },
      getCollectionInfo: {
        method: 'GET',
        url: '/api/collectionInfo/:id/:language',
        params: {
          id: '@id',
          language: '@language'
        }
      }
    });

    return collection;
  }
}());