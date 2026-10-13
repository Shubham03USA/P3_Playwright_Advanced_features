# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\POM_TestFile.spec.ts >> Demoblaze Tests >> User can login, add a product to cart and verify it
- Location: tests\POM\POM_TestFile.spec.ts:36:7

# Error details

```
Error: Product "Nexus 6" not found on the page
```

# Test source

```ts
  1   | import { Page, Locator } from '@playwright/test';
  2   | 
  3   | export class HomePage 
  4   | {
  5   |   private readonly page: Page;
  6   |   private readonly productLinks: Locator;
  7   |   private readonly addToCartButton: Locator;
  8   |   private readonly cartLink: Locator;
  9   |   private readonly categoryLinks: Locator;
  10  | 
  11  |   constructor(page: Page) 
  12  |   {
  13  |     this.page = page;
  14  |     this.productLinks = page.locator('div#tbodyid div.card h4.card-title a');
  15  |     this.addToCartButton = page.locator('a:has-text("Add to cart")');
  16  |     this.cartLink = page.locator('#cartur');
  17  |     this.categoryLinks = page.locator('.list-group a');
  18  |   }
  19  | 
  20  |   // Navigation methods
  21  |   async navigateToCart() 
  22  |   {
  23  |     await this.cartLink.click();
  24  |   }
  25  | 
  26  |   // Product actions
  27  |   async addProductToCart(productName: string) 
  28  |   {
  29  |     // Click on the product to view its details
  30  |     await this.selectProductByName(productName);
  31  |     
  32  |     // Handle the dialog that appears after adding to cart
  33  |     this.page.once('dialog', async dialog => 
  34  |     {
  35  |       if (dialog.message().includes('added')) 
  36  |       {
  37  |         await dialog.accept();
  38  |       }
  39  |     });
  40  | 
  41  |     // Click the "Add to cart" button
  42  |     await this.addToCartButton.click();
  43  |   }
  44  | 
  45  |   async selectProductByName(productName: string) 
  46  |   {
  47  |     const productElements = await this.productLinks.all();
  48  |     
  49  |     for (const product of productElements) 
  50  |     {
  51  |       const name = await product.textContent();
  52  |      
  53  |       if (name?.trim() === productName) 
  54  |       {
  55  |         await product.click();
  56  |         return;
  57  |       }
  58  |     }
  59  |     
> 60  |     throw new Error(`Product "${productName}" not found on the page`);
      |           ^ Error: Product "Nexus 6" not found on the page
  61  |   }
  62  | 
  63  |   // Category filtering
  64  |   async selectCategory(categoryName: string) 
  65  |   {
  66  |     const categories = await this.categoryLinks.all();
  67  |     
  68  |     for (const category of categories) 
  69  |     {
  70  |       const name = await category.textContent();
  71  |       if (name?.trim().toLowerCase() === categoryName.toLowerCase()) 
  72  |       {
  73  |         await category.click();
  74  |         await this.page.waitForLoadState('networkidle');
  75  |         return;
  76  |       }
  77  |     }
  78  |     
  79  |     throw new Error(`Category "${categoryName}" not found`);
  80  |   }
  81  | 
  82  |   // Verification methods
  83  |   async isProductVisible(productName: string) 
  84  |   {
  85  |     const products = await this.productLinks.all();
  86  |     
  87  |     for (const product of products) 
  88  |     {
  89  |       const name = await product.textContent();
  90  |       if (name?.trim() === productName) 
  91  |       {
  92  |         return true;
  93  |       }
  94  |     }
  95  |     
  96  |     return false;
  97  |   }
  98  | 
  99  |   // Wait methods
  100 |   async waitForProductsToLoad() 
  101 |   {
  102 |     await this.page.waitForSelector('div#tbodyid div.card', { state: 'visible' });
  103 |   }
  104 | }
```