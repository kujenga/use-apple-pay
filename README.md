# use-apple-pay
Firefox extension to prompt to use Apple Pay when available. The intended
behavior is to notify the user that Apple Pay is available on the site and allow
them to open it within Safari to make the purchase there.

It doesn't really work... yet.

## Test sites

- https://stripe-payments-demo.appspot.com/
- https://applepaydemo.apple.com/

## Current status

The `src` directory can be loaded into Firefox as a temporary extension.

Issues to deal with:

- [x] Determine a mechanism to inject the `ApplePaySession` into the current
  page so that is available to scripts there.
- [ ] Most payment sites inspect the user agent before checking for the presence
  of `window.ApplePaySession`, meaning that mocking it is insufficient. Need to
  adopt [1] some functionality for spoofing user agents? In the meantime other
  extensions [2] can be used.
- [ ] When the user agent _is_ spoofed, current
- [ ] Once the core mechanics are working, need to provide a reasonable way for
  the user to open Safari on the same site to complete the purchase.

[1] Example source code for moking the User Agent: https://github.com/ray-lothian/UserAgent-Switcher/blob/master/extension/data/inject.js
[2] Install the following extension and switch User Agent to Safari on Mac: https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/
