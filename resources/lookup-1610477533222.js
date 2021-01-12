(function(window, undefined) {
  var dictionary = {
    "8587afc5-3631-48c6-9ca1-fc1e76aea127": "Chat",
    "a0c866a9-8849-4a7f-8f23-61181f0174c5": "Article",
    "139901e7-0750-422f-9556-bea23192fbba": "Search",
    "aea6a23d-a92f-410d-9ae0-9a3e057b8d2c": "Notifications",
    "614d873b-56a0-41bf-9416-2c774215cb5a": "Log In",
    "8cc8a5f0-1fdd-47c8-ab19-62c57f7fe66a": "Profile",
    "6b93c97d-bf57-4725-a967-4eaa6abd2c72": "COVID article hindi",
    "9a8dcb01-b548-44e6-9de8-893b4afde46a": "Home",
    "04dc38bf-97ca-46dd-a949-47c1fb43cf4b": "Articles",
    "0323a1ac-5344-46e8-a5db-e738c5c5e81d": "Connect",
    "2b8bd5bc-8c11-427c-9243-e7be9c1f4dc2": "Watch",
    "7c137e70-14d0-4ce7-8ef2-b2c379f9f4ff": "COVID article",
    "9981af4c-0743-45dc-9d9e-0a98f96c230b": "Filters",
    "8f605952-e6d8-4daf-a82c-4b467c1d24b9": "Sign Up",
    "a721e560-498c-47eb-ad05-8b2bb69feef2": "COVID News",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "337fc0d0-2459-4fbb-bedb-160b616c17a8": "Chat space",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);