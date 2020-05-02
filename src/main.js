// References:
// - https://stackoverflow.com/questions/57557939/getting-a-firefox-plugin-to-detect-and-mimic-attempts-to-check-for-apple-pay-sup

// Mock apple pay session
// docs: https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/checking_for_apple_pay_availability
let mock = {
  canMakePayments: function () {
    console.log('canMakePayments mock function called');
    alert('The Apple Pay JS API is available!');
    return false;
  },
  canMakePaymentsWithActiveCard: function () {
    console.log('canMakePaymentsWithActiveCard mock function called');
    alert('The Apple Pay JS API is available!');
    return false;
  },
};

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#cloneInto
window.wrappedJSObject.ApplePaySession = cloneInto(mock, window, {
  cloneFunctions: true,
});
console.log('window.ApplePaySession mock initialized');
