export const addCityFun = () => {
    console.log('in action')
    return {type: "ADD_CITY_BUTTON_CLICKED"}
}
export const addCityOnlyFun = () => {
	return {type: "ADD_CITY_ONLY_CLICKED"}
}
export const cancelAddCityOnlyFun = () => {
	return {type: "CANCEL_ADD_CITY_ONLY"}
}
export const addCityOnlyDataFun = (addedCityName) => {
	console.log(addedCityName)
	return {type: "ADD_CITY_ONLY_CITYNAME", obtainedCityName: addedCityName}
}
export const addPersonOnlyFun = () => {
	return {type: "ADD_PERSON_ONLY_CLICKED"}
}
export const addPersonOnlyCancelFun = () => {
	return {type: "CANCEL_ADD_PERSON_ONLY"}
}
export const addPersonOnlyDataFun = (cityName, cityData) => {
	//console.log(cityName)
	return {type: "ADD_PERSON_ONLY_DATA", obtainedCityName: cityName, obtainedCityData: cityData}
}
export const cancelFun2 = () => {
    return {type: "CANCEL2_BUTTON_CLICKED"}
};
export const addCityFormFun = (CityName, CityData) => {
	console.log(CityName)
	console.log(CityData)
	return {type: "ADD_CITY_FORM_BUTTON_CLICKED", newCityName: CityName, newCityData: CityData}
};
export const editFun = (CityName, CityData) => {
	console.log(CityName)
	console.log(CityData)
	return {type: "EDIT_BUTTON_CLICKED", obtainedCityName: CityName, obtainedCityData: CityData}
}
export const editCancelFun = () => {
	return {type: "EDIT_CANCEL_BUTTON_CLICKED"}
}
export const updateEditForm = (CityName, editedCityData, OriginalCityName, OriginalCityId) => {
	console.log(CityName)
	console.log(editedCityData)
	console.log(OriginalCityName)
	console.log(OriginalCityId)
	return {type: "UPDATE_BUTTON_CLICKED", obtainedCityName: CityName, obtainedCityData: editedCityData, obtainedPersonId: editedCityData.id, OriginalCityName: OriginalCityName, OriginalCityId: OriginalCityId}
}
export const addNewPersonFun = (cityName) => {
	console.log(cityName)
	return {type: "ADD_NEW_PERSON", obtainedCityName: cityName}
}
export const addPersonFormFun = (cityName, personDetails) => {
	console.log(cityName)
	console.log(personDetails)
	return {type: "ADD_PERSON_FORM_DATA", obtainedCity: cityName, obtainedData: personDetails, obtainedPersonId: personDetails.id}
}
export const cancelAddPersonFun = () => {
	return {type: "CANCEL_ADD_PERSON"}
}
export const delFun = (CityName, CityData) => {
	console.log(CityName, CityData)
	return {type: "DELETE_BUTTON_CLICKED", obtainedCityName: CityName, obtainedCityData: CityData}
}