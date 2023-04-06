import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: "325436657",
      name: "Item 1",
      qty: 31,
      description: "This is item 1"
    },
    {
      id: "325436657",
      name: "Item 2",
      qty: 32,
      description: "This is item 2"
    }
  ]
}
