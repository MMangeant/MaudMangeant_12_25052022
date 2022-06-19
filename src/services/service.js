
export let userData = {
  "id": 18,
  "userInfos": {
    "firstName": 'Cecilio',
    "lastName": 'Ratorez',
    "age": 34,
  },
  "score": 0.3,
  "keyData": {
    "calorieCount": 2500,
    "proteinCount": 90,
    "carbohydrateCount": 150,
    "lipidCount": 120
  }
};
      

export async function getInfosUser(id){
let response = await fetch(`http://localhost:3000/user/${id}`)
  if(response.ok){
    let result = await response.json();
    return userData = result.data

  }
  return userData;
}

