export const HomePage=
class HomePage{
    constructor(page){
        this.page=page
        this .ProductList="//div[@id='tbodyid']//div//h4"
        this.addToCartBtn='.btn.btn-success.btn-lg'
       
    }

    async selectproduct(ProductName){
       const productList= await this.page.$$(this.ProductList)
       for(const product of productList){
        if(ProductName === await product.textContent()){
            await product.click()
            break
        }
    }
        await this.page.locator(this.addToCartBtn).click()

        await this.page.on('dialog',async dialog=>{
           if(dialog.message().includes('Product added'))
           {
            await dialog.accept()
           }

        })
        
       }
    }

