# 🌚🌝 Sun Moon Toggle

![](https://i.imgur.com/vzexItp.gif)

## 🦄 How it works

You may read [this article](https://dev.wgao19.cc/2019-05-04__sun-moon-blending-mode/).

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
    <SunMoonToggle background="#efefef" />
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

| Props             | Type                     | Optional | Default     | What it does                                                                                                                  |
| :---------------- | ------------------------ | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `backgroundColor` | `string`                 | Yes      | `'white'`   | Background color of your site, used to compute the dark color while preserving the contrast to your foreground                |
| `type`            | `'default'`, `'hipster'` | Yes      | `'default'` | `'default'` uses opacity (see gif [here](https://i.imgur.com/CsEehnx.gif)), `'hipster'` uses the expansion effect (gif above) |
