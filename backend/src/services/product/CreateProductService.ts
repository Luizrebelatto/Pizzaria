import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  category_id: string;
  banner: string;
}

class CreateProductService {
  async execute({ name, price, description, category_id, banner }: ProductRequest) {
    
    return {ok: true}
  }
}

export { CreateProductService };