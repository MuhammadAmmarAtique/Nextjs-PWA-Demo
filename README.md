# 📱 Next.js Progressive Web App (PWA)

This project is a **Progressive Web App (PWA)** built using **Next.js** with the help of the [`next-pwa`](https://www.npmjs.com/package/next-pwa) plugin.
It supports offline functionality and allows users to **install the app** on their desktop or mobile devices.

---

## 🚀 How to Run the App

To build and run the app locally:

```bash
npm run build
npm run start
```

Once started:

* The app will be available **offline**.
* You’ll see an **install (download) icon** in the top-right corner of the browser.

---

## ⚙️ Setup Instructions

### 1. Generate and Add a Manifest File

* Create a `manifest.json` and app icons using [Web Manifest Generator](https://www.infyways.com/tools/web-manifest-generator/).
* Place both the generated **manifest file** and **icons** inside the `/public` folder.

### 2. Link the Manifest in Metadata

In your `Layout.tsx` file, add the manifest path to the metadata configuration:

```ts
manifest: "/manifest.json"
```

> 💡 The **install icon** appears because of this manifest file.
> The **icon image** and **app name** (shown after installation) come from the fields you define in the manifest.

---

## 🧩 Key Code Files

| File                                       | Description                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------ |
| `next.config.ts`                           | Configure `next-pwa` with the `withPWA` wrapper.                         |
| `src/components/ServiceWorkerRegister.tsx` | Registers the service worker. Import and call this in your `Layout.tsx`. |

---

## 📦 NPM Package Used

* [`next-pwa`](https://www.npmjs.com/package/next-pwa)

This plugin automatically generates the following files inside your `public` folder after build:

* `sw.js`
* `workbox.js`

---

## 💡 Summary

After setup and build:

* Your Next.js app works **offline**.
* A **download (install)** option appears.
* Installed app shows the **custom icon** and **app name** from `manifest.json`.
