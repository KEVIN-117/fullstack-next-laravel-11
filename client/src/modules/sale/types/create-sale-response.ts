import { IDetailsSales } from "./IDetailsSales"
import { ISale } from "./ISale"

export interface ICreateSaleResponse {
    message: string
    sale: ISale,
    details: IDetailsSales[]
}