Key Features:

- Using Shadcn UI for the Admin!
- Our admin dashboard is going to serve as both CMS, Admin and API!
- Able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- Able to create, update and delete categories!
- Able to create, update and delete products!
- Able to upload multiple images for products, and change them whenever you want!
- Able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- Able to create, update and delete "Billboards" which are these big texts on top of the page. Able to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases!)
- Able to Search through all categories, products, sizes, colors, billboards with included pagination!
- Able to control which products are "featured" so they show on the homepage!
- Able to see your orders, sales, etc.
- Able to see graphs of your revenue etc.
- Clerk Authentication!
- Order creation
- Stripe checkout
- Stripe webhooks
- MySQL + Prisma + PlanetScale

### Prerequisites

**Node version 14.x**

### Install packages

```shell
npm i
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
