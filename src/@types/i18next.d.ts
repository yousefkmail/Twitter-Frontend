import ns1 from "../locales/en/translation.json"
declare module "i18next" {
interface CustomTypeOptions {
    
    resources :{
        translation : typeof ns1
    }

}
}