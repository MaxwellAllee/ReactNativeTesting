import React from 'react'
const test ={
    tracker: true,
    change: function() {},
    local: 0,
    handleLocation: function(){},
    pastLocations: []
  }

export const AppStateContext = React.createContext(test);
