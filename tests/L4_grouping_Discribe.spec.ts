import{test,expect} from '@playwright/test'

test.describe("Group-1",async()=>
{
    test('Test-1',async()=>
    {
        console.log("This is Group 1...")
    })

    test('Test-2',async()=>
    {
        console.log("This is Group 2...")
    })

    test('Test-3',async()=>
    {
        console.log("This is Group 3...")
    })
})

test.describe("Group-2",async()=>
{
    test('Test-4',async()=>
    {
        console.log("This is Group 4...")
    })

    test('Test-5',async()=>
    {
        console.log("This is Group 5...")
    })

    test('Test-6',async()=>
    {
        console.log("This is Group 6...")
    })
})

//Nested Groups // Nested describe blocks

test.describe('E-Commerce', () => {

    test.describe('Login to app', () => {

        test('Valid login check', async () => {
            console.log(" this is Test1 ......")
        });

        test('Invalid login check', async () => {
            console.log(" this is Test2 ......")
        });
    });

    test.describe('Cart', () => {
        test('Add item to cart', async () => {
            console.log(" this is Test3 ......")
        });

        test('Remove item from cart', async () => {
            console.log(" this is Test4 ......")
        });
    });

});


test.describe.serial('Another Group', async () => {

    test('Test1', async () => {
        console.log(" this is Test1 ......")
    });


    test('Test2', async () => {
        console.log(" this is Test2 ......")
    });

})
