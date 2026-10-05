# daisyUI & Tailwind Reference Sheet

## Buttons & Themes
```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-outline">Outline</button>
```

## Form Inputs
```html
<div class="form-control w-full max-w-xs">
  <label class="label"><span class="label-text">Username</span></label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
</div>
```

## Navbar (Header)
```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">My App</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Link 1</a></li>
      <li><a>Link 2</a></li>
    </ul>
  </div>
</div>
```

## Cards
```html
<div class="card bg-base-100 w-96 shadow-xl">
  <figure><img src="https://daisyui.com" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

## Hero Section
```html
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
```
