export const getOptions = (key, ttnNumber) => {
  const options = {
    "apiKey": key,
    "modelName": "TrackingDocument",
    "calledMethod": "getStatusDocuments",
    "methodProperties": {
       "Documents" : [
           {
              "DocumentNumber": ttnNumber,
              "Phone":""
           },
          //  {
          //     "DocumentNumber":"20400048799001",
          //     "Phone":"380600000000"
          //  }
        ]
    }
  }
  return options;
}

