const { mockReactNativeFirestore } = require('firestore-jest-mock');
import axios from "axios";




beforeEach(()=>{
  jest.clearAllMocks();
})
mockReactNativeFirestore({
  database: {
    users: [
      [{date: "2024-05-30", description: "The best drinks deals in town. Simply Good Music, Drinks & Atmosphere until 5am every Thursday. SKINT? We've got you covered.", doorsclosing:"5:00",doorsopening: "23:00",eventname: "Skint Thursdays at Space", id: "37266231", imageurl:"https://d31fr2pwly4c4s.cloudfront.net/e/3/0/1684681_97239279_Skint-Thursdays-at-Space_1024.jpg",
    lastentry: "01:00",link:"https://www.skiddle.com/whats-on/Leeds/The-Space/Skint-Thursdays-at-Space/37266231/",location: "The Space", postcode: "LS1 6NJ",
    title: "Skint Thursdays at Space", town: "Leeds" }]
    ]
  
  },
});


const { mockCollection,mockCollectionGroup,mockDoc,mockSet,mockGet} = require('firestore-jest-mock/mocks/firestore');

test('asserts that the values entered into a document are of type object', () => {
  const { Firestore } = require('@react-native-firebase/firestore');
  const firestore = new Firestore();

  return firestore
    .collection('users')
    .get()
    .then(userDocs=>{
      const dataObj = userDocs.docs[0].data()['0']
      expect(typeof dataObj).toEqual('object');
    }
  )
}  
  )




test('testing that liked gigs is called by a user', () => {
  const { Firestore } = require('@react-native-firebase/firestore');
  const firestore = new Firestore();

  return firestore
    .collection('users')
    .get()
    .then(()=>{
      expect(mockCollection).toHaveBeenCalledWith('users');
    }
  )
}  
  )


test('when data is called the index 0 of the array of the data values should match the values in the mock database ', () => {
  const { Firestore } = require('@react-native-firebase/firestore');
  const firestore = new Firestore();
  return firestore
    .collection('users')
    .get()
    .then(userDocs => {
      const dataObj = userDocs.docs[0].data()['0']
    
      expect(dataObj.date).toEqual("2024-05-30"); 
      expect(dataObj.description).toEqual("The best drinks deals in town. Simply Good Music, Drinks & Atmosphere until 5am every Thursday. SKINT? We've got you covered.")
      expect(dataObj.doorsclosing).toEqual("5:00");
      expect(dataObj.doorsopening).toEqual("23:00"); 
      expect(dataObj.eventname).toEqual("Skint Thursdays at Space")
      expect(dataObj.id).toEqual("37266231")
      expect(dataObj.imageurl).toEqual("https://d31fr2pwly4c4s.cloudfront.net/e/3/0/1684681_97239279_Skint-Thursdays-at-Space_1024.jpg")
      expect(dataObj.lastentry).toEqual("01:00")
      expect(dataObj.link).toEqual("https://www.skiddle.com/whats-on/Leeds/The-Space/Skint-Thursdays-at-Space/37266231/")
      expect(dataObj.location).toEqual("The Space")
      expect(dataObj.postcode).toEqual("LS1 6NJ"),
      expect(dataObj.title).toEqual("Skint Thursdays at Space")
      expect(dataObj.town).toEqual("Leeds")
    });
});

describe('Skiddle API',()=>{
  test('skiddle API when called should return an array of results',()=>{
    const apiKey =  `https://www.skiddle.com/api/v1/events/search/?api_key=53e664e9d779d1a9ba1d2a248bb01777/&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1`

   
    return fetch(apiKey)
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      expect(Array.isArray(data.results)).toBe(true)
    })


  })
  test('called skiddle API result should contain a property of lat, long and town',()=>{
    const apiKey =  `https://www.skiddle.com/api/v1/events/search/?api_key=53e664e9d779d1a9ba1d2a248bb01777/&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1`

       return fetch(apiKey)
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      expect(data.results[0]).toHaveProperty('venue')
      expect(data.results[0].venue).toHaveProperty('longitude')
      expect(data.results[0].venue).toHaveProperty('latitude')
      expect(data.results[0].venue).toHaveProperty('town')
    })


  })
})

describe('Spotify API',()=>{
  test.only('POST: posting to api/token end point with correct credentials should return a token',()=>{

    const url = 'https://accounts.spotify.com/api/token';

    const authOptions = {
        params: {
            client_id: '701a05a7ad784a3eb09a617299301e89',
            client_secret: '50212da2c9c94f4b938ee9bf9daf00f0',
            grant_type: 'client_credentials'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from('701a05a7ad784a3eb09a617299301e89'+ ':' + '50212da2c9c94f4b938ee9bf9daf00f0').toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    return axios.post(url, null, authOptions)
    .then((response) => {

      expect(typeof response.data.access_token).toBe('string')
      
        
    })

  })

})






