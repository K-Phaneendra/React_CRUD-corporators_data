const initialState = {
	corporators:{
		Hyderabad:[
			{id: 1, name:"Suresh", area:"madhapur", age:45},
			{id: 2, name:"Harish", area:"Kondapur", age:35},
			{id: 3, name:"Ramesh", area:"Miyapur", age:65},
			{id: 4, name:"Rajesh", area:"BHEL", age:55}
		],
		Bangalore:[
			{id: 1, name:"Manjunath", area:"Mejastic", age:45},
			{id: 2, name:"Mahesh", area:"Hebbal", age:35},
			{id: 3, name:"Raja Rao", area:"KRPuram", age:65},
			{id: 4, name:"Shankar", area:"BTM", age:55}
		],
		Chennai:[
			{id: 1, name:"Daniel", area:"Villuvakam", age:45},
			{id: 2, name:"Saravana", area:"TNagar", age:35},
			{id: 3, name:"Kishore", area:"Tambaram", age:65},
			{id: 4, name:"Rajan", area:"Ennore", age:55}
		]
	},
	add_city:false,
	edit_cityName:null,
	edit_details:null,
	add_person:null,
	add_city_only:false,
	add_person_only:false
}

export default function actionReducer(state = initialState, action){
	var st = state;
	switch(action.type){
		case "ADD_CITY_BUTTON_CLICKED":{
			console.log('inside reducer');
			st = {...state, add_city:true}
			break;
		}
		case "ADD_CITY_FORM_BUTTON_CLICKED":{
			var cityArray;
			var mainCorporatorsData = {};
			cityArray = Object.keys(st.corporators);
			cityArray.map((cityName, i)=>{
				st.corporators[cityName].map((cityData, index)=>{
					console.log(st.corporators[cityName][index])
					mainCorporatorsData[cityName] = st.corporators[cityName]
				});
			});
			mainCorporatorsData[action.newCityName] = [action.newCityData];
			//console.log(mainCorporatorsData)
			st = {...state, add_city:false, corporators: mainCorporatorsData}
			break;
		}
		case "EDIT_BUTTON_CLICKED":{
			console.log(action.obtainedCityName)
			console.log(action.obtainedCityData)
			var cityArray;
			var mainCorporatorsData = {};
			cityArray = Object.keys(st.corporators);
			cityArray.map((cityName, i)=>{
				st.corporators[cityName].map((cityData, index)=>{
					mainCorporatorsData[cityName] = st.corporators[cityName]
				});
			});
			//var obtainedCityDetails = {};
			//console.log(action.obtainedCityName[action.obtainedCityData])
			st={...state, edit_details: action.obtainedCityData, corporators: mainCorporatorsData, edit_cityName: action.obtainedCityName}
			break;
		}
		case "UPDATE_BUTTON_CLICKED": {
			var mainCorporatorsData = {};
			cityArray = Object.keys(st.corporators);
			cityArray.map((cityName, i)=>{
				st.corporators[cityName].map((cityData, index)=>{
					mainCorporatorsData[cityName] = st.corporators[cityName]
				});
			});
			console.log(mainCorporatorsData);
			var updatedData = [];
			var updatedData2 = [];
			if(action.OriginalCityName === action.obtainedCityName){
			mainCorporatorsData[action.obtainedCityName].map((cityData, index)=>{
				console.log(cityData)
				console.log(mainCorporatorsData[action.obtainedCityName])
				
					if(mainCorporatorsData[action.obtainedCityName][index].id === action.obtainedPersonId){
						updatedData.push(action.obtainedCityData)
					}
					else{
						updatedData.push(cityData)
						//mainCorporatorsData[action.obtainedCityName].push(cityData)
					}
				});
			}
			else if(action.OriginalCityName != action.obtainedCityName){
				mainCorporatorsData[action.obtainedCityName].map((cityData, index)=>{
						updatedData.push(cityData)
						//mainCorporatorsData[action.obtainedCityName].push(cityData)
				});
				updatedData.push(action.obtainedCityData)
				mainCorporatorsData[action.OriginalCityName].map((cityData, index)=>{
					if(mainCorporatorsData[action.OriginalCityName][index].id === action.OriginalCityId){
						//do nothing
					}
					else{
						updatedData2.push(cityData)

					}
				});
			}
			console.log(updatedData)
			console.log(updatedData2)
			mainCorporatorsData[action.OriginalCityName] = updatedData2
			mainCorporatorsData[action.obtainedCityName] = updatedData
			console.log(mainCorporatorsData)
			st = {...state, corporators: mainCorporatorsData, edit_details: null}
			break;
		}
		case "ADD_NEW_PERSON":{
			//console.log(action.obtainedCityName)
			st = {...state, add_person: action.obtainedCityName}
			break;
		}
		case "ADD_PERSON_FORM_DATA":{
			console.log(action.obtainedCity)
			console.log(action.obtainedData)
			var mainCorporatorsData = {};
			cityArray = Object.keys(st.corporators);
			cityArray.map((cityName, i)=>{
				st.corporators[cityName].map((cityData, index)=>{
					mainCorporatorsData[cityName] = st.corporators[cityName]
				});
			});
			console.log(mainCorporatorsData);
			var updatedData = [];
			mainCorporatorsData[action.obtainedCity].map((cityData, index)=>{
				console.log(cityData)
				console.log(mainCorporatorsData[action.obtainedCity])
					updatedData.push(cityData)
			});
			updatedData.push(action.obtainedData)
			mainCorporatorsData[action.obtainedCity] = updatedData
			console.log(updatedData)
			console.log(mainCorporatorsData)
			st = {...state, add_person: null, corporators: mainCorporatorsData}
			break;
		}
		case "DELETE_BUTTON_CLICKED":{
			var cityArray;
			var mainCorporatorsData = {};
			cityArray = Object.keys(st.corporators);
			cityArray.map((cityName, i)=>{
				st.corporators[cityName].map((cityData, index)=>{
					mainCorporatorsData[cityName] = st.corporators[cityName]
				});
			});
			console.log(cityArray)
			console.log(mainCorporatorsData)
			var updatedData = [];
			mainCorporatorsData[action.obtainedCityName].map((cityData, index)=>{
				// console.log(cityData)
				// console.log(mainCorporatorsData[action.obtainedCityName])
					//updatedData.push(cityData)
					if(mainCorporatorsData[action.obtainedCityName][index].id === action.obtainedCityData.id){
						//do nothing
					}
					else{
						updatedData.push(cityData)
					}
			});
			console.log(updatedData)
			mainCorporatorsData[action.obtainedCityName] = updatedData
			st = {...state, corporators: mainCorporatorsData}
			break;
		}
		case "EDIT_CANCEL_BUTTON_CLICKED":{
			st = {...state, edit_details:null}
			break;
		}
		case "CANCEL2_BUTTON_CLICKED":{
            st = {...state, add_city:false}
            break;
        }
        case "CANCEL_ADD_PERSON":{
            st = {...state, add_person:null}
            break;
        }
        case "ADD_CITY_ONLY_CLICKED":{
			st = {...state, add_city_only:true}
			break;
        }
        case "ADD_CITY_ONLY_CITYNAME":{
        	var cityArray;
			var mainCorporatorsData = {};
			cityArray = Object.keys(st.corporators);
			cityArray.push(action.obtainedCityName)
			cityArray.map((cityName, i)=>{
				mainCorporatorsData[cityName] = st.corporators[cityName]
			});
			mainCorporatorsData[action.obtainedCityName] = [];
			st = {...state, corporators: mainCorporatorsData, add_city_only:false}
        	break;
        }
        case "CANCEL_ADD_CITY_ONLY":{
        	st = {...state, add_city_only:false}
        	break;
        }
        case "ADD_PERSON_ONLY_CLICKED":{
        	st = {...state, add_person_only:true}
        	break;
        }
        case "CANCEL_ADD_PERSON_ONLY":{
        	st = {...state, add_person_only:false}
        	break;
        }
        case "ADD_PERSON_ONLY_DATA":{
        	var cityArray;
			var mainCorporatorsData = {};
			var updatedData = [];
			cityArray = Object.keys(st.corporators);
			cityArray.map((cityName, i)=>{
				mainCorporatorsData[cityName] = st.corporators[cityName]
				// st.corporators[cityName].map((cityData, index)=>{
				// });
			});
			console.log(mainCorporatorsData);
			
			mainCorporatorsData[action.obtainedCityName].map((cityData, index)=>{
			 	console.log(cityData)
			 	console.log(mainCorporatorsData[action.obtainedCityName])
			 		updatedData.push(cityData)
			 });
			 updatedData.push(action.obtainedCityData)
			 mainCorporatorsData[action.obtainedCityName] = updatedData
			 console.log(updatedData)
			// console.log(mainCorporatorsData)
			st = {...state, add_person_only: false, corporators: mainCorporatorsData}
        	break;
        }
		default:{
			return st;
		}
	}
	console.log(st);
	return st;
}