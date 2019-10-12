# 🌚🌝 Sun Moon Toggle

![](https://i.imgur.com/vzexItp.gif)

## 🦄 How it works

The CSS property `mix-blend-mode` ([browser support](https://caniuse.com/#feat=css-mixblendmode)) specifies how colors blend when graphics are stacked together. In brief, covering your site with a layer same as your background color and using `mix-blend-mode: difference` will automatically yield a black background while preserving the contrast with the foreground.

We're using `mix-blend-mode: exclusion` which is a lower contrast version of `mix-blend-mode: difference`.

Site that uses this:

- [A Work in Progress](https://dev.wgao19.cc)

You may read more about it in the following articles:

- [Sun Moon Blending Mode](https://dev.wgao19.cc/2019-05-04__sun-moon-blending-mode/)
- [Friends don't let friends implement dark mode alone](https://www.chenhuijing.com/blog/friends-dont-let-friends-implement-dark-mode-alone/#%F0%9F%8E%AE)

## 🛠 Installation

```shell
$ yarn add sun-moon-toggle
```

## 🦊 Example

```jsx
import React from 'react'
import SunMoonToggle from 'sun-moon-toggle'

const Layout = () => (
  <div>
    {/* put it before other content */}
    <SunMoonToggle background="#efefef" style={{ right: '1rem' }} />
    <main>
      <h1>Hello, it's me</h1>
      <img {/** img is by default escaped */} />
      <iframe {/** iframe also */} />
      <p>
        Wrap emojis in a class
        <span class="emoji">🌝🌚</span>
      </p>
    </main>
  </div>
)
```

## 🍱 Props

| Props | Type | Optional | Default | What it does |
| :-- | --- | --- | --- | --- |
| `backgroundColor` | `string` | Yes | `'white'` | Background color of your site, used to compute the dark color while preserving the contrast to your foreground |
| `type` | `'default'`, `'hipster'` | Yes | `'default'` | `'default'` uses opacity (see gif [here](https://i.imgur.com/CsEehnx.gif)), `'hipster'` uses the expansion effect (gif above) |
| `style` | `object` | Yes | `undefined` | In case you need to move the toggle, use this prop to set position on the screen |
