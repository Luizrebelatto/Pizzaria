import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest){

    if (name === '') throw new Error("name invalid");

    const category = await prismaClient.category.create({
      data: { name: name },
      select: {
        id: true,
        name: true,
      }
    })
    
    return category;
  }
}