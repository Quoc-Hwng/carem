var preferredCountries = ['ae', 'sa', 'qa', 'bh', 'pk', 'ma', 'eg', 'lb', 'kw'];
var excludeCountries = ['eh'];
var userCountryCode = window.country_code ? window.country_code.toLowerCase() :  preferredCountries[0];
$("#phoneNumber-form-1").intlTelInput({
	'separateDialCode':true, 
	preferredCountries: preferredCountries,
	excludeCountries: excludeCountries,
	initialCountry : userCountryCode
});