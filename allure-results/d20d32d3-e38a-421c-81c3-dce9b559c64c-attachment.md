# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: L3.3_parameterTest4.spec.ts >> Login Data driven test >> Login test with email: laura.taylor1234@example.com and password: test123
- Location: tests\L3.3_parameterTest4.spec.ts:25:13

# Error details

```
TypeError: Cannot read properties of undefined (reading 'toLowerCase')
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - generic [ref=f1e4]:
      - link [ref=f1e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f1e7]
      - list [ref=f1e10]:
        - listitem [ref=f1e11]:
          - link "laura.taylor1234@example.com" [ref=f1e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f1e13]:
          - link "Log out" [ref=f1e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f1e15]:
          - link "Shopping cart (0)" [ref=f1e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f1e17]: Shopping cart
            - generic [ref=f1e18]: (0)
        - listitem [ref=f1e19]:
          - link "Wishlist (0)" [ref=f1e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f1e21]: Wishlist
            - generic [ref=f1e22]: (0)
      - generic [ref=f1e24]:
        - status [ref=f1e25]
        - textbox [ref=f1e26]: Search store
        - button "Search" [ref=f1e27] [cursor=pointer]
    - list [ref=f1e29]:
      - listitem [ref=f1e30]:
        - link "Books" [ref=f1e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f1e32]:
        - link "Computers" [ref=f1e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f1e34]:
        - link "Electronics" [ref=f1e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f1e36]:
        - link "Apparel & Shoes" [ref=f1e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f1e38]:
        - link "Digital downloads" [ref=f1e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f1e40]:
        - link "Jewelry" [ref=f1e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f1e42]:
        - link "Gift Cards" [ref=f1e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f1e44]:
        - generic [ref=f1e45]:
          - strong [ref=f1e47]: Categories
          - list [ref=f1e49]:
            - listitem [ref=f1e50]:
              - link "Books" [ref=f1e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f1e52]:
              - link "Computers" [ref=f1e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f1e54]:
              - link "Electronics" [ref=f1e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f1e56]:
              - link "Apparel & Shoes" [ref=f1e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f1e58]:
              - link "Digital downloads" [ref=f1e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f1e60]:
              - link "Jewelry" [ref=f1e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f1e62]:
              - link "Gift Cards" [ref=f1e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f1e64]:
          - strong [ref=f1e66]: Manufacturers
          - list [ref=f1e68]:
            - listitem [ref=f1e69]:
              - link "Tricentis" [ref=f1e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f1e71]:
          - strong [ref=f1e73]: Popular tags
          - generic [ref=f1e74]:
            - list [ref=f1e76]:
              - listitem [ref=f1e77]:
                - link "apparel" [ref=f1e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f1e79]:
                - link "awesome" [ref=f1e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f1e81]:
                - link "book" [ref=f1e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f1e83]:
                - link "camera" [ref=f1e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f1e85]:
                - link "cell" [ref=f1e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f1e87]:
                - link "compact" [ref=f1e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f1e89]:
                - link "computer" [ref=f1e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f1e91]:
                - link "cool" [ref=f1e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f1e93]:
                - link "digital" [ref=f1e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f1e95]:
                - link "jeans" [ref=f1e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f1e97]:
                - link "jewelry" [ref=f1e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f1e99]:
                - link "nice" [ref=f1e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f1e101]:
                - link "shirt" [ref=f1e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f1e103]:
                - link "shoes" [ref=f1e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f1e105]:
                - link "TCP" [ref=f1e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f1e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f1e109]:
        - generic [ref=f1e110]:
          - strong [ref=f1e112]: Newsletter
          - generic [ref=f1e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f1e116]
            - button "Subscribe" [ref=f1e118] [cursor=pointer]
        - generic [ref=f1e119]:
          - strong [ref=f1e121]: Community poll
          - generic [ref=f1e123]:
            - strong [ref=f1e124]: Do you like nopCommerce?
            - list [ref=f1e125]:
              - listitem [ref=f1e126]: Excellent (7098 vote(s) - 51.4%)
              - listitem [ref=f1e127]: Good (3498 vote(s) - 25.3%)
              - listitem [ref=f1e128]: Poor (808 vote(s) - 5.9%)
              - listitem [ref=f1e129]: Very bad (2405 vote(s) - 17.4%)
            - text: 13809 vote(s)...
      - generic [ref=f1e132]:
        - generic [ref=f1e133]:
          - generic [ref=f1e134]:
            - link [ref=f1e135] [cursor=pointer]:
              - /url: https://academy.tricentis.com
            - generic [ref=f1e137]: Tricentis Academy
            - generic:
              - generic [ref=f1e138] [cursor=pointer]: Prev
              - generic [ref=f1e139] [cursor=pointer]: Next
          - generic [ref=f1e170]:
            - generic [ref=f1e171] [cursor=pointer]: "1"
            - generic [ref=f1e172] [cursor=pointer]: "2"
        - generic [ref=f1e173]:
          - heading "Welcome to our store" [level=2] [ref=f1e175]
          - generic [ref=f1e176]:
            - paragraph [ref=f1e177]: Welcome to the new Tricentis store!
            - paragraph [ref=f1e178]: Feel free to shop around and explore everything.
        - generic [ref=f1e179]:
          - strong [ref=f1e181]: Featured products
          - generic [ref=f1e183]:
            - link [ref=f1e185] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f1e186]
            - generic [ref=f1e187]:
              - heading [level=2] [ref=f1e188]:
                - link "$25 Virtual Gift Card" [ref=f1e189] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "914 review(s)" [ref=f1e190]
              - generic [ref=f1e193]:
                - generic [ref=f1e194]: "25.00"
                - button "Add to cart" [ref=f1e197] [cursor=pointer]
          - generic [ref=f1e199]:
            - link [ref=f1e201] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f1e202]
            - generic [ref=f1e203]:
              - heading [level=2] [ref=f1e204]:
                - link "14.1-inch Laptop" [ref=f1e205] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1729 review(s)" [ref=f1e206]
              - generic [ref=f1e209]:
                - generic [ref=f1e210]: "1590.00"
                - button "Add to cart" [ref=f1e213] [cursor=pointer]
          - generic [ref=f1e215]:
            - link [ref=f1e217] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f1e218]
            - generic [ref=f1e219]:
              - heading [level=2] [ref=f1e220]:
                - link "Build your own cheap computer" [ref=f1e221] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "930 review(s)" [ref=f1e222]
              - generic [ref=f1e225]:
                - generic [ref=f1e226]: "800.00"
                - button "Add to cart" [ref=f1e229] [cursor=pointer]
          - generic [ref=f1e231]:
            - link [ref=f1e233] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f1e234]
            - generic [ref=f1e235]:
              - heading [level=2] [ref=f1e236]:
                - link "Build your own computer" [ref=f1e237] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "436 review(s)" [ref=f1e238]
              - generic [ref=f1e241]:
                - generic [ref=f1e242]: "1200.00"
                - button "Add to cart" [ref=f1e245] [cursor=pointer]
          - generic [ref=f1e247]:
            - link [ref=f1e249] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f1e250]
            - generic [ref=f1e251]:
              - heading [level=2] [ref=f1e252]:
                - link "Build your own expensive computer" [ref=f1e253] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "527 review(s)" [ref=f1e254]
              - generic [ref=f1e257]:
                - generic [ref=f1e258]: "1800.00"
                - button "Add to cart" [ref=f1e261] [cursor=pointer]
          - generic [ref=f1e263]:
            - link [ref=f1e265] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f1e266]
            - generic [ref=f1e267]:
              - heading [level=2] [ref=f1e268]:
                - link "Simple Computer" [ref=f1e269] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "410 review(s)" [ref=f1e270]
              - generic [ref=f1e273]:
                - generic [ref=f1e274]: "800.00"
                - button "Add to cart" [ref=f1e277] [cursor=pointer]
  - generic [ref=f1e278]:
    - generic [ref=f1e279]:
      - generic [ref=f1e280]:
        - heading "Information" [level=3] [ref=f1e281]
        - list [ref=f1e282]:
          - listitem [ref=f1e283]:
            - link "Sitemap" [ref=f1e284] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f1e285]:
            - link "Shipping & Returns" [ref=f1e286] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f1e287]:
            - link "Privacy Notice" [ref=f1e288] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f1e289]:
            - link "Conditions of Use" [ref=f1e290] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f1e291]:
            - link "About us" [ref=f1e292] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f1e293]:
            - link "Contact us" [ref=f1e294] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f1e295]:
        - heading "Customer service" [level=3] [ref=f1e296]
        - list [ref=f1e297]:
          - listitem [ref=f1e298]:
            - link "Search" [ref=f1e299] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f1e300]:
            - link "News" [ref=f1e301] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f1e302]:
            - link "Blog" [ref=f1e303] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f1e304]:
            - link "Recently viewed products" [ref=f1e305] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e306]:
            - link "Compare products list" [ref=f1e307] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f1e308]:
            - link "New products" [ref=f1e309] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f1e310]:
        - heading "My account" [level=3] [ref=f1e311]
        - list [ref=f1e312]:
          - listitem [ref=f1e313]:
            - link "My account" [ref=f1e314] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f1e315]:
            - link "Orders" [ref=f1e316] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f1e317]:
            - link "Addresses" [ref=f1e318] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f1e319]:
            - link "Shopping cart" [ref=f1e320] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f1e321]:
            - link "Wishlist" [ref=f1e322] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f1e323]:
        - heading "Follow us" [level=3] [ref=f1e324]
        - list [ref=f1e325]:
          - listitem [ref=f1e326]:
            - link "Facebook" [ref=f1e327] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e328]:
            - link "Twitter" [ref=f1e329] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e330]:
            - link "RSS" [ref=f1e331] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f1e332]:
            - link "YouTube" [ref=f1e333] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e334]:
            - link "Google+" [ref=f1e335] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e336]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e337] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e338]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | /* 
  2  | We need to install csv parse module to read csv file:
  3  | => npm install csv-parse (enter)
  4  | */
  5  | 
  6  | import { test, expect } from "@playwright/test";
  7  | import fs from "fs";
  8  | import {parse} from "csv-parse/sync";
  9  | 
  10 | //Reading data from csv file
  11 | const csvPath = "./testData/data.csv";
  12 | const filecontent = fs.readFileSync(csvPath,"utf-8");
  13 | 
  14 | const records:any[] = parse(filecontent,
  15 |                                 {
  16 |                                     columns:true,
  17 |                                     skip_empty_lines:true
  18 |                                 });
  19 |                      
  20 | //main test
  21 | test.describe("Login Data driven test", async () => {
  22 | 
  23 |     for (const data of records) {
  24 | 
  25 |         test(`Login test with email: ${data.email} and password: ${data.password}`, async ({ page }) => {
  26 | 
  27 |             await page.goto("https://demowebshop.tricentis.com/login");
  28 | 
  29 |             //fill login from
  30 |             await page.locator('#Email').fill(data.email);
  31 |             await page.locator('#Password').fill(data.password);
  32 |             await page.locator('input[value="Log in"]').click();
  33 | 
> 34 |             if (data.expected.toLowerCase() === "valid") {
     |                               ^ TypeError: Cannot read properties of undefined (reading 'toLowerCase')
  35 |                 //Assert logout linkis visible - indicates successful login
  36 |                 const logoutlink = page.locator('a[href="/logout"]');
  37 |                 await expect(logoutlink).toBeVisible({ timeout: 3000 });
  38 |             }
  39 |             else {
  40 |                 //Assert error message is visible
  41 |                 const errorMsg = page.locator('.validation-summary-errors');
  42 |                 await expect(errorMsg).toBeVisible({ timeout: 3000 });
  43 | 
  44 |                 //Assert user still on the login page
  45 |                 await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
  46 | 
  47 |             }
  48 |         })
  49 |     }
  50 | })
```