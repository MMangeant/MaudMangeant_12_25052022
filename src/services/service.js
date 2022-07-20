
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
    "calorieCount": 2500,
    "proteinCount": 90,
    "carbohydrateCount": 150,
    "lipidCount": 120
  }
};

// mocked data for user's activity
export let userDataActivity = {
  "userId": 18,
  "sessions": [
    {
      "day": "2020-07-01",
      "kilogram": 70,
      "calories": 240
    },
    {
      "day": "2020-07-02",
      "kilogram": 69,
      "calories": 220
    },
    {
      "day": "2020-07-03",
      "kilogram": 70,
      "calories": 280
    },
    {
      "day": "2020-07-04",
      "kilogram": 70,
      "calories": 500
    },
    {
      "day": "2020-07-05",
      "kilogram": 69,
      "calories": 160
    },
    {
      "day": "2020-07-06",
      "kilogram": 69,
      "calories": 162
    },
    {
      "day": "2020-07-07",
      "kilogram": 69,
      "calories": 390
    }
  ]
}

// mocked data for user's average
export let userDataAverage = {
      "userId": 18,
      "sessions": [
          {
              "day": 1,
              "sessionLength": 30
          },
          {
              "day": 2,
              "sessionLength": 40
          },
          {
              "day": 3,
              "sessionLength": 50
          },
          {
              "day": 4,
              "sessionLength": 30
          },
          {
              "day": 5,
              "sessionLength": 30
          },
          {
              "day": 6,
              "sessionLength": 50
          },
          {
              "day": 7,
              "sessionLength": 50
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
            "value": 240,
            "kind": 2
        },
        {
            "value": 80,
            "kind": 3
        },
        {
            "value": 80,
            "kind": 4
        },
        {
            "value": 220,
            "kind": 5
        },
        {
            "value": 110,
            "kind": 6
        }
    ]
}

/**/    


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
