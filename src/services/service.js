
/* MOCKED DATA */

// mocked data for user's profile 
export let userData = {
  "id": 18,
  "userInfos": {
    "firstName": 'Nemo',
    "lastName": 'Ratorez',
    "age": 34,
  },
  "score": 0.73,
  "keyData": {
    "calorieCount": 100,
    "proteinCount": 200,
    "carbohydrateCount": 300,
    "lipidCount": 400
  }
};

// mocked data for user's activity
export let userDataActivity = {
  "userId": 18,
  "sessions": [
    {
      "day": "2020-07-01",
      "kilogram": 100,
      "calories": 150
    },
    {
      "day": "2020-07-02",
      "kilogram": 200,
      "calories": 250
    },
    {
      "day": "2020-07-03",
      "kilogram": 300,
      "calories": 350
    },
    {
      "day": "2020-07-04",
      "kilogram": 400,
      "calories": 450
    },
    {
      "day": "2020-07-05",
      "kilogram": 500,
      "calories": 550
    },
    {
      "day": "2020-07-06",
      "kilogram": 600,
      "calories": 650
    },
    {
      "day": "2020-07-07",
      "kilogram": 700,
      "calories": 750
    }
  ]
}

// mocked data for user's average
export let userDataAverage = {
      "userId": 18,
      "sessions": [
          {
              "day": 1,
              "sessionLength": 10
          },
          {
              "day": 2,
              "sessionLength": 70
          },
          {
              "day": 3,
              "sessionLength": 10
          },
          {
              "day": 4,
              "sessionLength": 70
          },
          {
              "day": 5,
              "sessionLength": 10
          },
          {
              "day": 6,
              "sessionLength": 70
          },
          {
              "day": 7,
              "sessionLength": 10
          }
      ]
  }

// mocked data for user's performance
export let userDataPerformance = {
    "userId": 18,
    "kind": {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
    },
    "data": [
        {
            "value": 200,
            "kind": 1
        },
        {
            "value": 50,
            "kind": 2
        },
        {
            "value": 200,
            "kind": 3
        },
        {
            "value": 50,
            "kind": 4
        },
        {
            "value": 200,
            "kind": 5
        },
        {
            "value": 50,
            "kind": 6
        }
    ]
}

/**/    


/**
* Functions for getting user’s data from the API

* @param {number} id
*/


export async function getInfosUser(id){
  let response = await fetch(`http://localhost:3000/user/${id}`)
  if(response.ok){
    let result = await response.json();
    return userData = result.data
  }
  return userData;
}

export async function getActivityUser(id){
  let response = await fetch(`http://localhost:3000/user/${id}/activity`)
  if(response.ok){
    let result = await response.json();
    return userDataActivity = result.data
  }
  return userDataActivity;
}

export async function getAverageUser(id){
  let response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
  if(response.ok){
    let result = await response.json();
    return userDataAverage = result.data
  }
  return userDataAverage;
}

export async function getPerformanceUser(id){
  let response = await fetch(`http://localhost:3000/user/${id}/performance`)
  if(response.ok){
    let result = await response.json();
    return userDataPerformance = result.data
  }
  return userDataPerformance;
}
