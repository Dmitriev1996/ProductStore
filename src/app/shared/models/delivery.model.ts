import { Warehouse } from "./warehouse.model";
import { Provider } from "./provider.model";
import { ProductImport } from "./product-import.model";

export class Delivery {
  constructor(
    public delivery_ID: number,
    public dateOfDelivery: string,
    public provider: Provider,
    public warehouse: Warehouse,
    public productImportList: ProductImport[]
  ) {}
}
