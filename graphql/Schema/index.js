const {buildSchema} = require("graphql");

module.exports = buildSchema(`
    type product {
        id: ID!,
        name: String!,
        price: Float!,
        img: String,
        cag: String!,
        forMen: String
    }
    type TrendWeekImg{
        id: ID!,
        trendImg: String!
    }
    type slideImg{
        id: ID!,
        slideImg:String
    }
    type showImg{
        id: ID,
        userImg: String,
        showImg: String
    }
    type user{
        id: ID,
        name: String,
        userName: String,
        password: String,
        avatar: String,
        job: String,
        address: String,
        email: String

    }
    type auth{
        userId: ID!,
        name: String,
        userName:String,
        token: String,
        avatar: String,
        job: String,
        address: String,
        email: String
    }
    type booking{
        user: user,
        productsId: product,
        amount: Int,
        dateBook: String
    }
    type cart{
        id:ID,
        userCookie: String,
        productId: product,
        amount: Int
    }
    type inputBookingMany{
        userId:ID,
        productId:ID,
        amount: Int
    }
    type RootQuery {
        Products: [product!]!,
        PopularProduct: [product!],
        MenProduct: [product!],
        WomenProduct: [product!],
        MenShopHome: [product!],
        WomenShopHome: [product!],
        TrendWeekImg: [TrendWeekImg!],
        SlideImg: [slideImg],
        ShowImg: [showImg],
        User: [user],
        Login(userName: String!, password: String!): auth,
        Booking: [booking],
        ProductDetail(idProduct: ID): product,
        ViewMoreProductMen:[product],
        ViewMoreProductWomen:[product],
        Cart(userCookie:String):[cart],
        ReductionCart(productIdss: ID, userCookiess: String):cart,
        IncreaseCart(productIds: ID, userCookies: String): [cart],
        RemoveCartItem(cartId: ID, userCookies: String):String
        getProfile: user,
        getBooking:[booking],
        CartToBooking(userCookie: String):String
    }
    input text {
        name: String!,
        price: Float!,
        img: String,
        cag: String!,
        forMen: Boolean
    },
    input inputSlide{
        cag: String!,
        imgUrl: String
    }
    input inputShowImg{
        userImg: String!,
        showImg: String
    }
    input inputSignup{
        name: String,
        userName: String,
        password: String
    }
    input inputBooking{
        userId:ID,
        productsId:ID,
        amount: Int
    }
    input inputCart{
        userCookie: String,
        productId: ID
    }
    type RootMutation{
        createProduct(productInput: text):product!,
        removeProductItem(idRemove: ID):ID,
        updateProductItem(idUpdate: ID):product,
        addTrendWeekImg(imgUrl: String):TrendWeekImg,
        removeTrendWeekImg(idRemove: ID): TrendWeekImg,
        addSlideImg(inputSlide: inputSlide): slideImg,
        typeSlideImg(typeImg: String):[slideImg],
        addShowImg(inputShowImg: inputShowImg): showImg,
        signup(inputSignup: inputSignup):auth!,
        bookingProduct( inputBooking: inputBooking):booking,
        cancelBookingProduct(idBooking: ID): String,
        AddToCart(inputCart: inputCart):cart,
        BookingMany(data: [inputBooking]):String
        
    }
    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`)