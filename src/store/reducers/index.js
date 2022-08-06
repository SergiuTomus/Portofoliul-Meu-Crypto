import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import localeReducer from './locale.reducer';
// import contentReducer from './content.reducer';
// import zipFileReducer from './zipFile.reducer';
// import jsonDataReducer from './jsonData.reducer';
// import resultsReducer from './results.reducer';
// import searchResultsReducer from './searchResults.reducer';
// import resultsTableReducer from './resultsTable.reducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    // locale: localeReducer,
    // content: contentReducer,
    // zipFile: zipFileReducer,
    // jsonData: jsonDataReducer,
    // results: resultsReducer,
    //  searchResults: searchResultsReducer,
    //  resultsTable: resultsTableReducer
  });

export default createRootReducer;
