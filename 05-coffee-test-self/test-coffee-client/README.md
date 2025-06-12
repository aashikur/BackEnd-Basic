## 🎨 THEME STRATEGY

### ✅ Using DaisyUI Themes

DaisyUI supports multiple themes out of the box and toggling between light/dark is seamless.

### 🛠️ Setup

In your `tailwind.config.js`:

```js
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // You can customize or add your own themes too
  },
};
```

In your app root (`App.jsx` or `main.jsx`), wrap your content with:

```jsx
<html data-theme="light"> // or "dark", or bind dynamically
```

To toggle:

```js
document.documentElement.setAttribute("data-theme", "dark");
```

---

## 🌈 COLOR PALETTE

| Element        | Light Theme         | Dark Theme          |
| -------------- | ------------------- | ------------------- |
| Background     | `bg-base-100`       | `bg-base-100`       |
| Text           | `text-base-content` | `text-base-content` |
| Cards          | `bg-base-200`       | `bg-base-200`       |
| Primary Button | `btn-primary`       | `btn-primary`       |
| Accent         | `text-primary`      | `text-primary`      |
| Borders        | `border-base-300`   | `border-base-300`   |

These DaisyUI variables automatically adapt to theme context.

---

## 📐 SPACING SYSTEM

Follow a **8pt grid** logic for consistent spacing:

* `p-2`, `p-4`, `p-6`, `p-8`
* Use `gap-4` or `gap-6` in flex/grid layouts
* Responsive padding:

  * `p-4 sm:p-6 md:p-8 lg:p-10`

---

## 🧩 COMPONENT STRUCTURE DESIGN (Standard)

### Card

```jsx
<div className="card bg-base-200 shadow-md rounded-xl p-4">
  <h2 className="card-title text-lg md:text-xl">Title</h2>
  <p className="text-sm md:text-base text-base-content/80">Description</p>
  <div className="mt-4">
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

### Button Sizes

* Mobile: `btn-sm`
* Tablet: `btn-md`
* Desktop: `btn`

Use `w-full` on smaller screens and `w-auto` for tablet/PC.

---

## 📱📲 RESPONSIVENESS DESIGN

### Tailwind responsive breakpoints:

* `sm` (≥ 640px)
* `md` (≥ 768px)
* `lg` (≥ 1024px)
* `xl` (≥ 1280px)

Use these patterns:

```jsx
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
```

---

## 🌓 THEME TOGGLE (Optional Component)

```jsx
<label className="swap swap-rotate">
  <input
    type="checkbox"
    onChange={(e) =>
      document.documentElement.setAttribute("data-theme", e.target.checked ? "dark" : "light")
    }
  />
  <svg className="swap-on w-6 h-6 fill-current" ... /> {/* Sun Icon */}
  <svg className="swap-off w-6 h-6 fill-current" ... /> {/* Moon Icon */}
</label>
```

Or use DaisyUI `ThemeController` with packages like `use-local-storage`.

---

## 🧱 DESIGN SYSTEM SUMMARY

| Element      | Class Strategy                        |
| ------------ | ------------------------------------- |
| Cards        | `card bg-base-200 p-4 shadow-md`      |
| Buttons      | `btn btn-primary/secondary`           |
| Headers      | `text-2xl font-bold`                  |
| Text Body    | `text-base text-base-content`         |
| Containers   | `max-w-screen-lg mx-auto p-4 sm:p-6`  |
| Grid Layouts | `grid grid-cols-1 sm:grid-cols-2 ...` |

---

## ✅ You're Ready To Start
