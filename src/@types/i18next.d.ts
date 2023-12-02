
import en from "../locales/en/translation.json"
declare module "i18next" {
interface CustomTypeOptions {
    resources: {
        ns1 : typeof en;
        }
    }
}
