## Installation

This installation process is opinionated in order to get you going quickly. We want to make everything much easier to use in the near future. Please report any problems, and as always, PRs are welcome.

1. `ember install ember-freestyle`

    This will do the following:

    - Install the `ember-freestyle` addon itself
    - Install additional highlight.js and remarkable dependencies (which will eventually be made optional)
    - Add a `freestyle` template in your app
    - Add a `freestyle` controller in your app
    - Add an `app.scss` file with the required SCSS
        - You can type `n` to decline this as long as you add `@import 'ember-freestyle';` somewhere in your SCSS

    *Note:* Ember CLI versions before 0.2.3 should use `ember install:addon` instead of `ember install`

1. Add `this.route('freestyle');` to your `router.js` file
1. Navigate to `/freestyle`.

*Note:* Ember Freestyle is compatible with Ember 1.13 onward.