import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: OrderRequest) {

    const orders = await prismaClient.item.findMany({
      where: {
        order_id: order_id
      },
      include: {
        product: true,
        item: true
      }
    })

    return orders;
  }
}

export { DetailOrderService }