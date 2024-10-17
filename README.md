# Dark and light theme switcher for website

[ReadMe українською](https://github.com/duron16/dark-mode/blob/master/README_UA.md)

Based on the `localStorage` technology implemented in almost all browsers. Crossbrowser compatibility - IE 11+.

If the browser does not support `localStorage`, then the `<body>` tag will be assigned the class `no_dark_mode`. From it, you can already apply styles that will hide the switch itself or whatever you wish.

## Instruction

1. Connect to the site the style file `dark-mode.min.css` from the src folder.
2. Connect to the site, before the closing `</body>` tag, the script `dark-mode.min.js` from the src folder.
3. Place the html code of the switch on your site
```html
<div class="theme_mode_switch_wrap">
	<span class="theme_mode_switch"></span>
</div>
```

If the switch is in the on position, the `<body>` tag will be assigned the class `dark_mode`. Using it, you can write styles for a dark theme.

## Demo

[See demo](https://ori4510.github.io/dark-mode/)
