import { useEffect, useState } from "react"
import { URL, KEY } from '../../constans'
 
const useGetData = (ttnNumber) => {
  const [responseData, setresponseData ] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    fetch(URL, {
        method: "POST",
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apiKey: KEY,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: ttnNumber,
          }
        ]
      }
        })
    })
    .then(resp => resp.json())
    .then(data => setresponseData(data))
    .catch(setError)
    .finally(() => setLoading(false));
  }, [ttnNumber])

  return {
    responseData,
    error,
    loading,
  }
}

export default useGetData;


