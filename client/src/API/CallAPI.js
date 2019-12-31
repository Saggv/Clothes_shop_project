import axios from "axios";

export const reqBody ={
    query:`
        query{
            TrendWeekImg {
            id,
            trendImg
            }
        }
    `
}

export const reqBodyProduct = {
     query:`
        query{
            PopularProduct{
            id,
            price,
            name,
            img,
            cag,
            forMen
            }
        }
     `
}
export const reqBodyMenHome = {
    query:`
        query{
            MenShopHome{
            id,
            name,
            price,
            img,
            cag,
            forMen
            }
        }
    `
}

export const reqBodyShowImg = {
    query:`
        query{
            ShowImg{
            id,
            userImg,
            showImg
            }
        }
    `
}
export const reqBodyMenProduct ={
    query:`
        query{
            MenProduct{
                id,
                name,
                price,
                cag,
                forMen,
                img
            }
        }
    `
}
export const reqBodyWomenHome = {
    query:`
        query{
            WomenShopHome{
            id,
            name,
            price,
            img,
            cag,
            forMen
            }
        }
    `
}
export const reqSlideImg = {
    query:`
        query{
            SlideImg{
            id,
            slideImg
            }
        }
    `
};
export const reqProductMen = {
    query:`
        query{
            MenProduct{
            id,
            name,
            price,
            cag,
            forMen,
            img
        }
        }
    `
}
export const reqProductWomen = {
    query:`
        query{
            WomenProduct{
                id,
                name,
                price,
                cag,
                forMen,
                img
            }
        }
    `
}
export const reqViewMoreProductMen=({
      query:`
        query{
            ViewMoreProductMen{
            id,
            name,
            price,
            img,
            cag,
            forMen
            }
        }
      `
})

export const reqViewMoreProductWomen=({
    query:`
        query{
            ViewMoreProductWomen{
                id,
                name,
                price,
                img,
                cag,
                forMen
            }
        }
    `
})

export const Respue = async(param={}, token)=>{
    const result = await axios.post("/graphql",JSON.stringify(param),{
        headers: {"Content-Type":"application/json",
                  "Authorization": token
       }
      }
    )
    return result;
}